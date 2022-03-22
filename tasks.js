'use strict'

//задача 2
const rain = Math.round(Math.random());

if(rain ===1){
    console.log('Пошёл дождь. Возьмите зонт!', rain);
}
else if (rain===0){
    console.log('Дождя нет!', rain);
};

//задача 3

const minScore = 256;
const scoreMath = +prompt('Сколько баллов Вы набрали по Математике?');
const scoreRussianLang = +prompt('Сколько баллов Вы набрали по Русскому языку?');
const scoreIT = +prompt('Сколько баллов Вы набрали по Информатике?');
const totalScore = scoreMath + scoreRussianLang + scoreIT

if(totalScore => minScore){
    console.log('Поздравляю, вы поступили на бюджет!');
};


//задача 4

const cashOut = +prompt('Сколько денег Вы хотите снять?');
const minCash = 100; //мин. купюра
const modCashOut = cashOut % minCash;

if(modCashOut === 0 ){
     console.log('Выдача денег')
 }else {
    console.log('В банкомате мало купюр')
 }


