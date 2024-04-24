// TASK 1
// My resolving
// let number1 = prompt("Ввести значення number1");
// let number2 = prompt("Ввести значення number2");


// let sum = parseInt(number1) + parseInt(number2);
// let sum1 = Math.pow(number1, 2) + Math.pow(number2, 2);
// let sum2 = Math.pow(sum, 2);

// console.log("number1:", number1);
// console.log("number2:", number2);
// console.log("Сумма введених значень:", sum);
// console.log("Сумма квадратів введених значень:", sum1);
// console.log("Квадрат суми введених значень:", sum2);

// Ciklum resolving
// function exercise1(number1, number2) {
//     const sum = number1 + number2;
//     const sum1 = Math.pow(number1, 2) + Math.pow(number2, 2);
//     const sum2 = Math.pow(sum, 2);
//     console.log(sum);
//     console.log(sum1);
// }

// exercise1(5, 4);



// TASK 2
// My resolving
// let a = prompt("Ввести першу сторону трикутника");
// let b = prompt("Ввести другу сторону трикутника");
// let c = prompt("Ввести третю сторону трикутника");
// let perimeter = parseInt(a) + parseInt(b) + parseInt(c);
// alert(`Периметр трикутника дорівнює ${perimeter}`);

// Ciklum resolving
// function exercise2(a, b, c) {
// const perimeter = a + b + c;
// console.log(perimeter);
// }





// function generateNumbers(n, m) {
// 	let result = null;
// // ========== Початок зони редагування ==============
//     result = String(n);
    
//         for (let index = n + 1; index <= m; index++) {
//           result = result + ',' + index;
//     }
//     return result;
// }
// generateNumbers(3, 3);

//     function sumNumbers(n, m) {
// 	let result = null;
// // ========== Початок зони редагування ==============
//     let sum=0;
//     for (let i = n; i <= m; i += 1) {
//         sum += i;
//         result = sum;
//     }    
// // ========== Кінець зони редагування ===============
// 	return result;
// }
// sumNumbers(5, 9);




const array = [
    "7", "4", "12", "8", "3", "5", "7", "6", "6", "14",
    "11", "13", "9", "1", "8", "11", "0", "14", "2", "10",
    "2", "2", "2", "13", "5", "11", "14", "8", "7", "8",
    "3", "2", "13", "7", "1", "14", "1", "13", "10", "9",
    "2", "5", "5", "8", "5", "4", "4", "2", "11", "0",
    "13", "4", "10", "11", "11", "4", "11", "8", "2", "10",
    "9", "14", "11", "7", "8", "10", "11", "3", "10", "6",
    "8", "4", "4", "13", "1", "0", "8", "3", "12", "8",
    "4", "7", "12", "12", "0", "1", "14", "9", "10", "3",
    "9", "12", "10", "2", "9", "5", "1", "13", "8", "5"
];
const result = {};


// Метод reduce()
var result1 = array.reduce(function(acc, elem) {
  acc[elem] = (acc[elem] || 0) + 1;
  return acc;
}, {});

console.log("Метод reduce:", result1); // --> {'0': 4, '1': 6, ...}

// Цикл for
const result2 = {};
for (var i = 0; i < array.length; ++i)
{
    var a = array[i];
    if (result2[a] != undefined)
        ++result2[a];
    else
        result2[a] = 1;
}

console.log("Цикл for:", result2);

// Метод forEach()
const result3 = {};
array.forEach(function(a){
    if (result3[a] != undefined)
        ++result3[a];
    else
        result3[a] = 1;
});

console.log("Метод forEach:", result3);

// Цикл for of
const result4 = {};
for (let elem of array) {
    if (result4[elem] === undefined) {
    result4[elem] = 1;
    } else {
    result4[elem]++;
    }
}

console.log("Цикл for of:", result4);