/**
 * Checks whether the given expression is a valid math expression in infix notation
 *
 * @param {*} exp (string)  : expression to check
 * @returns   (boolean)     : true if the expression is valid, false otherwise
 */
function isExpValid(exp) {
    return /^[\d+\-*/^()?\s]+(\?)?$/.test(exp);
}

/**
 * Calculate num1 op num2
 *
 * @warning   if op = '/', num2 cannot be 0
 * @param {*} num1 (number)     : first operand
 * @param {*} op (string)       : operator
 * @param {*} num2 (number)     : second operand
 * @returns   (number) num1 op num2
 */
function calculate(num1, op, num2) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default: // ^
            return Math.pow(num1,num2);
    }
}

/**
 * Evaluate arithmetic expression in infix notation
 *
 * @warning   exp should be valid (zero division is handled in this function)
 * @warning   throwing error if zero division exists in expression
 * @param {*} exp (string) : expression to evaluate
 * @returns   (number)     : calculated expression
 */
function evalExp(exp) {
    let opStack = [];
    let numStack = [];
    let operators = ['+', '-', '*', '/', '^'];

    let expArr = exp.replace(/\s/g,'').match(/[^\d()]+|[\d.]+|\(|\)/g);

    // handling negative numbers placed at first / after left parentheses
    if (expArr[0] === '-') { // - di awal
        if (expArr.length > 1 && Number(expArr[1]) !== NaN) {
            expArr[1] = expArr[0] + expArr[1];
            expArr[0] = '$'; // mark
        } else {
            throw new Error("Invalid expression");
        }
    }

    for (let i = 1; i < expArr.length - 1; i++) {
        if (expArr[i] === '-' && expArr[i - 1] === '(') {
            if (Number(expArr[i + 1]) !== NaN) {
                expArr[i + 1] = expArr[i] + expArr[i + 1];
                expArr[i] = '$'; // mark
            } else {
                throw new Error("Invalid expression");
            }
        } 
    }

    console.log(expArr);

    expArr = expArr.filter(el => el !== '$');
    console.log(expArr);
    let opPrec = {
        '(' : -1,
        '+' : 1,
        '-' : 1,
        '*' : 2,
        '/' : 2,
        '^' : 3
    }

    expArr.forEach(element => {
        if (!operators.includes(element) && element !== '(' && element !== ')' && Number(element) !== NaN) {
            numStack.push(Number(element));
            return;
        }

        if (operators.includes(element)) {
            if (opStack.length == 0) {
                opStack.push(element);
            } else {
                if (opPrec[element] > opPrec[opStack[opStack.length - 1]]) {
                    opStack.push(element);
                } else {
                    while (opStack.length !== 0 && opPrec[element] <= opPrec[opStack[opStack.length - 1]]) {
                        let num1 = numStack.pop();
                        let num2 = numStack.pop();
                        let op = opStack.pop();

                        if (op === '/' && num1 === 0) throw new Error("Zero division");

                        numStack.push(calculate(num2, op, num1));
                    }
                    opStack.push(element);
                }
            }
            return;
        }

        if (element === '(') {
            opStack.push(element);
            return;
        } else if (element === ')') {
            if (opStack.length === 0) throw new Error("Invalid expression");
            while (opStack[opStack.length - 1] !== '('){
                if (opStack.length === 0) throw new Error("Invalid expression");

                let num1 = numStack.pop();
                let num2 = numStack.pop();
                let op = opStack.pop();

                if (op === '/' && num1 === 0) throw new Error("Zero division");

                numStack.push(calculate(num2, op, num1));
            }
            
            opStack.pop();
            return;
        }

        throw new Error("Invalid token");
    });

    while (opStack.length !== 0) {
        if (numStack.length === 0) throw new Error("Invalid expression");
        let num1 = numStack.pop();
        let num2 = numStack.pop();
        let op = opStack.pop();

        if (op === '(') throw new Error("Invalid expression");

        if (op === '/' && num1 === 0) throw new Error("Zero division");

        numStack.push(calculate(num2, op, num1));
    }

    if (numStack.length !== 1) throw new Error("Invalid expression");
    return numStack[0];
}

export default function validateAndEvalExp(exp) {
    if (!isExpValid(exp)) return "Ekspresi matematika tidak valid";
    try {
        return `Hasilnya adalah ${evalExp(exp).toString()}`;
    } catch (e) {
        return "Ekspresi matematika tidak valid";
    }
}
