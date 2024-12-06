'use strict';

// Задание 1

let a = +prompt('Введите число a:');
let b = +prompt('Введите число b:');
function chet(a,b) {
    for (let i = a; i < b; i++) {
        if(i%2 == 0){
            alert(`number ${i}!`);
        }
}}
 chet(a,b)

// Задание 2x


for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}
  
let i = 0;
while(i<3){
    alert(`number${i}`);
    i++;
}

//Задание 3

while(true) {
    let a = +prompt('Тест на IQ!!! \n Введите число больше 10:');
    if(!a) break;
    if(a > 10) break;
}


//Задание 4

function min(a, b){
    if (a<b) {
        alert(a);
    } if(b<a){
        alert(b);
    } if(b==a){
        alert('a=b');
    }
}

min(2,4);