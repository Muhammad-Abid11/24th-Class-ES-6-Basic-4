// FIRST-CLASS FUNCTIONS

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