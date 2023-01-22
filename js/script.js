// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

//   // if (letter === letter.toLowerCase()) {
//   //   console.log('Эта буква в нижнем регистре!!! - ', letter);

//   //   invertedString += letter.toUpperCase();
//   // } else {
//   //   invertedString += letter.toLowerCase();
//   //   console.log('Эта буква в верхнем регистре!!! - ', letter);
//   // }

//   const isEqual = letter === letter.toLowerCase();

//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();

// }

// console.log(invertedString);

// Лекция №2. Пример для разбора №2

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// всё что написано ниже повторяет верхний код.
// Это нам показывали чейнинг. Цепочки вызовов методов.

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = "Your order is empty!";
//   } else if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   return message;
//   // Change code above this line
// }

// console.log(checkStorage);

// const names = ["Fndrey", "Sergei", "Vadim"];

// for (let i = 0; i <= names.length - 1; i += 1){
//   console.log(names[i]);
// }

// const dlinna = "JavaScript is awesome".length;
// console.log(dlinna);

// console.log("JavaScript is awesome".toUpperCase());

// let username;
// console.log("показывает юзернейм", typeof username); // "undefined"

// let inputValue = null;
// console.log("показывает инпут",typeof inputValue); // "object"

// const quantity = 17;
// console.log("показывает кьюантити",typeof quantity); // "number"

// // const message = "JavaScript is awesome!";
// // console.log("показывает просто месседж",typeof message); // "string"

// // const isSidebarOpen = false;
// // console.log("показывает слайдер оупен", typeof isSidebarOpen); // "boolean"

// const message = "JavaScript is awesome!";
// console.log(message); // JavaScript is awesome!

// const message = "JavaScript is awesome!";
// alert(message);

// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// і зберігаємо результат виклику prompt у змінну.
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// Math.floor(num) - повертає найбільше ціле число,
// менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - повертає найменше ціле число,
// // більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (1000 - 1) + 1); // псевдовипадкове число від 1 до 10

// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47

// const message = "Welcome to Bahamas!";
// const a = message.toLowerCase();
// console.log(a);

// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// -----------------------------------------------

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

// -----------------------------------------------

// let cost = 0;
// const subscription = "pro";

// if (subscription > "pro") {
//   cost = 100;
// }

// console.log(cost); // 100
// -----------------------------------------

// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 20;
// }

// console.log(cost); // 0
// -----------------------------------------

// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost); // 500
// ------------------------------------------

// let clientCounter = 12;
// const maxClients = 35;

// while (clientCounter > maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }
// -------------------------------------

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);
// --------------------------------------------

// for (let i = 8; i <= 20; i += 8) {
//   console.log(i);
// }
////////////////////////////////////////////////////

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// ------------------------------------------------

// for (let i = 0; i <= 8; i += 1) {
//   console.log(i);

//   if (i === 8) {
//     console.log(`Знайшли число ${i}, перериваємо виконання циклу`);
//     break;
//   }
// }

// console.log("Лог після циклу");
// ------------------------------------------------

// const number = 13;

// for (let i = 0; i <= number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }
// ----------------------------------------------

// let base = prompt("Давай ввееди число");
// base = Number(base);

// console.log(base);

// let power = prompt("Давай введи сюда степень");
// power = Number(power);
// console.log(power);

// const result = base ** power;

// console.log(result);
// -----------------------------------------------

// let brand = prompt("ебаш сюда название товара");
// console.log(brand.slice(1).toLowerCase());

// brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();

// console.log(brand);
// -----------------------------------------------

// const message = "Welcome to Bahamas!";
// const a = message.toLowerCase();
// console.log(a);

// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// const title = "Hallo world";
// function slugify(title) {
//   // Change code below this line
//   titleSate = title.length - 1;

//   console.log(titleSate);
//   // Change code above this line
// }

// const title = "Hallo word I AAM Sergei";
// constNormalizedTitle = title.toLowerCase().split(' ').join('-');
// console.log(constNormalizedTitle);

// -----------------------------------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice( i > 0 && i <length-1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
// ---------------------------------------------------------------

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// всё что написано ниже повторяет верхний код.
// Это нам показывали чейнинг. Цепочки вызовов методов.

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

// let sum = 0;
// calculateTotal(number){
//   for (let i = 0; i <= number; i += 1 ) { // Change this line
//     sum += i;
//   }
//   return(sum);
// }

