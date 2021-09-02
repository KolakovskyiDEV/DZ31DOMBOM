'use strict'


// Файлы в которых писать прикреплены ниже - решение в файле solution.js
// У нас есть дерево, структурированное как вложенные списки ul / li.
// Напишите код, который выведет каждый элемент списка в консоль:
// Используйте цикл for..of
// Вывести общее кол - во элементов в консоль
// Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывести этот массив в консоль
let elementLi = document.getElementsByTagName('li');
let elementul = document.getElementsByTagName('ul');
// Выводит каждый элемент в консоль
for (let elem of elementul) // цикл for of
{
    console.log(elem);
}


// количество элементов в консоль через замыкание
function countNum() {
    let j = 0;
    return function () {
        for (j; j < elementLi.length; j++) {
            j++;
        }
        return (j + ' элементов');
    }
};

let result = countNum();
console.log(result());

// Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывести этот массив в консоль
function pushArr() {
    let arr = [];
    for (let elem of elementLi) // цикл for of
    {
        arr.push(elem.innerHTML);
    }
    return arr;
}

console.log(pushArr());