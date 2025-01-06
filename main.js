// // 1. Juft sonlarni ajratish
// const numbers = [2, 4, 9, 10, 45, 67, 8, 90];
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log("Juft sonlar:", evenNumbers);

// // 2. 1 dan 10 gacha bo'lgan sonlarni juft va toq qilib ajratish
// const results = {};

// for (let i = 1; i <= 10; i++) {
//   results[i] = (i % 2 === 0) ? "Juft son" : "Toq son";
// }

// console.log("For loop orqali:", results);

// // While loop orqali
// const whileResults = {};
// let i = 1;
// while (i <= 10) {
//   whileResults[i] = (i % 2 === 0) ? "Juft son" : "Toq son";
//   i++;
// }

// console.log("While loop orqali:", whileResults);

// Juft sonlarni ajratish
const numbers = [2, 4, 9, 10, 45, 67, 8, 9 ];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Juft sonlar:", evenNumbers);

// 1 dan 10 gacha bo'lgan sonlarni juft va toq qilib ajratish
// const results = Array.from({ length: 10 }, (_, i) => `${i + 1} - ${(i + 1) % 2 === 0 ? "Juft son" : "Toq son"}`);
// console.log("Natijalar:", results);

const number = [2, 3, 4, 5, 6, 7, 9, 8 ];
const evenNumber = numbers.filter(num => num % 2 == 0);
console.log("Juft sonlar:", evenNumbers);
