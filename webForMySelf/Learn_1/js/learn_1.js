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

console.log(div.innerHTML) // Вывод информаци в консоль из блока div с помощью innerHTML
div.innerHTML = '<p style="color: gray">Новый текст </p>' // Вывод текста на страницу innerHtml
console.log(h1.textContent) // Вывод информаци в консоль из блока h1 textContent
h1.textContent = 'Динамическое изменение текста в H1' // Выводи текста на страницу с помощью textContent

let inputText = document.querySelector('.inputText')
console.log(inputText.value) // С помощью value мы получаем доступ к значению input
