"use strict";

const banck = prompt('Скок денег', '');
let sum = 0;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

function sumTax(q) {
    return q * TAX_RATE;
 }


do{
    sum += PHONE_PRICE;
    sum += ACCESSORY_PRICE;
}
while (sum < banck);
 


if(sum > banck){
    sum -= PHONE_PRICE;
    sum -= ACCESSORY_PRICE;
}

console.log(Math.round(sum));
