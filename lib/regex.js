/* Calculator */
function isCalculatorQuery(input) {
    const regex = /[\d+\-*/()\s]+/;
    const match = input.match(regex);
    return match ? match[0] : null;
}

/* Date */
function isDateQuery(input) {
    const regex = /(0?[1-9]|[12]\d|3[01])\/(0?[1-9]|1[0-2])\/\d{4}/;
    const match = input.match(regex);
    return match ? match[0] : null;
}

/* Add Question */
function isAddQuestionQuery(input) {
    const regex = /^Tambahkan pertanyaan (.+) dengan jawaban (.+)$/i;
    const match = input.match(regex);
    return match ? match[0] : null;
}

/* Remove Question */
function isRemoveQuestionQuery(input) {
    const regex = /^Hapus pertanyaan (.+)$/i;
    const match = input.match(regex);
    return match ? match[0] : null;
}
 
// function detectQuestion(input) {
//     if (isCalculatorQuery(input) !== null) {
//         return validateAndEvalExp(isCalculatorQuery(input));
//     } else if (isDateQuery(input) !== null) {
//         return validateAndEvalDate(isDateQuery(input));
//     } else if (isAddQuestionQuery(input) !== null) {

//     } else if (isRemoveQuestionQuery(input) !== null) {

//     } else {
//         /* Question Feature (From Database) */
//     }
// }