// Да, сложноватая задачка.   Её бы разобрать отдельно. Решали в автопроверке.
// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   console.log(sum);
// }
// -------------------------------------------------------
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");
// findLongestWord();

// function findLongestWord(string) {
//   let array = string.split(' ');
//   let longestWord = array[0];

//   for (const word of array) {
//     if (longestWord.length < word.length) {
//     longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord)

// function findLongestWord(string) {

//   let array = string.split(' ');
//   let longestWord = array[0];

//   for (const word of array) {
//     if (longestWord.length < word.length) {
//     longestWord = word;
//     }
//   }
//   return longestWord;
// }

// function findLongestWord(string) {
//   const words = string.split(' ');
//   let longestWord = 0;

//   for (const i = 0; i < stringSplit.length; i += 1) {
//     if (stringSplit[i].length > longestWord) {
//       longestWord = stringSplit[i].length;
//     }
//   }
//   return longestWord;
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// console.log(clients[3]);

// ----------------------------------------------------
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// --------------------------------------------------------

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34, 123, 333,232,44,33,43];
// const threshold = 14;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i]) {
//     continue;
//   }

//   console.log(`Число більше або рівно ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// function filterArray(numbers, value) {
// const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   console.log(newArray);
// return newArray;
// }

// console.log

// let num = 0;
// while (num < 15) console.log(num += 1);

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes[fruit]; // Change this line
// }
// console.log(checkFruit);

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i of numbers) {
//     if (i > value) {
//       filteredNumbers.push(i);
//     }
//   }
//   console.log(filteredNumbers)
//   return filteredNumbers;
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3)

// const start = 7;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 3 === 0) {
//     number = i;
//   continue
//   }
//   console.log(number)
// }

// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log("Знайшли число 3, робимо повернення, перериваючи цикл і функцію");
//       return i;
//     }
//   }

//   // Цей console.log не виконається
//   console.log("Лог після циклу в тілі функції");
// }

// const result = fn();
// console.log("Лог після виходу з функції");
// console.log(`Результат виконання функції ${result}`);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags.length-1;
// // Change code above this line

// console.log(lastTag);

// const numbers = [0, 5, 100, 320,...[1, 2, 3, 4, 123, 143, 'string[.length]'], 100, 012, 32, 22, 22];

// console.log(numbers);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   keys
//   console.log(key);
//   console.log(apartment[key]);
// }
// key = Object.keys;

