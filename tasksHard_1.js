'use strict'

const sumSallary = +prompt('Введите вашу зарплату');
let tax = 0;

if(sumSallary <= 15000){
    tax = sumSallary * 0.13;
    console.log(`Ваша зарплата: ${sumSallary}, вы заплатите ${tax} налог`);
} else if(sumSallary > 15000 && sumSallary <= 50000){
    tax = sumSallary * 0.2;
    console.log(`Ваша зарплата: ${sumSallary}, вы заплатите ${tax} налог`);
}else if(sumSallary > 50000){
    tax = sumSallary * 0.3;
    console.log(`Ваша зарплата: ${sumSallary}, вы заплатите ${tax} налог`);
}



