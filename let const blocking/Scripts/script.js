// Code goes here
'use strict';

let productId = 12;
{
let productId = 2000;
}
console.log(productId);
//var productId = 12;
//let productId = 12;


function updateProductId2() {
  productId2 = 15;
}
let productId2 = null;
updateProductId2();
console.log(productId2);


let productId3 = 42;
for (let productId3 = 0; productId3 < 10; productId3++)
{
}
console.log(productId3);

let updateFunctions = [];
//for (var i = 0; i < 2; i++) { - closures - var only gets last value - let has 1 for each array element.
for (let i = 0; i < 2; i++) {
  updateFunctions.push(function () { return i;});
}
console.log(updateFunctions[0]());


const MARKUP_PCT = 100;
//MARKUP_PCT = 10;
console.log(MARKUP_PCT);

const MARKUP_PCT2 = 100;
if (MARKUP_PCT2 > 0) {
  const MARKUP_PCT2 = 10;
}
console.log(MARKUP_PCT2);

const MARKUP_PCT3 = 100;
//const MARKUP_PCT3 = 10; // already declared error
console.log(MARKUP_PCT3);

