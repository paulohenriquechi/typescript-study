"use strict";
let greet;
greet = () => {
    console.log("hello");
};
const sum = (a, b, c = 0) => {
    return a + b + c;
};
const minus = (a, b) => {
    return a - b;
};
const noReturn = () => {
    console.log("void return");
};
sum(10, 20);
minus(10, 5);
noReturn();
