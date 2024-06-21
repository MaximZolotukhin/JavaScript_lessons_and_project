// let div = document.getElementById('playground') //Получение Элемента из DOM дерева по ID
// console.log(div)

// let p = document.getElementsByClassName('text') // Получение элемента по имени класса
// console.log(p)

// let h1 = document.getElementsByTagName('h1') // Получение элемента по именит тега
// console.log(h1)

let div = document.querySelector('#playground') //Получение Элемента из DOM дерева по ID
console.log(div)

let p = document.querySelectorAll('.text') // Получение элемента по имени класса
console.log(p)

let h1 = document.querySelector('h1') // Получение элемента по именит тега
console.log(h1)

let div2 = document.querySelector('div#playground ul') //Получение вложенного элемента
console.log(div2)
