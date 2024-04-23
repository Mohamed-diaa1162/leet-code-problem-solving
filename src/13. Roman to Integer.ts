/*
 * Problem Link https://leetcode.com/problems/roman-to-integer/description/
 * Status : Solved ✅
 * First you must know what hash map is ..
 * For get big O (n)
 */
function romanToInt(s: string): number {
    const MAP = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    const arrayOfLetters  = s.split('');
    let value : number = 0;
    let i = 0 ;

    do {
        let currentValue = +MAP.get(arrayOfLetters[i]);
        
        let nextValue = +MAP.get(arrayOfLetters[i+1]);

        if(nextValue && currentValue < nextValue) value -= currentValue;
        
        else  value += currentValue;

        i++;
             
    } while(i < arrayOfLetters.length);
    
    return value;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('LVIII')); // 58 
console.log(romanToInt('MCMXCIV')); // 1994
