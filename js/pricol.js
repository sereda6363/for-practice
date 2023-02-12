// const string = "Halllo world!!! А это уже втрой документ";
// const consoleIf = string.length
// const text = 'это длинна строки'

// console.log(`${string} ${consoleIf} ${text}`)

// let number = Math.ceil(Math.random() * (100 - 1) +1)
// alert(number)

// пройдёмся по тернарным операторам

// const age = 17;

// if (age > 18)
//   console.log('Вы старше 18 лет');
// else
//   console.log('Вы писюн, которому нет 18 лет')

// const oldYears = 19
// oldYears > 18 ? console.log('Вы старше 18 лет') :
//   (console.log('Вам нет 18 лет'), alert('попался дрочила!'))

// console.log(oldYears > 18 ? ('Вы старше 18 лет') : (('Вам нет 18 лет'), alert('попался дрочила!')));
// console.log("Hyer")
// console.log("Hyer")

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// for (let i = 5; i < 20; i += 6) {
//   console.log(i);
// }

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 1 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }

// const remark = '3 + 5 = 8';
// const aplication = confirm(remark)
// console.log(aplication)

// const dod = "50px"
// const ddod = Number.parseInt(dod)

// console.log(ddod)

// let salary = 300.231021
// console.log('salary =', Number(salary.toFixed(2)))

// console.log(2 ** 0.5)

// let oneNumber = prompt("Черкани первое число!")
// oneNumber = Number(oneNumber)
// console.log(oneNumber)

// let twoNumber = prompt('Черкани второй номерочек:)')
// twoNumber = Number(twoNumber)
// console.log(twoNumber)

// const stepen = oneNumber ** twoNumber
// console.log(stepen)

// const min = 50
// const max1 = 80

// const resultat = Math.round(Math.random() * (max1 - min) + min)
// console.log(resultat)

// --------------------------- игрульки с цветом фона ещё на первом занятии ----------

// const colors = ['tomato', 'green', 'blue', 'deppink', 'teal', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min)

// const color = colors[index]

// console.log(color)
// document.body.style.backgroundColor = color;

// --------------------------- как приводить текст к нижнему регистру-----------------

// let brand = prompt('Укажи что бы ты хотел найти на этом сайте');
// brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase()

// console.log(brand)

// -------------------------- находим нужное число в диапазоне чисел ------------------

// const x1 = 120;
// const x2 = 80;

// const numberAll = 82;

// console.log(`Число ${numberAll} попадает в отрезок до ${x1}?`, numberAll < x1);

// console.log(`Число ${numberAll} попадает в отрезок до ${x2}?`, numberAll > x2);

// console.log(`Число ${numberAll} попадает в отрезок до ${x2}?`, numberAll > x1 || numberAll > x2);

// console.log(`Число ${numberAll} попадает в отрезок до ${x2}?`, numberAll > x1 && numberAll > x2);

// console.log(`Число ${numberAll} попадает в отрезок до ${x2}?`, numberAll < x1 || numberAll > x2);

// -------------------------- открыть чат ---------------------------------------------

// const isOnline = true;
// const isFreand = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFreand && !isDnd;
// console.log('Можно ли открыть чат при заданных условиях')

// -------------------------- проверка подписки пользователя ---------------------------

// const sub = 'pro';

// const proverca = sub === 'pro' || sub === 'vip'
// console.log('Есть ли доступ к контенту при этих условиях?', proverca)

// ------------------------- оператор ветвления 'if' -----------------------------------

// if (5<30) {
//   console.log('Выполняется функция в if')
// }
// console.log('мы увидели эту ф-ю потому как не выполнилось условие внутри if')

// ------------------------- оператор ветвления 'if...else' ----------------------------

// if ( 4 > 5 ) {
//   console.log('x > y')
// } else {
//   console.log('x < y')
// }

// ------------------------- небольшая калькуляция с ЗП по условиям -------------------

// const salary = 10000;

// if (salary <= 1000) {
//   console.log('Уровень ЗП №1')
// } else if (salary > 1000 && salary <= 1500) {
//   console.log('Уровень ЗП №2')
// } else if (salary > 2000 && salary <= 3000) {
//   console.log('Уровень ЗП №3')
// } else {
//   console.log('Уровень ЗП №4')
// }

