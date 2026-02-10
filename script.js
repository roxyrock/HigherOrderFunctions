// forEach with a callback function

let numbers = [0, 2, 4, 6, 8];

numbers.forEach(function (number) {
  console.log(number * 3);
});

numbers.forEach((number, index) =>{
    if(index%2 == 0){
        console.log(number);
    }
});

numbers.forEach((number, index) => {
    console.log(`Number ${number} is at index ${index}`);
});