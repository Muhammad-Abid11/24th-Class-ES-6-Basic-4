

// FIRST-CLASS FUNCTIONS

/*

const greeting = () => `Hello`
console.log("function body", greeting)
console.log("Function output-->", greeting())

const a = () => console.log("Drink Water");
setInterval(a, 2000);// it runs every 2sec


const sayHello = function () {
    return function () {
        console.log("Hello")
    }
}

console.log("1 function without paranthesis", sayHello)
console.log("2 function with paranthesis", sayHello())
console.log("3 function with double paranthesis", sayHello()())

*/

// Exit Loop

// by -->break

let a = [1, 2, 3, 4, 5, 6]
for (const value of a) {
    console.log("values stop by Break -->", value);
    if (value == 3) {
        break;
    }
}

// by-->.some

let arr = [1, 2, 3, 4, 5, 6];
arr.some(number => {
    console.log("some-->", number);
    return number > 2
})
// koye statement true hoye too loop exit



// by-->.every

let arr3 = [1, 2, 3, 4, 5, 6];
arr.every(number => {
    console.log("every-->", number);
    return number < 3
})



/*

what is difference between "copy by Value" and "Copy by Reference"

In "copy by value," a new memory location is created and the value of the
original variable is copied to the new location. The two variables then have
separate memory locations and any changes made to one will not affect the
other. In "copy by reference," a reference to the memory location of the
original variable is copied, so the two variables refer to the same
memory location. Any changes made to one will affect the other.

Example

// Copy by value
let x = 5;
let y = x;
x += 1;
console.log(x);  // 6
console.log(y);  // 5

// Copy by reference
let a = { value: 5 };
let b = a;
a.value += 1;
console.log(a.value);  // 6
console.log(b.value);  // 6

In the first example, x and y are primitive data types, and when
we assign x to y, it creates a new memory location for y and copies
the value of x to y. So changing value of x does not affect the value of y.

In the second example, a and b are objects, and when we assign a to b,
it assigns the reference of a to b. So both a and b are pointing to
the same memory location. Changing the value of a will affect the value
of b as they are pointing to the same memory location




*/


// LinkedIn Post

/*

const numbers = [1, 2, 3];
const [s, b, ...c] = numbers

console.log(`C value--> ${c} and c.length ${c.length}`) //  c=[3]

*/






/*

var ct1={
    name:"Abid",
    url:"URL.com"
}
t=Object.keys(ct1).length;
console.log(t);
console.log(Object.keys(ct1))
console.log(Object.values(ct1))

*/ 