// ------------------------ баланс на карте с помощью тернарника (переделка) ----------

// const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = 'Позитивный баланс на карте';
// } else {
//   message = 'Негативный баланс на карте'
// }

// ---------------- переделали на тернарный ------

// const message = balance >= 0 ? 'Позитивный баланс на карте' : 'Негативный баланс на карте'

// console.log(message)

// --------------------- ещё один из примеров if...else которую переделали ------------

// const stars = 4;
// let price; // в данном случае мы её будем изменять

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 40;
// } else if (stars === 4) {
//   price = 50;
// } else if (stars === 5) {
//   price = 60;
// } else {
//   console.log ('Такой звезды нет')
// }
// console.log(price)
// --------------------- переделали СВИЧ ------

// switch (stars) {
//   case 1:
//     price = 40
//     break;

//   case 2:
//     price = 60
//     break;

//   case 3:
//   case 4:
//     price = 80
//     break;

//   default:
//     console.log ("Такого колличесива звёзд нет!")
// }
// console.log(price)

// -------------------------------------- задачка на СВИЧ ----------------------------------

// const option = 5;
// let massege = '';

// switch (option) {
//   case 1:
//     massege = 'Тебе доставят посылку курьером!'
//     break;

//   case 2:
//     massege = 'Посылку ты должен забрать самостоятельно!'
//     break;

//   case 3:
//     massege = ' Придёт уведомление что делать дальше!'
//     break;

//   default:
//     massege = 'Хер знает что теперь делать!!!!'
// }

// console.log(massege)
// ------------------------ цикл for -------------------------

// for (let i = 0; i <= 7; i += 1) {
//   console.log (i)
// }
// console.log('Досчитали всё что могли досчитать в fore')

// ----------------------------------------- цикл for ЗП работников ---------------------------------

// const maxSalary = 7;
// const minSalary = 1;
// const employes = 5;
// let totalSalary = 0;

// for (let i = 1; i <= employes; i += 1) {
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

//   console.log(`ЗП работника № ${i} - ${salary} кредитов`)

//   totalSalary += salary;
//   console.log ('totalSalary:', totalSalary) // для примера как добавляется ЗП в общую сумму
// }
// console.log('totalSalary:', totalSalary)

// ------------------------------------- цикл for ЗП четные и нечётные числа -------------------------

// const minNumber = 5;
// const maxNumber = 9;
// let total = 0;

// for (let i = minNumber; i <= maxNumber; i += 1){
//   console.log(i)

//   if (i % 2 !== 0) {
//     console.log('НЕ четное число: ', i);
//     total += i
//     continue
//   }
//   console.log('четное число: ', i);
//   total += i
// }

// console.log(total)

// ------------------------------------- деньги на карте ----------------------------------------------

// let balance = 1000;
// const payment = 2000;

// console.log(`Общая стоимость заказа составляет ${payment}, проверяем колличество кредитов на вашем счету`)

// if (balance >= payment) {
//   console.log('достаточно бабосов');

//   const x = balance -= payment;
//   console.log(`На счету осталось вот столько денег - ${balance} кредитов`)
// } else {
//   console.log(`на счету не достаточно кредитов для оплаті заказа `)
// }

// console.log("Отлично! Операция завершена!")
// -------------------------------------  скидка на карту --------------------------------------------

// let totalSpent = 5000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Бронзовый партнёр, скидка в 2%')
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log('Серебряный партнёр, скидка в 5%')
//   discount = 0.05;
// } else if (totalSpent >= 5000){
//   console.log('Золотой партнёр, скидка в 10%')
//   discount = 0.1;
// } else {
//   console.log("Пока не партнёр, скидка 0%")
// }

