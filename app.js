

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