// "use strict";
// const userInputLogin = prompt("введіть логін");

// let result;
// if (userInputLogin === "Адмін") {
//     const userInputPassword = prompt(" введіть пароль")
//     if (userInputPassword === "Я адмін") {
//        result = "Здрастуйте"
//     } else {
//         result = " Невірний пароль"
//    }
// } else {
//     if (userInputLogin === null || "") {
//         result = "Скасовано"
//     } else {
//         result = " Я вас не знаю"
//     }
// }
// console.log(result)

// function slugify(title) {
//    let slug = title.toLowerCase().split(' ');
//     slug = slug.join('-');
//   return slug;
// }
// slugify('Arrays for begginers');
 
// function calculateTotal(number) {
//     let sum = 0;

//     for (let i = 1; i <= number; i += 1) {
//         sum = sum + i;
        
       
      
//     }
//      console.log(sum)
// }
// calculateTotal(10);

//  function findLongestWord(string) {
//     let str = string.split(" ");
//      let resultLength = str[0].length
//      let result = str[0]
//      const b = str.length
//      console.log(result, b)
//       for ( let i = 1; i < b; i += 1){
//         if (str[i].length > resultLength) {
//             resultLength = str[i].length
//             result = str[i]
//          console.log(resultLength, result)
//           }
//       }
//      return result;
//  }
//  findLongestWord("The quick brown fox jumped over the lazy dog")

// function createArrayOfNumbers(min, max) {
//  let numbers = [];
//     for (let i = min; i <= max; i += 1){
//         numbers += numbers[i]
//         console.log(numbers)
//     }
 
//   return numbers;
// }
// createArrayOfNumbers(14, 17)



// function filterArray(numbers, value) {
//     const filterNumber = [];
    
//     for (let i = 0; i < numbers.length; i += 1) {
//     console.log(i, numbers.length)
//         if (numbers[i] > value) {
//       console.log(numbers[i] > value)
//       filterNumber.push(numbers[i])
//       console.log(filterNumber)
//   }
// }
// return filterNumber;
// }
// filterArray([12, 24, 8, 41, 76], 38)

// function getCommonElements(array1, array2) {
//   const result = []
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i])
//       console.log(result)
//     }
//   }
//  console.log(result)
//   return result
 
// }

// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])

// function getEvenNumbers(start, end) {
//   const evenNumber = [];
//   for (let i = start; i <= end; i += 1){
//     if (i % 2 === 0) {
//       evenNumber.push(i)
//       console.log(evenNumber)
//     }
//    }
//   console.log(evenNumber)

// return evenNumber

//     // Change code above this line
// }
//   getEvenNumbers(6, 12)

// function findNumber(start, end, divisor) {
//   // Change code below this line
  

//   for (let i = start; i <= end; i += 1) {
    
//     if (i % divisor === 0) {
//     console.log(i)
//    }
//   }
  
// }
// findNumber(6, 9, 4)

// function includes(array, value) {

//   let result
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       result = true
//       console.log(array[i],result)
//       break
//    }
    
   
//     result = false
//     console.log(array[i], result)
//  }
  
//   console.log(result)
//   return result
//   }
// // includes([1, 2, 3, 4, 5], 17)
// // includes([1, 2, 3, 4, 5], 3)
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")

// // Example 7 - Сортування масиву із циклом
// // Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const result = [];

// const exm = [...langs].sort((a, b) => a.localeCompare(b))
// console.log('example', exm);

// for (let i = 0; i < langs.length; i += 1) {
//   let max = langs[i];
//   let maxIndex
  
//   console.log(max)
//   for (let j = i; j < langs.length; j += 1) {
//       console.log(j,i,)
//     if (max > langs[j] && !result.includes(langs[j])) {
//       console.log(max > langs[j] && !result.includes(langs[j]),max, langs[j])
//       max = langs[j];
//       maxIndex = j
//       console.log("max", max, "maxIndex", j)
//     }
//     console.log(max > langs[j] && !result.includes(langs[j]), max, langs[j])
//    maxIndex = j
//   }
//         langs.splice(maxIndex,1)
   
//   result.push(max)

//   console.log(result, langs)
// }
// console.log(result);

