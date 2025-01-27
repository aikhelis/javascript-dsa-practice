class Stack {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() {
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stackList.pop();
    }
    
}

let reverseString = (string) => {
    const stack = new Stack();
    let reversedString = '';
    
    for (c of string) stack.push(c);

    while (!stack.isEmpty()) reversedString += stack.pop();

    return reversedString;
}

/*
push on "(", pop on ")"
return if trying to pop an emtpy stack
at the end return true if stack is empty, false otherwise
*/
function isBalancedParentheses(string) {
    const stack = new Stack();
    
    for (c of string) {
        if (c === '(')
            stack.push(c);
        if (c === ')')
            if (stack.pop() !== '(')
                return false;
    }

    if (stack.isEmpty()) 
        return true;

    return false;
}

/*
Procedure:
    Create a new Stack instance called additionalStack
    Loop while the input stack is not empty
        1. Pop the top element from the input stack and store it in a variable called temp
        2. Loop while additionalStack is not empty and the top element of additionalStack is greater than temp
            a. Pop the top element from additionalStack and push it onto the input stack
        3. Push temp onto additionalStack
    Loop while additionalStack is not empty
        1. Pop the top element from additionalStack and push it onto the input stack
*/
function sortStack(stack) {
    const helperStack = new Stack();

    while (!stack.isEmpty()) {
        let temp = stack.pop();
        while (!helperStack.isEmpty() && helperStack.peek() > temp) {
            stack.push( helperStack.pop() );
        }
        helperStack.push(temp);
    }

    while(!helperStack.isEmpty()) {
        stack.push( helperStack.pop() );
    }
}


// const input1 = "Hello, World!";
// const expected1 = "!dlroW ,olleH";
// const result1 = reverseString(input1);
// console.log(`Input: "${input1}" | Expected: "${expected1}" | Result: "${result1}"`);

// const input2 = "abcd";
// const expected2 = "dcba";
// const result2 = reverseString(input2);
// console.log(`Input: "${input2}" | Expected: "${expected2}" | Result: "${result2}"`);

// const input3 = "12345";
// const expected3 = "54321";
// const result3 = reverseString(input3);
// console.log(`Input: "${input3}" | Expected: "${expected3}" | Result: "${result3}"`);

// const input4 = "";
// const expected4 = "";
// const result4 = reverseString(input4);
// console.log(`Input: "${input4}" | Expected: "${expected4}" | Result: "${result4}"`);


/*
    EXPECTED OUTPUT:
    ----------------
    Input: "Hello, World!" | Expected: "!dlroW ,olleH" | Result: "!dlroW ,olleH"
    Input: "abcd" | Expected: "dcba" | Result: "dcba"
    Input: "12345" | Expected: "54321" | Result: "54321"
    Input: "" | Expected: "" | Result: ""

*/

// const input1 = "(())";
// const expected1 = true;
// const result1 = isBalancedParentheses(input1);
// console.log(`Input: "${input1}" | Expected: ${expected1} | Result: ${result1}`);

// const input2 = "(()))";
// const expected2 = false;
// const result2 = isBalancedParentheses(input2);
// console.log(`Input: "${input2}" | Expected: ${expected2} | Result: ${result2}`);

// const input3 = "((()))";
// const expected3 = true;
// const result3 = isBalancedParentheses(input3);
// console.log(`Input: "${input3}" | Expected: ${expected3} | Result: ${result3}`);

// const input4 = "(((())";
// const expected4 = false;
// const result4 = isBalancedParentheses(input4);
// console.log(`Input: "${input4}" | Expected: ${expected4} | Result: ${result4}`);


/*
    EXPECTED OUTPUT:
    ----------------
    Input: "(())" | Expected: true | Result: true
    Input: "(()))" | Expected: false | Result: false
    Input: "((()))" | Expected: true | Result: true
    Input: "(((())" | Expected: false | Result: false

*/

function stackToString(stack) {
  return JSON.stringify(stack.getStackList());
}

// Test case 1
const stack1 = new Stack();
stack1.push(5);
stack1.push(3);
stack1.push(8);
stack1.push(1);
const expected1 = JSON.stringify([8, 5, 3, 1]);
sortStack(stack1);
const result1 = stackToString(stack1);
console.log(`Test case 1 | Expected: ${expected1} | Result: ${result1}`);

// Test case 2
const stack2 = new Stack();
stack2.push(9);
stack2.push(4);
stack2.push(7);
stack2.push(2);
const expected2 = JSON.stringify([9, 7, 4, 2]);
sortStack(stack2);
const result2 = stackToString(stack2);
console.log(`Test case 2 | Expected: ${expected2} | Result: ${result2}`);

// Test case 3
const stack3 = new Stack();
stack3.push(10);
stack3.push(6);
stack3.push(3);
stack3.push(1);
stack3.push(5);
const expected3 = JSON.stringify([10, 6, 5, 3, 1]);
sortStack(stack3);
const result3 = stackToString(stack3);
console.log(`Test case 3 | Expected: ${expected3} | Result: ${result3}`);


/*
    EXPECTED OUTPUT:
    ----------------
    Test case 1 | Expected: [8,5,3,1] | Result: [8,5,3,1]
    Test case 2 | Expected: [9,7,4,2] | Result: [9,7,4,2]
    Test case 3 | Expected: [10,6,5,3,1] | Result: [10,6,5,3,1]

*/