// payment -= payment * discount;

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`)

// totalSpent += payment;

// console.log(`Общая сумма потраченых кредитов в магазине ${totalSpent}`)

// ----------------------------- итерация по массиву -------------------------------------------------

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// ---------------------------- for...of -------------------------------------------------------------

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// // добавил свое, чтобы выводило только заглавные буквы
// const rrr = string.toUpperCase()
// console.log(rrr)
// // ------------------------------- через цикл for...of и if -----------------------------------------

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Polr";
// let message = "Клиента с таким именем нету в базе данных!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// Используем цикл для вывода только чисел больше определенного значения -------------------------------

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 1, 3, 34, 15, 15];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] >= threshold) {
//     continue;
//   }

//   console.log(`Число меньше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// ---------------------------------------- ghbvth -----------------------------------------------------

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// ---------------------------------------------------------------------------------
// Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// --------------------------------------------------------------------------------
// const clients = ['mango', 'poly', 'ajax'];

// clients[0] = 'kiwi';
// console.log(clients[0]);

// clients[3] = 'alex';
// console.log(clients[3]);

// console.log(clients)

// -------------------------- перебор масива и нахождение общей суммы ---------------------

// const card = [54, 34, 12, 33, 23, 7, 5, 23, 6, 3];

// let total = 0;

// for (let i = 0; i < card.length; i += 1){
//   // console.log(card[i])
//   total += card[i]
// }
// console.log("Total:", total)

// ------ то же самое только через фор---------------------

// for (const value of card) {
//   total +=value
// }

// console.log(total)

// ----------- сюда же добавим 20% налога------------------

// for (let i = 0; i < card.length; i += 1){
//   card[i] = Math.round(card[i] * 1.1);
// }
// console.log("Total:", card)

// ------------------- найти все чётные числа в массиве ------------------------------------

// const number = [1, 3, 4, 22, 32, 11, 52, 33, 9, 7, 42];
// let total = 0;

// for (let i = 0; i < number.length; i += 1){
//   const num = number[i]
//   console.log(num)

//   if (num % 2 === 0) {
//     console.log('Четное число!!!', num);

//     total += num
//   }
// }
// console.log('Total', total)

// то же самое только через фор оф ------------------

// for (const num of number) {
//   console.log(num)

//   if (num % 2 !== 0) {
//     console.log('Не Четное число!!!', num);

//     total += num
//   }
// }
// console.log('Total', total)

// ------------ логика от обратного ----------------

// for (const num of number) {
//   if (num % 2 !== 0) {
//     console.log('Эту итерацию нужно пропустить', num);
//     continue;
//   }
//   console.log(`${num} - четное!!!`);
//   total += num;
// }
// console.log('Total', total)

// -------------------- задача на поиск логинов ---------------------------------------------

// const logins = ['111drece33DF', '222DFGHK32dkdk', '333dfdkKDKJ23', '444kdjfKJDK54'];
// const loginToFind = '333dfdkKDKJ23';
// let message = `пользователь ${loginToFind} Не найден!`;

// for (let i = 0; i < logins.length; i += 1){
//   const login = logins[i];

//   console.log('Login: ', login)

//   console.log(`${login} === ${loginToFind}: `, login === loginToFind)

//   if (login === loginToFind) {
//     console.log('Ураб равнЫ!!!!')
//     message = `пользователь ${loginToFind} найден!`;
//     break;
//   }
// }
// console.log(message);

// -------------- перепишем через ФОР ОФ ------------

// for (const login of logins) {
//   console.log('Login: ', login)
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind)

//   if (login === loginToFind) {
//     console.log('Ураб равнЫ!!!!')
//     message = `пользователь ${loginToFind} найден!`;
//     break;
//   }
// }
// console.log(message);
// ---------- запишем через метод ИНКЛЮДС ------------

// console.log(logins.includes(loginToFind));

// --------- теперь через тернарник ------------------

// message = logins.includes(loginToFind)
//   ? `пользователь ${loginToFind} найден`
//   : `пользователь ${loginToFind}  НЕ найден`;

// console.log(message)
// ------------------------------------ поиск монет --------------------------------------

// const numbers = [12, 17, 2, 1, 8, 11, 7, 25];
// let smallesNumber = numbers[0];

// console.log('первая монета в массиве', smallesNumber)

// for (const number of numbers) {
//   console.log(number);

//   if (number > smallesNumber) {
//     smallesNumber = number;
//   }
// }
// console.log('ffff', smallesNumber);

// ---------------------------------- канкатенация массива -------------------------------

