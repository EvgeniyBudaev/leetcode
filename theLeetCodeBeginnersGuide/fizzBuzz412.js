/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr = [];

    for (let i = 1; i <= n; i++) {  
        const divisibleBy3 = (i % 3 === 0);
        const divisibleBy5 = (i % 5 === 0);

        if (divisibleBy3 && divisibleBy5) arr.push("FizzBuzz");
        else if (divisibleBy3) arr.push("Fizz");
        else if (divisibleBy5) arr.push("Buzz");
        else arr.push(i.toString());
    }

    return arr;
};

console.log(fizzBuzz(3)); // ["1","2","Fizz"]
console.log(fizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]