// ------------------------------------------------------------

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)){
//       keys.push(key);
//       values.push(apartment[key]);
//   // Change code above this line
//   }
// }

// -------------------------------------------------

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount =(key);
//       // propCount.push(object[key]);
//     }
//     // Change code above this line
//     return propCount;
//   }
// }

// const keys = ["descr", "rating", "price"];
// const values = ["Spacious apartment in the city center", 4, 2153];

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys){
//   values.push(apartment[key]);
// }
// console.log(values);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const  keys = [];
// // Change code below this line
// const valyes = Object.values(apartment);
// for (const key of valyes){
//   keys.push(key);
// }
// console.log(apartment);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (let i = 0; i < keys; i +=1){
//       propCount += 1;
//     }
//   return propCount;
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   list: 'kivi', ears:1221,
//   };
//   function countProps(object) {
//     let propCount = 0;
//     const keys = Object.keys(object);
//     return Object.keys(object).length;
// }
// console.log(Object.keys(apartment).length)

// const colors = [
//   { lo: "#f44336", rgb: "244,67,54" },
//   { lo: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const i of colors){
//   hexColors.push(i.hex);
//   // rgbColors.push(i.rgb);
// }
//   if ()
// console.log(colors)

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products){
//     if (product.name = productName)

//       return product.price
//   }
//   // Change code above this line
// }

// function calculateMeanTemperature(forecast) {
//   const { today: {low:todayLow, high:todayHigh}, tomorrow: {low:tomorrowLow, high:tomorrowHigh} } = forecast;
//   // Change code above this line
//   console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4)
//   const dred = (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   return dred
// }

// calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })

// const scores = [{ gar:89, gap:64, tik:42, tok:17}];
// // Change code below this line
// let kabanos = Object.keys(...scores);
// for (const el of scores) {
//   console.log()
// }

// console.log (scores)

// Разбирали с Димоном. Дополнительно игрались с переменными.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   let kabanos = {

//     completed: "lalala",
//     category,
//     priority,
//     ...data,
//     }

//   console.log(kabanos)
//   // Change code above this line
// }
// makeTask({ completed: true, category: 'kronos', teperature: 23 })

// ---------------------------------------------------------------------

// Change code below this line

// function add(...theArgs) {
//   let kabanos = 0;
//   for (const arg of theArgs){
//     kabanos += arg
//   }
//   // Change code above this line
//   console.log(kabanos)
//   return kabanos
// }

// add(32, 6, 13, 19, 8);

// function addNumber(...raspilaemArgumentu) {
//   let sozdaemPeremennyu = 0; //переменная куда будут записываться наши значениия после
//   for (const raspil of raspilaemArgumentu) {
//     sozdaemPeremennyu += raspil;
//   }
//   console.log(sozdaemPeremennyu);
//   return sozdaemPeremennyu;
// }
// add(32, 6, 33, 1, 22, 2, 13, 19, 8);

// ---------------------------------------------
//  Нужно у Димоноа поинтересоваться

// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > args)
//     total += arg;
//   }
//   console.log(total)
//   return total;
//   // Change code above this line
// }
// addOverNum(1, 15, 27,11,7,4,2)

// -------------------------------------------------

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//   const kabanos = this.potions.indexOf(oldName);
//   this.potions.splice(kabanos,1,newName)

//   console.log(this.potions)
//     // Change code above this line
//   },

// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")

// -----------------------------------------------------------

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       newPotion === true;
//     } else {
//       this.potions.push(newPotion);
//     }
//     return `Error! Potion ${newPotion} is already in your inventory!`;
//   }
//   console.log(addPotion)
// }

// const atTheOldToad = {
//   potions: [{
//       name: 'Зелье скорости',
//       price: 460,
//     },
//     {
//       name: 'Дыхание дракона',
//       price: 780,
//     },
//     {
//       name: 'Каменная кожа',
//       price: 520,
//     },
//     {
//       name: 'Сок жабы',
//       price: 460,
//     },
//   ],
//    getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//       for (const item of this.potions) {
//             if (item.name === newPotion.name) {
//                 return Error! Potion ${newPotion.name} is already in your inventory!;
//             }
//         }
//         const newProduct = {
//             ...newPotion,
//         };

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potionName === potion.name) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     let resalt = Potion ${oldName} is not in inventory;
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];

//       if (oldName === potion.name) {
//         potion.name = newName;
//         resalt = Found ${oldName} change to ${newName} ;
//       }
//     }
//     return console.log(resalt);
//   },
//   // Пиши код выше этой строки
// };

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//       for (const item of this.potions) {
//             if (item.name === newPotion.name) {
//                 return Error! Potion ${newPotion.name} is already in your inventory!;
//             }
//         }
//         const newProduct = {
//             ...newPotion,
//         };

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potionName === potion.name) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     let resalt = Potion ${oldName} is not in inventory;
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];

//       if (oldName === potion.name) {
//         potion.name = newName;
//         resalt = Found ${oldName} change to ${newName} ;
//       }
//     }
//     return console.log(resalt);
//   },
//   // Change code above this line
// };

