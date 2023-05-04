import exactMatchKMP from "./kmp.js";
import exactMatchBM from "./bm.js";
import similarityPercentage from "./similarity.js";

export default function searchExactMatch(question, arr, isKMP) {
    if (isKMP) {
        for (let i = 0; i < arr.length; i++) {
            if (exactMatchKMP(question, arr[i].question)) return arr[i];
        }
    } else { // bm
        for (let i = 0; i < arr.length; i++) {
            if (exactMatchBM(question, arr[i].question)) return arr[i];
        }
    }
    return null;
}

export function search90(question, arr) {
    if (arr.length == 0) {
        return null;
    } else {
        let maxRes = arr[0];
        let maxSim = similarityPercentage(question, arr[0].question);

        for (let i = 0; i < arr.length; i++) {
            let sim = similarityPercentage(question, arr[i].question);

            if (sim > maxSim) {
                maxSim = sim;
                maxRes = arr[i];
            }
        }
        console.log(maxSim, maxRes);
        return (maxSim > 0.9) ? maxRes : null;
    }
}

export function search3Nearest(question, arr) {
    let len = arr.length;

    if (len == 0) {
        return null;
    } else {
        arr.sort((a, b) => (similarityPercentage(b.question, question) - similarityPercentage(a.question,question)));

        return arr.slice(0, Math.min(3, len));
    }
}
