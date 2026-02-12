// forEach with a callback function

let numbers = [0, 2, 4, 6, 8];

numbers.forEach(function (number) {
  console.log(number * 3);
});

numbers.forEach((number, index) => {
  if (index % 2 == 0) {
    console.log(number);
  }
});

numbers.forEach((number, index) => {
  console.log(`Number ${number} is at index ${index}`);
});

//high order functions

function applyTwice(func, value) {
  return func(func(value));
}
function double(x) {
  return x * 2;
}
console.log(applyTwice(double, 3)); // 12

function createAdder(x) {
  return function (y) {
    return x + y;
  };
}
let add5 = createAdder(5);
console.log(add5(10)); //15

function filterGreaterThan(arr, limit) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    function isGreater(value) {
      return value > limit;
    }
    if (isGreater(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(filterGreaterThan(numbers, 4));

//map() method
const nums = [2, 5, 8];
let newArray = nums.map((n) => n * 2);
console.log(newArray);

const words = ["sole", "luna", "mare"];
const wordsLength = words.map((n) => n.length);
console.log(wordsLength);

const people = [
  { name: "Marco", age: 20 },
  { name: "Giulia", age: 28 },
  { name: "Sara", age: 32 },
];
const namePeople = people.map((person) => person.name);
console.log(namePeople);

const letters = ["a", "b", "c"];
console.log(letters.map((element, index) => `${index}: ${element}`));

const values = [1, 2, 3];
const obj = values.map((value) => ({ value: value }));
console.log(obj);

//filter() method
const nums2 = [5, 12, 8, 20, 3];
console.log(nums2.filter((num) => num > 10));

const words2 = ["sun", "mountain", "see", "sky"];
console.log(words2.filter((word) => word.length > 4));

const items = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true },
];
console.log(items.filter((item) => item.active == true));

const numbers2 = [1, 2, 3, 4, 5, 6];
const filteredArray = numbers2.filter((num) => num % 2 == 0);
const doubled = filteredArray.map((num) => num * 2);
console.log(doubled);

const messy = [" hello", "", "world ", " ", "js"];
const result = messy
  .filter((word) => word.trim() != "")
  .map((word) => word.trim());
console.log(result);

//reduce() method

const nums3 = [4, 2, 8];
console.log(nums3.reduce((acc, curr) => acc + curr, 0));

const nums4 = [2, 3, 4];
console.log(nums4.reduce((acc, current) => acc * current, 1));

const words3 = ["hi", "sun", "mountain", "sea", "sky"];
const count = words3.reduce((acc, word) => acc + (word.length > 3 ? 1 : 0), 0);
console.log(count);

const letters2 = ["a", "b", "a", "c", "b", "a"];
const occurrences = letters2.reduce((acc, letter) => {
  if (!acc[letter]) {
    acc[letter] = 1;
  } else {
    acc[letter]++;
  }
  return acc;
}, {});
console.log(occurrences);


//method chaining()
const books = [
  { title: "Dune", pages: 412 },
  { title: "It", pages: 1138 },
  { title: "The Hobbit", pages: 310 },
  { title: "The Stand", pages: 823 }
];
let booksNumber = books
  .filter(book => book.pages > 400).length;
let pageNumber = books
  .filter(book => book.pages > 400)
  .map((page) =>page.pages)
  .reduce((acc, current) =>acc+current, 0);

console.log(`Average: ` +pageNumber/booksNumber);

//sort() method
const users = [
  { name: "Anna", age: 32 },
  { name: "Marco", age: 21 },
  { name: "Luca", age: 45 },
  { name: "Sara", age: 28 }
];
 console.log(users.sort( (userA, userB) => userA.age-userB.age));

 //every() and some() methods
 const users2 = [
  { name: "Anna", active: true },
  { name: "Marco", active: true },
  { name: "Luca", active: false }
];
console.log(users2.every((user => user.active)));
console.log(users2.some((user => user.active)));
