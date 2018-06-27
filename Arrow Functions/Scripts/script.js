// Code goes here
'use strict';
var getPrice = () => 5.99;
console.log(typeof getPrice);
console.log(getPrice());

var getPrice2 = count => count * 4.00;
console.log(getPrice2(2));

var getPrice3 = (count, tax) => count * 4.00 * (1 + tax);
console.log(getPrice3(2, .07));

var getPrice4 = (count, tax) => {
    var price = count * 4.00;
    price *= (1 + tax);
    return price;
}
document.getElementById("output").innerHTML = "Result= " + getPrice4(2, .07);

document.addEventListener('click', () => document.getElementById("Thisoutput").innerHTML = "This = " + this);