import validateAndEvalExp from "./calculator.js";
import validateAndEvalDate from "./date.js";
import searchExactMatch from "./search.js";
import { search90 } from "./search.js";
import { search3Nearest } from "./search.js";

/* Calculator */
function isCalculatorQuery(input) {
    const regex = /[\d+\-*/()\s]+/;
    const match = input.match(regex);
    console.log(match)
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

// function splitQuestion(question) {
//     let questions = question.split('?');
//     questions = questions.map((q) => q.trim());

//     let ans = [];

//     question.forEach((q) => {
//         ans.push(evalQuestion(q));
//     });

//     if (ans.length == 1) {
//         return ans[0];
//     } else {
//         let res = `Kami mendeteksi {questions.length} pertanyaan:   `;
//         for (let i = 0; i < questions.length; i++) {
//             ans
//         }
//     }

// }

export default function evalQuestion(input, arr, fdel, fadd, fupdate, isKMP) {
    console.log("woi")
    if (isDateQuery(input)) {
        return validateAndEvalDate(isDateQuery(input));
    } else if (isCalculatorQuery(input)) {
        return validateAndEvalExp(isCalculatorQuery(input));
    } else if (isAddQuestionQuery(input)) {
        // TODO: coba cek lagi, ini salah sih, print si question sama answernya coba
        const match = isAddQuestionQuery(input);
        const question = match[1];
        const answer = match[2];
        let res = searchExactMatch(question, arr, isKMP);
        if (res) {
            fupdate(res._id, res.question, res.answer);
            return "Berhasil mengupdate pertanyaan dan jawaban";
        } else {
            // TODO: ini aku dummy, ganti sama question & answer
            fadd("ayam", "ayam lah");
            return "Berhasil menambah pertanyaan dan jawaban";
        }
    } else if (isRemoveQuestionQuery(input)) {
        // TODO: ini juga masih salah parsingnya
        const match = isRemoveQuestionQuery(input); /* The Question */
        console.log(`INIIII: ${match}`); // testing
        // TODO: ini aku dummy, ganti sama matchnya
        let res = searchExactMatch("ayam", arr, isKMP);
        if (res) {
            fdel(res._id);
            return "Berhasil menghapus pertanyaan";
        } else {
            return "Pertanyaan tidak ditemukan";
        }
    } else {
        let t1 = searchExactMatch(input, arr, isKMP);
        console.log(t1);
        if (t1) {
            return t1.answer;
        }

        let t2 = search90(input, arr);
        console.log(t1);
        if (t2) {
            return t2.answer;
        }

        let t3 = search3Nearest(input, arr);
        console.log(t1);
        if (t3) {
            let res = `Apakah maksud Anda salah satu dari pertanyaan:   `;
            for (let i = 0; i < t3.length; i++) {
                res += `${i + 1}. ${t3[i].question}   `;
            }
            return res;
        }

        return "Tidak ada pertanyaan yang sesuai"
    }
}

// let tesstr = "Hapus pertanyaan x"
// console.log(evalQuestion(tesstr));
