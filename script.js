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
const namePeople = people.map( person => person.name);
console.log(namePeople);

const letters = ["a", "b", "c"];
console.log(letters.map((element, index) => `${index}: ${element}`));

const values = [1, 2, 3];
const obj = values.map(value =>({value: value}));
console.log(obj);