// let arr = [];
// console.log(fillArray(2, 10));
// function fillArray(min, max) {
//   for (let i = min; i <= max; i += 2) {
//         // console.log(arr.push(i))
//       return arr.push(i)
    
//     }
// }
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const allPropValue = []
//   for (const product of products) {
//     if (product[propName]) {
//       allPropValue.push(product[propName])
//     }
//   }
//   console.log(allPropValue)
//   return allPropValue
// }
//  console.log (getAllPropValues('price'))
//
// function (x) {
//   delete (x)
//   return (x)
  
// }
// console.log((1));
// function makeTask(data) {
//   // const completed = false;
//   // const category = "General";
//   // const priority = "Normal";
//   const { text, completed = false, category = "General", priority = "Normal" } = data
//   dataNew = {text, completed, priority, category}
//   console.log(dataNew)
//   return dataNew
// }
// console.log(makeTask({}))
// // console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))

// function addOverNum(firstarg, ...args) {
//   let totale = 0;
//   for (const arg of args) {
//     if (arg > firstarg) {
//       totale += arg;
//     }
//   }
//   return totale;
// }
// // console.log(add(12, 4, 11, 48))
// console.log (addOverNum(10, 12, 4, 11, 48, 10, 8))


// Change code below this line

// function findMatches(array,...args) {
//   const matches = [];
//   for (const item of args) {
//     if (array.includes(item)) {
//       matches.push(item)
//     }
   
//  }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions({ ...potions }) {
//     console.log(potions)
//     return this.potions
//   }
// };


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions({}) {
  
//     return {potions};
//   },
  

//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
//

// const arr = [2, 4, 6];
// const result = arr.filter((el) => el * 2);
// console.log(result);

//
// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = students.sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names);
// // const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder);
// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);
// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);

// const mySet = new Set([1, 2, 1, 4, 3, 2]);
// const result = [...mySet];
// console.log(result);

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
    
//       if (this.pizzas.includes(pizzaName)) {
//        return makePizza(pizzaName);
//       }else { return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)}
    
//     }
//   }

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));

// const filterArray = (numbers, value) => numbers.filter(number => number > value)

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
// numbers.forEach((number) => {
//   if (number > value) {
//       filteredNumbers.push(number);
//     }})
 
//     return filteredNumbers;
//   }

//   // Change code above this

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function changeEven(numbers, value) {
//   let newNumbers =[...numbers]
//   for (let i = 0; i < newNumbers.length; i += 1) {
//     if (newNumbers[i] % 2 === 0) {
//       newNumbers[i] = newNumbers[i] + value;
//     }
//   }
// return newNumbers;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const getUserNames = users => {
    
// users.map(user => user)
// };
// console.log(getUserNames(["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]));


// const getFriends = (users) => {
// const friendsAll = users.flatMap(user => user.friends)
//  const  friendsFin = friendsAll.filter((friend, index, array) => array.indexOf(friend) === index);
//   return friendsFin
// };

// const getActiveUsers = (users) => {
// return users.filter(({isActive}) => isActive).flatMap(user => user.name)
  
// };

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];
// console.log(getActiveUsers(users));


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => !value % 2);
// console.log(const eachElementInFirstIsEven = firstArray.every(value => !value % 2));
// const eachElementInFirstIsOdd = firstArray.every(value => value%2);

// const eachElementInSecondIsEven = secondArray.every(value => !value%2);
// const eachElementInSecondIsOdd = secondArray.every(value => value%2);

// const eachElementInThirdIsEven = thirdArray.every(value => !value%2);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2);

// console.log(eachElementInFirstIsEven(firstArray));

// const calculateTotalBalance = users.reduce((totalBalance, user) => {
//      return totalBalance + user.balance
// },0);

// console.log(calculateTotalBalance(users));



// 4 (map(), filter()) Необхідно отримати лише імена студентів, які набрали більше 50 балів із того ж набору
// даних.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const newArray = studentRecords.filter(({ marks }) => marks > 50).map(({ name }) => name)
// console.log(newArray);
// var litmir = [
//   { author: "Хэленка", title: "Улетела сказка" },
//   { author: "Коул Кресли", title: "Восстание Аркан" },
//   { author: "Райчел Мид", title: "Золотая лилия" },
// ];

