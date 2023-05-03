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
 
function evalQuestion(input) {
    if (isCalculatorQuery(input) !== null) {
        return validateAndEvalExp(isCalculatorQuery(input));
    } else if (isDateQuery(input) !== null) {
        return validateAndEvalDate(isDateQuery(input));
    } else if (isAddQuestionQuery(input) !== null) {
        const match = isAddQuestionQuery(input);
        const question = match[1];
        const answer = match[2];
        handleCreateQnA(question, answer);
    } else if (isRemoveQuestionQuery(input) !== null) {
        const match = isRemoveQuestionQuery(input); /* The Question */
        /* TODO: Handle Delete */
    } else {
        /* Question Feature (From Database) */
    }
}