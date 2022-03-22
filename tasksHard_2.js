'use strict'

const sumSallary = +prompt('Ваша зарплата?');
let tax =0;
let taxSecond =0;

if(sumSallary <= 15000){
    tax = sumSallary * 0.13;
    console.log(`Ваша зарплата: ${sumSallary}, вы заплатите ${tax} налог`);
}else if(sumSallary > 15000 && sumSallary <= 50000){
    tax = sumSallary - 15000;
    taxSecond = tax * 0.2;
    console.log(`Ваша зарплата: ${sumSallary}, вы заплатите ${taxSecond} налог`);
}else if(sumSallary > 50000){
    tax = sumSallary - 50000;
    taxSecond = tax * 0.3;
    console.log(`Ваша зарплата: ${sumSallary}, вы заплатите ${taxSecond} налог`);
}