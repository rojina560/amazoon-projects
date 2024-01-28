// function fullName( first,last= '') {
//     const full = first + ' ' + last
//     return full
// }
// const name = fullName(rojina,)
//  console.log(name)

// template string ............
// const a = 20;
// const b = 10;
// const numbers = [33, 34, 35]
// const student = { name:'rojina', age:23}
// const total = ` the sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`
// console.log(total)

// const email = 'hi rojina \n' +
//     'tmi ajke jauni \n' +
//     'keno';
//     console.log(email)

// easy way to use backtik..........
// const email = ` hi rojina
// tmi ajke jauni
// keno`;
//  console.log(email);


// arrow function .............
const personAge = (person) => person.age
const student = { name: 'rojina', age: 22 };
const age = personAge(student)
console.log(age)
const getThird = Numbers => Numbers[2];
const third = getThird([4, 5, 6, 7, 8,])
console.log(third);

// no parameter 
const getPI = () => Math.PI
console.log(getPI())