// const massivName = ['Mango', 'Poly', 'Ajax', 'Pojaks', 'Kiwi'];
// let string = '';

// for (const massiv of massivName) {
//   string += massiv + ',';
// }
// string = string.slice(0, string.length - 1);

// console.log(string);

// ------- перепишем всё с помощью метода массива ДЖОИН-----

// const string = massivName.join(','); // сам метон не деструктвен, массив сохраиться в первоначальном виде
// console.log(massivName); // массив остался не изменным
// console.log(string);

// ----------------------- меняем регистр букв в строке -----------------------------------
// изначально старый метод, для примера

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

// if (letter === letter.toLowerCase()) {
//   console.log('эта буква в нижнем регистре -', letter);

//   invertedString += letter.toUpperCase();
// } else {
//   console.log('эта буква в верхнем регистре -', letter);
//   invertedString += letter.toLocaleLowerCase()
// }
// -------------------- переписываем условие ИФ через тернарн оператор-----
//   const isEqual = letter === letter.toLowerCase()

//   invertedString += isEqual
//       ? letter.toUpperCase()
//       : letter.toLowerCase()
// }
// console.log(invertedString);

// --------------------- разбиваем строку в сороканожку -------------------------------------

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// ------------- абгрейд кода по современому-----

// const slug = title.toLowerCase().split(' ').join('-')
// console.log(slug);

// ---------------- подсчитать сумму двух массивов -------------------------------------------
// сразу старый древний метод

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// for (let i = 0; i < array1.length; i += 1){
//   total += array1[i]
// }

// for (let i = 0; i < array2.length; i += 1){
//   total += array2[i]
// }
// console.log(total);

//  теперь используем новый метод КОНКАТ (метод НЕ деструктивный) ------

// const arrayAll = array1.concat(array2);

// for (const array of arrayAll) {
//   total += array;
// }

// console.log(total);

// ------------   карточки  в массиве ------------------------------------------------------------

// const cards = [
//   "Cardddsss-1",
//   "Cardddsss-2",
//   "Cardddsss-3",
//   "Cardddsss-4",
//   "Cardddsss-5",
// ];

// console.table(cards);

// const cardToRemove = 'Cardddsss-3';
// const indexCard = cards.indexOf(cardToRemove);
// console.log(indexCard);

// cards.splice(indexCard, 1); // индекс и колличество эллементов которые нужно удалить

// console.table(cards);

// ------ теперь попробуем вставить в массив---

// const cardToInsert = 'Cardddsss-6';
// const index = 3; // єто просто переменная со значением индекса

// cards.splice(index, 0, cardToInsert);
// cards.splice(2, 0, 555); // это для примера, что можно добавлять просто числами без переменных
// console.table(cards);

// ----- обновление по индексу------

// const cardName = 'Cardoooooochka-44';
// const cardX = 1;

// cards.splice(cardX, 1,cardName);
// console.table(cards);

// ---------------- погнали по ФУНКЦИЯМ ------------------------------------------------------------

// function multiply(x, y, z) {
//   console.log("Код до return выполняется как обычно");

//   // Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log("Этот лог никогда не выполнится, он стоит после return");
// }

// Результат работы функции можно сохранить в переменную
// let result = multiply(5, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// -------------------------------------

// function multiply(x, y, z) {
//   console.log(`Этот лог выполняется в теле функции myltiplay. Результат умножения равен ${x * y * z}`);
// }

// console.log("Лог до вызова функции multiply");
// multiply(2, 3, 5); // Результат умножения равен 30
// console.log("Лог после вызова функции multiply");

// Последовательность логов в консоли
// "Лог до вызова функции multiply"
// "Результат умножения равен 30"
// "Лог после вызова функции multiply"

// --------------------------------------

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }
// count(3, 7, 2);
// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// --------------------------------------

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля");
//   } else if (amount > balance) {
//     console.log("Недостаточно средств на счету");
//   } else {
//     console.log("Операция снятия средств проведена успешно");
//   }
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена успешно"

// -------------------------------------

// const globalValue = 10;

// console.log('Значение в глобальной области видимости', globalValue); // 10

// function foo() {
//   console.log('Значение в функции', globalValue); // 10
// }

