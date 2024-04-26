/**
 * Checks if a string containing parentheses, curly braces, and square brackets has balanced opening and closing characters.
 * Problem Link: https://leetcode.com/problems/valid-parentheses/
 * Status: Solved ✅ 
 * 
 * @param {string} word - A string consisting of parentheses (), curly braces {}, and square brackets [].
 * @returns {boolean} - True if the characters are balanced, false otherwise.
 *
 * @timeComplexity O(n), where n is the length of the input string.
 *                   The loop iterates through each character in the string once.
 *
 * @spaceComplexity O(n), in the worst case where all characters are opening brackets.
 *                   The stack can grow up to n elements in this case.
 */
function isValid(word: string): boolean {
    let stack = [];
    const openingBrackets = new Set(['(', '{', '[']);
    const types = { ')': '(', '}': '{', ']': '[' };

    word.split('').forEach((el) => {
        const filterBy = types[el];

        if (openingBrackets.has(el)) stack.push(el);

        else if (stack[stack.length - 1] === filterBy) stack.pop();

        else stack.push(el)
    })

    return stack.length === 0;
};


console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid("([)]")); // false
console.log(isValid("]")); // false