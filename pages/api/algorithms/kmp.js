/* KMP Algorithm */

/* Return the index where the pattern starts, or -1 */
function kmp(text, pattern) {
    let border = computeBorderKmp(pattern);
    let i = 0, j = 0;
  
    while (i < text.length) {
        if (text[i] === pattern[j]) {
            if (j === pattern.length - 1) {
                return (i - pattern.length + 1); /* If there is a match */
            }
            i++;
            j++;
        } else if (j > 0) {
            j = border[j - 1];
        } else {
            i++;
        }
    }   
    return (-1); /* If there is no match */
}

/* Computes KMP border function for KMP algorithm */
function computeBorderKmp(pattern) {
    let border = new Array(pattern.length).fill(0);
    border[0] = 0;
    let i = 1;
    let j = 0;

    while (i < pattern.length) {
        if (pattern.charAt(j) == pattern.charAt(i)) {
            /* If j+1 chars match */
            border[i] = j + 1;
            i++;
            j++;
        } else if (j > 0) {
            /* If j follows matching prefix */
            j = border[j - 1];
        } else {
            /* If there is no match */
            border[i] = 0;
            i++;
        }
    }
    return border;
}