// for (let i = 0; i < 5; i++) {
//   console.log('Значение в ФОРЕ', globalValue); // 10

//   if (i === 2) {
//     console.log('Значение в ИФЕ', globalValue); // 10
//     //Во время выполнения функции, при выпонении именно данного значения,
//     // можно вывести значение в консоль и продолжить выполнять функцию
//   }
// }
// --------------------------------------

// for (let i = 0; i < 5; i++) {
//   const a = 20;
//   console.log(`в ФОРЕ переменная ${a} -`, a); // 20

//   if (i === 2) {
//     const b = 30;
//     console.log('rrr',a); // 20
//     console.log('xxx',b); // 30
//   }

//   if (i === 3) {
//     console.log('ddd',a); // 20

//     // ❌ Ошибка! Переменная b не доступна в этой области видимости
//     console.log(b);
//   }
// }

// --------------------- стек вызовов--------------------

// function bar() {
//   console.log("bar");
// }

// function baz() {
//   console.log("baz");
// }

// function foo() {
//   console.log("foo");
//   bar();
//   baz();
// }

// foo();
// ------------------------------- нужно потренироваться создать функцию -------------------------

// const add = function (x, y) {
//   console.log('число в функции',x);
//   console.log('число в функции',y);

//   return x + y
// }

// const r1 = add(2, 2)
// console.log('r1', r1);

// const r2 = add(3, 3)
// console.log('r2', r2);

// const r3 = add(4, 4)
// console.log('r3', r3);

// --------------------------------

// const fn = function (value) {
//   console.log(1);

//   if (value < 50) {
//     return 'Число меньше 50'
//   }
//     return 'Число больше 50'
// }
// console.log('Вызовем первый раз функцию с числом 10', fn(5));
// console.log('Вызовем первый раз функцию с числом 10', fn(60));

// ------------------------------- старая задача, решаем через функцию ------------------------------------

// const numbers = [1, 3, 4, 22, 32, 11, 52, 33, 9, 7, 42];
// let total = 0;

// for (const number of numbers) {
//   total += number
// }
// console.log('Total', total)

// -------------------------------------------

// const calculateTotalPrice = function (items) {
//   console.log(items);

//   return 23;
// }

// console.log(calculateTotalPrice([1,2,3,4]));
// console.log(calculateTotalPrice([5,10,15,20]));
// console.log(calculateTotalPrice([100, 200, 300, 400]));

// -------------------теперь слепим из єтого функцию

// const calculateTotalPrice = function (items) {

//   let total = 0

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// }

// console.log(calculateTotalPrice([1,2,3,4]));
// console.log(calculateTotalPrice([5,10,15,20]));
// console.log(calculateTotalPrice([100, 200, 300, 400]));

// ------------------------------- старая задача, решаем через функцию ---------------------------------------------------------------

// const logins = ['111drece33DF', '222DFGHK32dkdk', '333dfdkKDKJ23', '444kdjfKJDK54']

// const findLogin = function (allLogins, loginToFind) {
//   let massege = `Пользователь с таким ${loginToFind}  паролем не найден`;

//   for (const login of allLogins) {
//     if (login === loginToFind)
//       massege = `Пользователь с таким ${loginToFind}  паролем найден`;
//   }

//   return massege
// }

// console.log(findLogin(logins, '444kdjfKJDK54'));
// console.log(findLogin(logins, 'lsdfklsdsdfsdf'));
// console.log(findLogin(logins, '222DFGHK32dkdk'));
// console.log(findLogin(logins, 'lsdfklsdsdfsdf'));

//----------- логически немного модифицируем до первого совпадения пароля (применение множественного РЕТЁРНА)

// const logins = ['111drece33DF', '222DFGHK32dkdk', '333dfdkKDKJ23', '444kdjfKJDK54']

// const findLogin = function (allLogins, loginToFind) {

//   for (const login of allLogins) {
//     if (login === loginToFind)
//       return `Пользователь с таким ${loginToFind}  паролем найден`;
//   }

//   return `Пользователь с таким ${loginToFind}  паролем не найден`;
// }

// console.log(findLogin(logins, '444kdjfKJDK54'));
// console.log(findLogin(logins, 'lsdfklsdsdfsdf'));
// console.log(findLogin(logins, '222DFGHK32dkdk'));
// console.log(findLogin(logins, 'lsdfklsdsdfsdf'));

