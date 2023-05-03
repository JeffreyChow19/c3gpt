/**
 * last occurence function for bm algorithm
 *
 * @param {*} pattern (string)      : pattern to check for
 * @returns   (object dictionary)   : last occurence dictionary
 */
function lastOcc(pattern) {
    let lastOccDict = {};

    // handling ASCII characters
    for (let i = 0; i < 128; i++) {
        lastOccDict[i] = -1;
    }

    for (let i = 0; i < pattern.length; i++) {
        lastOccDict[pattern.charCodeAt(i)] = i;
    }

    return lastOccDict;
}

/**
 * boyer moore algorithm to find matching index of text (index starts from zero)
 *
 * @param {*} text (string)
 * @param {*} pattern (string)
 * @returns   (int)             : -1 if no match, 0..text.length - 1 if match
 */

function bm(text, pattern) {
    let textLen = text.length;
    let patternLen = pattern.length;

    if (textLen < patternLen) {
        return -1;
    }

    let last = lastOcc(pattern);
    let i = patternLen - 1;
    let j = patternLen - 1;

    do {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                return i;
            } else {
                i--;
                j--;
            }
        } else {
            let lastOccurrence = last[text.charCodeAt(i)];
            i += patternLen - Math.min(j, 1 + lastOccurrence);
            j = patternLen - 1;
        }
    } while (i <= textLen - 1);

    return -1;
}

/**
 * wrapper to find exact match of two string using bm algorithm
 *
 * @param {*} str1 (string)
 * @param {*} str2 (string)
 * @returns   (boolean)     : true if match, false otherwise
 */
function exactMatchBM(str1, str2) {
    return (str1.length == str2.length && (str1.length == 0 || bm(str1, str2) == 0));
}
