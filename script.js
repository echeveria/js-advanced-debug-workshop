/**
 * Created by qaz on 11.12.18.
 */

const obj = {
  a: "a",
  first: 1,
  arr: [1,2,3,4,5,6,7]
};

const users = [
  {
    name: 'Leon',
    phone: '087797639763',
    city: 'Plovdiv'
  },
  {
    name: 'Nikola',
    phone: '0897979763',
    city: 'Vidin'
  }
]


const int = 10;
const string = "This is string";

const errorMsg = 'the # is not even';

const label = 'time for...'




const calcField = document.getElementById('calc-field');
const calcBtn = document.getElementById('calc-btn');
const calcResult = document.getElementById('calc-result');

calcBtn.addEventListener('click', calc);

function prepareValue(val) {

 return Number.isInteger(val)

}

function calc() {
  console.log(prepareValue(1.3));
}


//console.log('First element is object wit value: %o, second element is integer with value: %i', obj, int)

//console.assert(int % 2 === 0, {int, errorMsg});

//setTimeout(()=>{console.clear()}, 1000);

//console.table(users);

// console.info(users);
// console.error(users);
//console.warn(users);

// console.time(label);
// setTimeout(()=>{console.timeEnd(label)}, 1000);


// console.group("First group");
// console.log("Object %o", obj);
// console.log("Number %i", int);
// console.groupEnd();
//
// console.group("Second group");
// console.log("Object %s", string);
// console.log("this is same number %i", int);
// console.groupEnd();

// function bar() {
//   console.trace()
// }
// function foo() {
//   debugger;
//   bar(int);
// }
//
// foo(obj.arr);