// --------------------------- через тернарник теперь делаем -----

// const logins = ['111drece33DF', '222DFGHK32dkdk', '333dfdkKDKJ23', '444kdjfKJDK54']

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Пользователь с таким ${loginToFind}  паролем найден`
//     : `Пользователь с таким ${loginToFind}  паролем не найден`
//   }

// console.log(findLogin(logins, '444kdjfKJDK54'));
// console.log(findLogin(logins, 'lsdfklsdsdfsdf'));
// console.log(findLogin(logins, '222DFGHK32dkdk'));
// console.log(findLogin(logins, 'lsdfklsdsdfsdf'));

// ------------------------------------- найти самое маленькое число в массиве ------------------------------------------------------

// const finSmallesNumber = function (numbers) {
//   let smallesNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallesNumber) {
//       smallesNumber = number;
//     }
//   }

//   return smallesNumber
// }

// console.log(finSmallesNumber([1,2,3,4]));
// console.log(finSmallesNumber([5,10,-15,20]));
// console.log(finSmallesNumber([100, 200, 300, 400]));

// ----------------------- меняем регистр букв в строке с помощью функции --------------------------------------------------------------

// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';

//   for (const letter of letters) {

//     const isEqual = letter === letter.toLowerCase()

//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase()
//   }

//   return invertedString
// }

// console.log(changeCase('ErT'));
// console.log(changeCase('DdD'));
// console.log(changeCase('WSw'));

// --------------------- разбиваем строку в сороканожку  спомощью функции -------------------------------------

// const slugify = function (string) {
//   return string.toLowerCase().split(' ').join('-')
// }

// console.log(slugify('Top 10 Benefits of React Framework'));
// console.log(slugify('Full Stack Developer'));

// ------------------------- аргументы массива через функцию АРГС ---------------------------------

// const add = function (...args) {
//   console.log('вот эта дичь',args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }
//   return total
// }

// console.log(add(1,2,3,4));
// console.log(add(5,10,-15,20));
// console.log(add(100, 200, 300, 400));

// --------------------------- ещё одна из задач найти одинаковые числа ----------------------------------------------------

// const filterNumbers = function (array, ...args) {
//   console.log('array data', array);
//   console.log('args data', args);
//   const uniqueElement = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElement.push(element)
//       console.log(`этот элемент ${element} есть везде`);
//     }
//   }

//   return uniqueElement;
// }

// console.log(filterNumbers([1,2,3,4], 1, 9, 4, 6));
// console.log(filterNumbers([5,10,-15,20], 10, 20, 30, 40));
// console.log(filterNumbers([100, 200, 300, 400], 110, 200, 310, 400));

// -------------------- объекты ----------------------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// ------------------------------------------------------------

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генри Сибола";
// console.log(user.name); // 'Генри Сибола'

// ---------------------------

// const propName = "names";
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: "Генри Сибола",
// };

// console.log(user.names); // 'Генри Сибола'
// console.log(user); // 'Генри Сибола'
// ---------------------------

// // ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//     return this.books;
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//     this.books.push(bookName);
//   },
//   // добавим метод обьекта для удаления
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// // Вызовы методов
// console.log(bookShelf.getBooks());
// bookShelf.addBook("Новая книга");
// console.log(bookShelf.getBooks());
// bookShelf.addBook("dfkjkfjkdfg");
// bookShelf.addBook("И эту книгу тоже туда же!!!");
// bookShelf.addBook("The Mist");
// console.log(bookShelf.getBooks());
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks());
// --------------------------------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// ------------------------------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const dog = Object.create(book)
// dog.name = 'Mango';

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }
//   // console.log(book[key]);
//   // book.hasOwnProperty(key)
//   console.log(dog.name);
//   // Если это не собственное свойство - ничего не делаем
// }

// -------------------------------------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }

// -------------------------- это как пример функция с обьектом ----------------------------

// const fn = function (myObject) {
//   console.log(myObject);
// }

// fn({ a: 22, b: 33, c: 44 });

// -------------------------- это как пример функция с обьектом --------------------------------

// const rtfn = function () {
//   return {a:1, b:2}
// }

// console.log(rtfn());

// ------------------------------- один из примеров --------------------------------------------

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
//   // эта запись ОЛДСКУЛЬНАЯ, она для примера здесь
//   getName: function () {
//     console.log("Ага это ведь getName :)");
//   },
//   // эта запись уже современная
//   getName(a) {
//     console.log("Ага это ведь getName :)",a);
//   },
// }
// console.log(5);

// -------- для треннировки немного поправим этот же код -------------------------------------

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   // trackCount: 3,
//   changeName(newName) {
//     this.name = newName
//   },
//   addTrack(track) {
//     this.tracks.push(track)
//   },
//   updateRating(newRating) {
//     this.rating = newRating
//   },
//   //  а вот в следующей метод(функцию) мы запишем обновление наших треков в плейлисте,
//   //  и уберём (закоментируем) трекАкаунт, так как он нам не нужен будет теперь в этом варианте кода
//   getTrackCount() {
//     return this.tracks.length
//   }

// }

// playlist.changeName('Новое имя')

// playlist.addTrack('Новый трек в плейлисте')

// playlist.addTrack('Второй трек в плейл.!')

// playlist.updateRating(10)

// console.log("вот здесь длинна треков",playlist.getTrackCount());

// console.log(playlist);

// ------------------------ пример перебора обьектов ---------------------------------------------------------------

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

// учимся получать из обьекта массив ключей через конструктор ОБДЖЕКТ

// const keys = Object.keys(feedback);
// console.log(keys);

//  теперь чтобы перебрать массив ключей можем воспользоваться методом ФОР ОФ

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }
// console.log("через ОБДЖЕКТ КЕЙС totalFeedback", totalFeedback);

//  если мы хотим получить только массив значенией, делаем следующее

// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//   totalFeedback += value
// }

// console.log("через ОБДЖЕКТ ВАЛУЕ totalFeedback", totalFeedback);

// -------------------------- работа с коллекцией (массивом обьекта) -------------------

const friends = [
  { name: "Mango", online: true },
  { name: "Sergio", online: false },
  { name: "Borodo", online: true },
  { name: "Glovo", online: false },
  { name: "Bershka", online: true },
];

console.table(friends);

// --------потренимся перебирать массив и добавим новій параметр для понимания

// for (const friend of friends) {
//   console.log(friend);

//   friend.newprop = 555;
// }

//   console.log(friends);

// --------------------------- теперь на єтом же массиве задача найти имя друга ----

// делаем сразу НЕ правильный вариант!!! этот варик начнёт сравнение с каждым обьектом в массиве

// const findFriendByName = function (allFreands, name) {
//   console.log(allFreands.includes(name));
// }

// теперь правильное решение

// const findFriendByName = function (allFreands, nameFun) {
//   for (const friend of allFreands) {
//     // console.log(friend);
//     // console.log("WWWWWWWWW",friend.name);

//     if (friend.name === nameFun) {
//       return 'НАШЛИ!!!';
//     }
//   }

//   return 'Не нАШЛИ ИМЯ РУГАНА :(';
// };

// console.log(findFriendByName(friends, 'Sergio'));
// console.log(findFriendByName(friends, 'Chelsy'));

//  теперь из массива друзей нужно получить имена всех друзей --------------

// const findFriendByName = function (allFriends) {
//   const names = []

//   for (const friend of allFriends) {
//     console.log(friend.name);
  
//     names.push(friend.name)
//   }

//   return names;
// };

// console.log('вот наш список имён другов', findFriendByName(friends))

// ------ теперь получаем всех друзей которые ОНЛАЙН -----

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend)
//     }
//   }

//   return onlineFriends;
// };

// console.log('список другов, котор ОНЛАЙН', getOnlineFriends(friends))

// ------ теперь получаем всех друзей которые ОФФФФФФФЛАЙН -----

const getOfffffflineFriends = function (allFriends) {
  const oflineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (!friend.online) {
      oflineFriends.push(friend)
    }
  }

  return oflineFriends;
};

console.log('список другов, котор ОFFFFЛАЙН', getOfffffflineFriends(friends))

