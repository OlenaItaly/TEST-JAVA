// ПРАКТИКА СУБОТИ
// 1
//Напишіть код, який перетворює та поєднує всі елементи масиву в одне рядкове значення. Елементи масиву будуть розділені комою. Отримайте результат двома різними методами.

// const vegetables = ["Капуста", "Ріпа", "Редиска", "Морква"];
// console.log(vegetables.join(','));
// console.log(``);
// let vegetablesNew = "";
// for (const item of vegetables) {
//      vegetablesNew += item + ","
// }

// console.log(vegetablesNew.slice(0, vegetablesNew.length - 1));
// console.log( vegetablesNew);
// const array1 = [5, 2, 1, -10, 8, 5, 2, 1, -9, 3, 7];

// const union = function (array) {
//   const obj = {};
//   const newArray = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const key = String(array[i]);
//     if (!obj[key]) {
//       obj[key] = 1;
//     } else {
//       obj[key] += 1;
//     }
//   }
//   const keys = Object.keys(obj);

//   for (const key of keys) {
//     if (obj[key] === 1) {
//       newArray.push(key);
//     }
//   }
//   return newArray;
// };


// 2

// Напишіть функцію union, яка повертає масив, що складається тільки з унікальних
//елементів масиву.

// const array1 = [5, 2, 1, -10, 8, 5, 2, 1, -9, 3, 7];

// const union = function (array) {};
// console.log(union(array1)); // [-10,8,5,2,1,-9,3,7]
// const union = function (array) {
//   const newArray = [];
//   for (const item of array) {
//     if (array.indexOf(item) === array.lastIndexOf(item)) {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// };

// console.log(union(array1)); // [-10,8,5,2,1,-9,3,7]

// 3.
/*
 * Напиши скрипт, який, для об'єкта user, послідовно:

* додає поле mood зі значенням 'happy'
* замінює значення hobby на 'skydiving'
* замінює значення premium на false
* виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: 'John',
//   age: 21,
//   hobby: 'css',
//   premium: true,
// };
// user.mood = `happy`
// user.hobby = 'skydiving'
// user[`premium`] = false
// console.log(user);
// const keys = Object.keys(user)
// for (const key of keys) {
//     console.log(key + ` : ` + user[key]);
// }


/*=================================================================================
//  * Напишіть ф-цію calcTotalPrice(array, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
//  */

// const stones = [
//     { name: 'Ізумруд', price: 1300, quantity: 4 },
//     { name: 'Бриліант', price: 2700, quantity: 3 },
//     { name: 'Сапфір', price: 400, quantity: 7 },
//     { name: 'Щебень', price: 200, quantity: 2 },
//   ];
  
// function calcTotalPrice(array, stoneName) {
//     for (const item of array) {
//         if (item.name === stoneName) {
//             return item.price * item.quantity
//         }

//     }
//     return `not found`

//   }
  
//   console.log(calcTotalPrice(stones, 'Ізумруд'));
//   console.log(calcTotalPrice(stones, 'Цегла'));

// =========================================================================
// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items
//     }
//     addItem(newItem) {
//         this.items.push(newItem)
//     }
//     removeItem(itemToRemove) {
//         //  if (this.items.includes(itemToRemove)) {
//         //    this.items.filter(value => !value === itemToRemove)
//         // }

//         let indx = this.items.findIndex(value => value === itemToRemove);

//         this.items.splice(indx, 1);
  
//     }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ==================================================================================
// class StringBuilder {
//   constructor(value) {
//   this.value = value;
//   }
//    getValue() {
//      return this.value;
//    }
//   padEnd(str) {
//     this.value = this.value + str;
//   }
//   padStart(str) {
//      this.value = str + this.value;
//   }
//   padBoth(str) {
//       this.padEnd(str);
//       this.padStart(str);
//   }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// =================================================================================

// Завдання 20. Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
//  class User {
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
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
// blacklist(email) {
//   this.blacklistedEmails.push(email);
// }
//   isBlacklisted(email) {
//     return (this.blacklistedEmails.includes(email));
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
