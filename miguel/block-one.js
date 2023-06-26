// In this file we are going to write the problems. Let's keep all in english to practice that as well.

// 1. Create a function that returns me an array of 10 names with alphabetically order.

// 2. Given an array of numbers, I want the sum of all of those numbers:
    // Example: [10, 6, 8] be equal 24.

// 3. You have an array of person objects, where each object contains a name and age.
// Your task is to calculate the average age of all the people in the array and return the result.
    // Example: const people = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Sam', age: 20 },
//   { name: 'Alice', age: 35 },
//   { name: 'Bob', age: 27 }
// ];


//This is the original array of names
const names = ['Ralph', 'Joe', 'Mark','Sophie', 'Alvin', 'Laura', 'Kathy','Dean','Lisa', 'Tom']

//This is the first solution I mistakenly used to solve this problem
//a simple .sort() stored withtin another constant
let orderedNames = names.sort();

console.log(orderedNames);

//This is the correct solution using a function 
//To be completely fair, I looked up this solution and I'm still trying to 
//understand the logic used as to how the order is changed

//On the bright side : I know how to google, hence I'm ready to work (jk)
const newOrder = names.sort(function (a , b) {
    if (a.names < b.names) {
        return -1;        
    }
    if (a.names > b.names) {
        return 1;
    }
    return 0;
});

console.log(newOrder);


//This is exercise 2. 
//It was a difficult exercise in the sense there
//a lot of ways to solve this and I wasn't sure which one
//would be the best answer 
const numbers = [1 , 10, 50, 100, 500];


//Solution 1 
let sum = 0;
numbers.forEach(n => sum += n);
console.log(sum);

//Solution 2
const solutionNumbers = numbers.reduce((a, b) => a + b);
console.log(solutionNumbers);


//Exercise 3 
//No comments 
//UPDATE: I googled this  and 100% understood NOTHING
//might as well go step by step to understand the logic behind this

const users = [
    { name: 'John', age: 25 },
       { name: 'Jane', age: 30 },
       { name: 'Sam', age: 20 },
       { name: 'Alice', age: 35 },
       { name: 'Bob', age: 27 }
];


let getAverage = users => {
    let reducer = (a, b) => a + b;
    let sum = users.reduce(reducer)
    return sum / users.length;    
}

let ages = users.map(person => person.age);

console.log(getAverage(ages));

//CONCLUSION:
// While I took a peek at google to finish all these problems, 
//I was able to understand MOST of the logic used to
//arrive at the desired result (except Ex. 3 which I found challenging)
//I look forward to keep practicing and understanding more problems 
//in order to get ready for interviews

// I have to practice this before the end of the month 