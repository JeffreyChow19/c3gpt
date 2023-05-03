/**
 * check whether a given date is valid
 *
 * @warning   date must be in format d/m/y (dd/mm/yyyy is okay)
 * @param {*} date (string) : date to check
 * @returns   (boolean)     : true if date is valid, false otherwise
 */
function isDateValid(date) {
    let dateArr = date.split('/');

    let y = parseInt(dateArr[2]);
    let m = parseInt(dateArr[1]);
    let d = parseInt(dateArr[0]);

    if (d < 1 || d > 31 || m < 1 || m > 12 || y < 0) return false;
    if ((m === 4 || m === 6 || m === 9 || m === 11) && d > 30) return false;
    if (m === 2 && d > 29) return false;
    if (m === 2 && y % 4 !== 0 && d > 28) return false;

    return true;
}

/**
 * get day of given date
 *
 * @warning   date must be in format d/m/y (dd/mm/yyyy is okay) and should be valid
 * @param {*} date (string) : date to get
 * @returns   (string)      : day of week
 */
function getDay(date) {
    let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

    let dateArr = date.split('/');

    let y = parseInt(dateArr[2]);
    let m = parseInt(dateArr[1]);
    let d = parseInt(dateArr[0]);

    let magicNum = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
    y -= (m < 3) ? 1 : 0;
    let dayIdx = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + magicNum[m - 1] + d) % 7

    return days[dayIdx];
}

/**
 * convert date from d[prevSplitter]m[prevSplitter]y[prevSplitter] to d[newSplitter]m[newSplitter]y[newSplitter]
 *
 * @param {*} date (string)         : date in format d[prevSplitter]m[prevSplitter]y[prevSplitter]
 * @param {*} prevSplitter (string)
 * @param {*} newSplitter (string)
 * @returns   (string)              : date in format d[newSplitter]m[newSplitter]y[newSplitter]
 */
function convertDateSplitter(date, prevSplitter, newSplitter) {
    return date.split(prevSplitter).join(newSplitter);
}

function validateAndEvalDate(date) {
    if (!isDateValid(date)) return "Tanggal tidak valid";
    try {
        return getDay(date).toString();
    } catch (e) {
        return "Tanggal tidak valid";
    }
}