// --------------------------------------------------------
// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// ----------------------------------------------------------
// function greet(name) {
//   return `Ласкаво просимо ${name}.`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Leonid Sergeevich")); // Ласкаво просимо Манго.

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest("Эту хуйню мы должны вернуть в колбэк. Это есть имя", function lol(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

// const fnA = function (lolila) {
//   console.log(lolila)
// }
// fnA('fkkflsdklsdkflfdklds');
// -----------------------------------------------------------------------
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   numbers.forEach(function (i) {
//     if (value.includes(i)) {
//       filteredNumbers.push(i);
//     }
//   })

//   console.log(filteredNumbers);
// }
// filterArray([1, 2, 3, 4, 5, 6], [5, 3, 2, 8, 7, 3, 1, 9, 10, 6]);
// -----------------------------------------------------------------------

// var word1 = "ЭлеВатОрТракторБур";
// const string = word1.slice(0,1).toUpperCase();
// const apk = word1.slice(1,8).toLowerCase();
// const app = string + apk;
// console.log(app)

// -----------------------------------------------------------------------
// Видео по Репете по Колбэк функциям
// const filter = function (array, test) {
//   const filteredArray = [];
//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }
//   return filteredArray
// }
// //  Логика проверки:
// // 1.Надо передать функцию
// // 2. функция получает элемент массива
// // 3. если эллемент массива удовлетворяет условию, то функция вернет true

// const callback1 = function (value) {
//   return value >= 3;
// }
// const result1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(result1);

// const result2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {    //эта строка выполнена по принципу callbeck 1
//   return value <= 4;                                                  //просто мы её записали инлайново
// });
// console.log(result2);

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
//   { name: 'orange', quantity: 50, isFresh: false },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// }

// const result3 = filter(fruits, getFruitsWithQuantity)
// console.log(result3)
// -----------------------------------------------------------------------
// let message = "Hallo word!))))))";
// let massege121 = 5 > 1 ? "Vasia" : "Colia!!!";

// message += massege121;
// console.log(message);

// -----------------------------------------------------------------------

// разбор примера по Репете. Колбєк функции Модуль 4 занятие 7. 1 час 13 минут

// const fnA = function (parameter) {
//   const ulalaBooM = "Значение внутренней переменной fnA";

//   const ulala = function () {
//     console.log("это та самая грёбанная функция вызоваем её по имени ulala");
//   }
//   return ulala;
// }

// const fnB = fnA();

// fnB();

// console.log(fnB);
// -----------------------------------------------------------------------
// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готовит ${dish}`);
// };

// // makeDish('Mango', 'пирожок');
// // makeDish('Mango', 'омлет');
// // makeDish('Mango', 'салат');

// // makeDish('Poli', 'курицу');
// // makeDish('Poli', 'сироп');
// // makeDish('Poli', 'кампот');

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`)
//   }

//   return makeDish;
// }

// const mango = makeSheff('Mango');

// mango('котлеты');
// mango('котлеты');

// const poly = makeSheff('Poly')
// poly('tea');
// poly('burger');
// -----------------------------------------------------------------------

// for (let i = 0; i < firstArray.length; i += 1) {
//   if (secondArray.includes(firstArray[i])) {
//     commonElements.push(firstArray[i]);
//   }
// }
// const firsArray = [1,12,3,5,6,7]
// const commonElements = [];
// const secondArray = [1,2,5,7,8,9,10]

// firsArray.forEach(function (i){
//   if (secondArray.includes(i)) {
//     commonElements.push(i)
//   }
// })

// console.log(commonElements);
// -------------------------------------------------
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function(i){
//     if (secondArray.includes(i)){
//       commonElements.push(i)
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }
// console.log(commonElements)
// ---------------------------------------------------

// Петя біжить швидко, тому що Петя намагається зловити поїзд.
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(petya.username);
//   },

// };
// console.log(this.username);
// // petya.showName();

//-----------------------------------------------------------------
// const bookShelf = {
//   authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
// bookShelf.addAuthor("Лі Таніт");
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]
// ----------------------------------------------------------------------------------------

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// greetGuest.call(poly, "3 прибуттям"); // З прибуттям, Полі.

// ------------------------------------------------------------------

// function changeEven (numbers, value) {
//   // Change code below this line
//   let newArray = [];

//   numbers.forEach(element => {
//     if (element % 2 === 0){
//       element += value;
//     }
//     newArray.push(element)
//   });
//   console.log(newArray)
//     return newArray;
// };

// changeEven([1, 2, 3, 4, 5], 10)

// const lol = messege => {
//   console.log(messege);
// }
// console.log("Привет, братишка!Автопроверки сами не пройдуться....");

// const great = () => {
//   console.log("Hallo Word")
// }
// great();

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const lolo = numbers.filter(num => num %2 === 1);
// console.log(lolo);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Bernard Cornwell",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(books.author)

// let lol = []
// const lolo = books.filter(book => book.rating >=5)
//   console.log(lolo);

// Петя бежит быстро, потому что Петя пытается поймать поезд.
// const petya = {
//   username: "Petya ёпрст",
//   showName() {
//     console.log(petya.username);
//   },
// };

// petya.showName();

// Петя бежит быстро, потому что он (this) пытается поймать поезд.
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showName();

// function foo() {
//   console.log(this);
// }

// foo(); // window без "use strict" и undefined с "use strict"

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

// ---------------------------------------------------------

// const animal = { eats: true, pipca:true, nepipca:5 };
// const dog = Object.create(animal);
// dog.barks = true;
// dog.tupic = false;

// for (const key in dog) {
//   console.log(key); // barks, eats
// }

// console.log("Переменная animal", animal)
// console.log("Переменная dog", dog)

// ----------------------------------------------------------

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;
// dog.tupic = false;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

// ---------------------------------------------------

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;
// dog.tupic = false;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks']

// ------------------------------------------------------

// class Car {
//   #price;
//   static MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#price = newPrice > Car.MAX_PRICE ? "Больше MAX_PRICE" : "Меньше MAX_PRICE";
//   }
// }
// // class Model extends Car {
// // }
// const audi = new Car({ price: 35000 })
// // const model = new Model({ price: 300 })
// // console.log(model.price) // 300
// // model.lala = 3
// // console.log(model.lala) // 3
// console.log(audi.price); // 35000

// audi.price = 51000;
// console.log(audi.price); // 49000
// audi.price = 49000;
// console.log(audi.price); // 49000

// class User {
//   constructor(name, email, age) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
// }

// const mango = new User("Kevin", "popka@durak", 24);
// console.log(mango); // {}s

// const poly = new User();
// console.log(poly); // {}

// class Check{
//   constructor(name, forname, age) {
//     this.name = name;
//     this.forname = forname;
//     this.age = age;
//   }
// }
// this.name = "Droid";
// console.log (this.name)

// const fishka = new Check("Sergei", "Stelmax", 32)
// console.log(fishka)

// class User {
//   // Деструктуризируем объект
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Манго", email: "mango@mail.com" }

// const poly = new User({
//   name: "Поли",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Поли", email: "poly@mail.com" }

// ------------------------------------------------------------------------

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
//   newEmail = 22;
// }

// const mango = new User({
//     name: "Манго",
//     email: "mango@mail.com",
// })

// console.log(mango);

// -----------------------------------------------------------

// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   #changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// // mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// // console.log(mango.#email); // Будет ошибка, это приватное свойство
// console.log(mango)

// const slovo = "eRunDA";
// const lol = slovo[0].toUpperCase() + slovo.slice(1).toLowerCase();
// console.log(lol)

// const A = true;
// const B = false;
// const C = A && B;
// console.log(C);

// const sport = true;
// const eats = false;
// const weekend = true;
// const apple = false;
// const tomate = true;
// const test = sport && !eats && weekend && (apple || tomate);
// console.log(test)

// const myHeight = 189;
// const heightYlia = 160;
// const proba = myHeight < heightYlia;
// console.log(proba)

// const age = 11;
// const mom = true;
// const lol = age >= (12 || mom);
// console.log(lol)

// const firstArray = [1, 2, 3, 4, 5];
// const secondArray = [6, 7, 8, 9, 10];
// const plusArray = firstArray.concat(secondArray);
// console.log(plusArray)

// ------------------------------------------------------------

// class User {
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Вызов конструктора родительского класса User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'

// --------------------------------------------------------------------------------

// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   constructor({email,accessLevel}){
//     super(email)
//     this.accessLevel = accessLevel;
//   }
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// -----------------------------------------------------------------------------------------

// const myFrendsMan = {
//   "Melnyck Dmitry": {
//     name: "Dmitry",
//     familie: "Melnuck",
//     car: "Toyota Camry",
//     lackyNymber: 15
//   },
//   "Vitaly Tsebrov": {
//     name: "Vitaly",
//     familie: "Tsebrov",
//     car: "Honda Accord",
//     lackyNymber: 12
//   },
//   "Tarasenco Sergei": {
//     name: "Sergei",
//     familie: "Tarasenco",
//     car: "Mersedes Bens",
//     lackyNymber: 22
//   }
// }
// const myFrendsWoman = {
//   "Natali Lohman": {
//     name: "Natali",
//     familie: "Lohman",
//     car: "Porche",
//     lackyNymber: 25
//   },
//   "Olena Pupuri": {
//     name: "Olena",
//     familie: "Pupuri",
//     car: "BMW",
//     lackyNymber: 17
//   }
// }

// Первый способ
// const ollFreands = Object.assign({},myFrendsMan, myFrendsWoman);
// console.log(myFrendsMan)
// console.log(myFrendsWoman)
// console.log(ollFreands)

//  Второй способ
// const ollFreands = {...myFrendsMan, ...myFrendsWoman};
// console.log(ollFreands)

// Третий способ
// function merge(...arr) {
//   return arr.reduce((acc, value) => {
//     return { ...acc, ...value };
//   }, {});
// }

// const ollFreands = merge(myFrendsMan, myFrendsWoman);
// console.log(ollFreands)

// ---------------------------------------------------
// const res = "JavaScript is awesome";
// console.log(res.toUpperCase())

// ---------------------------------------------------

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

// ------------------------------------------------------
// Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому,
// как это сделано в теоретической части урока.Этот класс должен иметь следующие
// свойства: name(имя, наследуется от User), surname(фамилия, наследуется от User),
// year(год поступления в вуз).Класс должен иметь метод getFullName()(наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.Также класс должен иметь
// метод getCourse(), который будет выводить текущий курс студента(от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
// Текущий год получите самостоятельно.

// class User {
//   constructor(name, surname, year) {
//     this.name = name,
//     this.surname = surname,
//     this.year = year,
//     this.yearOfAdmission = 2023
//   }

//   getFullName() {
//     return this.name + " " + this.surname
//   }

//   getCourse() {
//     return this.yearOfAdmission - this.year
//   }
// }
//   class Student extends User {

// }

// var student = new Student('Иван', 'Иванов', 2020);

// console.log(student.name); //выведет 'Иван'
// console.log(student.surname); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log(student.year); //выведет 2020console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2023
// console.log(student.getCourse())

// const nameAm = "Ник ";
// const trieni = "Николаевич"
// console.log("Привет, " + nameAm)
//   if (nameAm.length > 6) {
//     const lslls = nameAm + trieni
//     console.log("Ну  и длинющее же у вас имя!",lslls)
//   } else {
//     console.log("Коротковато имя тоЖ)")
// }

// const nomer = 1
// for (var i = 0; i > 3; i += 1) {
//   console.log("Hallo World");
//    // ещё какие-то выражения
// }

// const navItemEl = document.querySelector(".budetak")
// console.log(navItemEl);

// const navItemLink = document.querySelectorAll(".ssulka")
// console.log(navItemLink);
// console.log(window);
// console.log(document);

// const navEl = document.querySelector("ul")
// const navEl = document.querySelector("ul") //используется для поиска одного селектора ul
// console.log("Hallo ul!", navEl);

// const navElLi = document.querySelector("li")
// console.log("Hallo li one copy!", navElLi); //используется для поиска одного селектора li

// const navElAll = document.querySelectorAll(".itemB")
// console.log("Hallo li all copy!", navElAll);  // найти коллекцию лишек

// const btn = document.querySelector(".btn")
// btn.style.textTransform = "upperCase"

// btn.addEventListener("click", () => {
//   const imegEl = document.querySelector(".img")
//   console.log("🚀 ссылка на картинку", imegEl)
//   console.log("Ну а тут, ясно дело, мы указали, что можем доступиться до параметра src", imegEl.src)
//   imegEl.src = "https://img-fotki.yandex.ru/get/9584/39663434.442/0_8f86c_4e46341e_XL.jpg";
//   imegEl.alt = "Новое описание к новой картинке Тигра";
//   titleEl.textContent = "я Тигр! Ррррррррр, бля!"
//   const btnTextEl = document.querySelector(".btn-text")
//   btnTextEl.textContent = "Теперь обнови страницу!!!"
// });

// const titleEl = document.querySelector(".title");
// console.log("🚀titleEl", titleEl);
// console.log(titleEl.textContent);

// const controlEl = document.querySelectorAll(".js-control button")
// console.log("🚀", controlEl)
// console.log(controlEl[2].dataset.action)
// console.log(controlEl)

// Как же работать с классами? А вот тут Репетка нам всё и рассказывал...

// const variableB = document.querySelector(".listB");
// console.log(variableB.classList);
// variableB.classList.add("supper-dupper")
// variableB.classList.remove("supper-dupper")

// // Навигация по DOM

// const variableC = document.querySelector(".listC");
// const firstEl = variableC.firstElementChild;
// console.log(firstEl)
// console.log(variableC.children[1])

// const varEl = document.querySelector(".itemC")
// const firstElem = varEl.lastElementChild
// console.log("вот тутічки",varEl)
// console.log(varEl.children[1])  // возможно, с єтим будет связана домашка

//  Создание чего-либо

// const titleEl = document.createElement("h2");
// titleEl.classList.add("page-title");
// titleEl.textContent = "Вот так с помощью JS создаются заголовки текста";
// console.log(titleEl);

// document.body.appendChild(titleEl);

// const imageEl = document.createElement("img"); // создали тег/элемент "img"
// imageEl.src = "https://img-fotki.yandex.ru/get/9325/39663434.442/0_8f879_bd6b5663_XL.jpg";
// imageEl.alt = "Это Alt для картинки";
// imageEl.width = "540";
// console.log("🚀imageEl", imageEl);

// document.body.appendChild(imageEl);

// // дополняем новый пункт меню
// const navItemEl = document.createElement("li");  // создали тег/элемент "li"
// navItemEl.classList.add("list__item");

// const navLinkEl = document.createElement("a"); // создали тег/элемент "a"
// navLinkEl.classList.add("list__link");
// navLinkEl.textContent = "Личный кабиент полбзователя";
// navLinkEl.href = "/profile";

// navItemEl.appendChild(navLinkEl); // вложили А в Ли
// console.log(navItemEl);

// // теперь помещаем эту Лишку в которой вложена ссылка в созданный уже в ШТМЛ тег ЮЭЛ

// const navEl = document.querySelector(".list");
// navEl.appendChild(navItemEl); // получаеться что поставили всё в конец списка
// navEl.insertBefore(navItemEl, navEl.firstElementChild); //  а таким способом мы сейчас
//                                                         // поставили всё в самое начало списка
// navEl.insertBefore(navItemEl, navEl.lastElementChild); //  так станет предпоследним, перед последним элементом
// // navEl.insertBefore(navItemEl, navEl.сhildren[0]); // перед 1-м/ вместо первого( перед тем элементом который мы указали)
// console.log("Hallo!!!!", navEl)

// // теперь создадм всё это на нашнё страничке добавив всё в новый класс
// const navABC = document.querySelector(".ABC");
// navABC.appendChild(titleEl)
// navABC.appendChild(imageEl)

// // усовершенствуем предыдущую запись (  в скобках через запят. записіваем вс' что нужн. добавить)
// navABC.append(titleEl,imageEl)

// // создание из коллекции элементов
// const colorPickerOption = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const buttB = document.querySelector(".js-color-picker");

// const elements = colorPickerOption.map(option => {
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.classList.add("color-picker");
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// console.log(elements);
// buttB.append(...elements); // записали все кнопки в документ

// // Создание коллекции о товарах. Пишу о определённым заданым параметрам. Обьектная модель документа.1 час 49 минут
// const product = {
//   name: "Срвоприводы",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, rem sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, rem sunt.",
//   price: 2000,
//   available: true,
//   onSale: true,
// };

// const productEl = document.createElement("article");
// productEl.classList.add("product");

// const nameEl = document.createElement("h2");
// nameEl.textContent = product.name;
// nameEl.classList.add("product__name");

// const descrEl = document.createElement("p");
// descrEl.textContent = product.description;
// descrEl.classList.add("product__descr");

// const priceEl = document.createElement("p");
// priceEl.textContent = `Цена: ${product.price} кредитов`;
// priceEl.classList.add("product__price");

// console.log(productEl);
// console.log(nameEl);
// console.log(descrEl);
// console.log(priceEl);

// productEl.append(nameEl, descrEl, priceEl)
// console.log("🚀", productEl)

// console.log

// const roe = 12;

// for (i = 0; i < roe; i += 1) {
//   console.log("Смотрим на результат:" + i + "!")
// }
// console.log("Результат выполнится после подсчёта");

// const sweetArray = [2, 3, 4, 5, 35]
// const sweeterArray = sweetArray.map(sweetItem => {
//     return sweetItem * 2
// })

// console.log(sweeterArray)

// // create a function to use
// const makeSweeter = sweetItem => sweetItem * 2;

// // we have an array
// const sweetArray = [2, 3, 4, 5, 35];

// // call the function we made. more readable
// const sweeterArray = sweetArray.map(makeSweeter);

// console.log(sweeterArray);

// const eas = lol => lol * 2;
// const number = [2, 22, 4, 22, 6, 7];
// const X = number.map(eas);
// console.log(X)

// let values = [3, 1, 3, 5, 2, 4, 4, 4];
// let uniqueValues = [...new Set(values)];
// // uniqueValues is [3, 1, 5, 2, 4]

// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);

// //===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = "https://placeimg.com/640/480/tech";

//на уроке с Алексеем разбирали

// const technologies = ["HTML", "CSS", "JS", "React", "Node"];

// const container = document.getElementById("container"); //поиск по ID  но можно и через класс
// const ulEl = document.createElement("ul");
// for (const technology of technologies) {
//   const liEl = document.createElement("li");
//   liEl.textContent = technology;
//   ulEl.appendChild(liEl);
// }
// container.appendChild(ulEl);

// делаем через метод МАР_________________________________

// const ulElem = document.createElement("ul");

// const listContent = technologies
//   .map((technology) => `<li>${technology}</li>`)
//   .join("");

// ulElem.insertAdjacentHTML("beforeend", listContent);

// container.appendChild(ulElem)

// делаем через reduce___________________________________

// const ulElem = document.createElement("ul");

// const listContent = technologies
//   .reduce((acc, technology) => (acc +=`<li>${technology}</li>`),""
//   );

// ulElem.insertAdjacentHTML("beforeend", listContent);

// container.appendChild(ulElem)

// через reduce но уже немного адаптивнее____________________

// const listContent = technologies
//   .reduce((acc, technology) => (acc +=`<li>${technology}</li>`),""
//   );

// container.insertAdjacentHTML("beforeend", `<ul>${listContent}</ul>`);


// делаем еще одну задачку______________________________________
// const color = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// // 1.перебор массива за допомогою циклів
// // 2. створити кнопку
// // 3. задати колір кнопки і текст кнопки
// // 4. додати кнопку на сторінку
// const container = document.getElementById("container");

// color.forEach(({ color, label }) => {
//   const buttonElem = document.createElement("butoton");
//   buttonElem.textContent = label;
//   buttonElem.style.backgroundColor = color;
//   buttonElem.style.margin = "10px";

//   container.appendChild(buttonElem); // якщо ми добавляємо вузол. просто в АППЕНД ми можемо добавити кілька вузлів
// });


// const fruits = ["apple", "orange", "banane", "lemon", "ananas","cucumber", "swety"]

// for (let i = 0; i < fruits.length; i += 1){
//     console.log("🚀fruits", fruits)
// }
  


// const x = ["ich", "du", "wir", "Sie", "sie", "ihr"];

// // for (let i = 0; i < spiegel.length; i += 1){
// //   console.log("🚀Hallo", spiegel[i])
// // }
// const newArrey = []


// x.forEach((r) => {
//   newArrey.push((r += "AER"))
// })
// console.log("🚀Haaaaaallo", newArrey)


// const color = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const nArr = [];

// color.forEach((elem) => {
//   nArr.push(elem.label + elem.color)
// });
//   console.log (nArr)

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// descendant.addEventListener("click", (event) => {
//   event.stopImmediatePropagation();
//   alert("Descendant click handler");
// });

console.log(document)

const imgEl = document.querySelector('img')
console.log(imgEl.src)
imgEl.src = 'https://img1.akspic.ru/previews/0/9/1/1/7/171190/171190-nacionalnyj_park_kaziranga-atmosfera-mir-prirodnyj_landshaft-purpur-550x310.jpg'
console.log(imgEl.src)

const btnEl = document.querySelector('.btn')
// console.log(btnEl[1].dataset.action)
btnEl.classList.add('pop')
console.log(btnEl)

const ttt = document.querySelector('.collor-picker')

console.log(ttt)
console.log(ttt.children)

const menuEl = document.querySelector('#menu')
console.log(menuEl)
console.log(menuEl.children)
console.log(menuEl.lastElementChild)
console.log(menuEl.firstElementChild)

const titleEl = document.createElement('h1')
titleEl.classList.add("text-title")
titleEl.textContent = "Hallo bratva"
console.log(titleEl)

document.body.appendChild(titleEl)

const addImgEl = document.createElement('img')

addImgEl.classList.add('image-plus')
console.log(addImgEl)
addImgEl.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_EjwinMVgDCBXMCFU5nYQZe3klwNug-lVuu3bn_XXHZHKRWLzygBvatkWWn-YTGr66k&usqp=CAU'
addImgEl.width = "340"
document.body.appendChild(addImgEl)
console.log("🚀 ~ file: script.js:2090 ~ addImgEl", addImgEl)


const zzz = document.querySelector(".menu-item")
const imgTwoEl = document.createElement('img')
imgTwoEl.src = 'https://n1s2.hsmedia.ru/b3/38/b5/b338b527f7ebe61fd2cbf20a2a2ec5bf/690x380_0x0a330c2a_13176846571580468282.jpeg'
imgTwoEl.width = "340"
menuEl.appendChild(imgTwoEl)