// let ob = litmir.toSorted((a, b) => a.title.localeCompare(b.title));
// console.log(litmir);
// console.log(ob);

// 1) Отримай з масиву за допомогою reduce мінімальне число (-9)
// 2) Отримай з масиву за допомогою reduce максимальне число (18)
// const numbers = [-9, 18, 6, 5];
// const minNumber = numbers.reduce((acc, number) => {
//   if (number < acc) {
//   acc = number
//   }
//   return acc
// })

// const maxNumber = numbers.reduce((acc, number) => {
//   if (number > acc) {
//   acc = number
//   }
//   return acc
// })

// console.log(minNumber);
// console.log(maxNumber);


// const users = [
//   { id: "1", name: "John" },
//   { id: "2", name: "Anna" },
//   { id: "3", name: "Kate" },
// ];

// console.log(users.reduce((acc, user) => {
//   acc[user.id] = user.name;
// return acc
// }, {}));

// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній
// const letMeSeeYourName = (callback) => {};

// Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль
//++++++++++++++++++++++++++++++++++++++++++++

// const makeProduct = (name, price, callback) => {
//   let qqq = { name, price, id: Date.now() }
//   callback(qqq)
// };
// const showProduct = (product) => {
// console.log(product);
// }
// makeProduct(`late`, 20,showProduct)
// ==========================================

//Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я),
//surname (прізвище), rat e (ставка за день роботи), days (кількість відпрацьованих
//днів). Також клас повинен мати метод getSalary(), який виводитиме зарплату
//працівника. Зарплата - це добуток (множення) ставки rate на кількість
//відпрацьованих днів days. І метод getFullName() - ім'я та прізвище працівника.
// class Worker{
//   constructor(name,surname, rate, days ) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }

//   getSalary() {

//     return this.rate * this.days;
// }

//  get getFullName() {
    
//     return `${this.name}  ${this.surname}`;
//   }


// const worker = new Worker("Іван", "Іванов", 10, 31);

// console.log(worker.name); //Виведе 'Іван'
// console.log(worker.surname); //Виведе 'Іванов'
// console.log(worker.getFullName); //Виведе 'Іванов Іван'
// console.log(worker.rate); //Виведе 10
// console.log(worker.days); //Виведе 31
// console.log(worker.getSalary()); //Виведе 310 - тобто 10 * 31
// !
// Напишіть новий клас Boss, цей клас успадковується від класу Worker та минулого
// завдання. З'являється нові властивості: workers - кількість працівників.
// І зарплата вважається інакше: добуток (множення) ставки rate на кількість
// відпрацьованих днів і кількість працівників.

// const boss = new Boss("Іван", "Іванов", 10, 31, 10);
// console.log(boss.name); //Виведе 'Іван'
// console.log(boss.surname); //Виведе 'Іванов'
// console.log(boss.getFullName); //Виведе 'Іванов Іван'
// console.log(boss.rate); //Виведе 10
// console.log(boss.days); //Виведе 31
// console.log(boss.workers); //Виведе 10
// console.log(boss.getSalary()); //Виведе 3100 - тобто 10 * 31 * 10

//Напишіть новий клас Boss, цей клас успадковується від класу Worker та минулого
//завдання. З'являється нові властивості: workers - кількість працівників.
//І зарплата вважається інакше: добуток (множення) ставки rate на кількість
//відпрацьованих днів і кількість працівників.

// class Boss extends Worker{
//   constructor(name, surname, rate, days, workers){
//     super(name,surname, rate, days);
//     this.workers = workers;
//   }

//   getSalary(){
//     return this.rate * this.days* this.workers;
//   }
// }

// const boss = new Boss("Іван", "Іванов", 10, 31, 10);
// console.log(boss.name); //Виведе 'Іван'
// console.log(boss.surname); //Виведе 'Іванов'
// console.log(boss.getFullName); //Виведе 'Іванов Іван'
// console.log(boss.rate); //Виведе 10
// console.log(boss.days); //Виведе 31
// console.log(boss.workers); //Виведе 10
// console.log(boss.getSalary()); //Виведе 3100 - тобто 10 * 31 * 10