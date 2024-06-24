let a = document.querySelector('a')
console.log(a.getAttribute('href')) // Получение атрибутов из указанного болока
console.log(a.getAttribute('title')) // Получение атрибутов из указанного болока

console.log(a.attributes) // Получаем список атрибутов тэга
a.setAttribute('href', 'http://google.com') // Изменение параметров атрибута (какой атрибут, на что меняем)
console.log(a.getAttribute('href'))
a.textContent = 'yandex'

let div1 = document.querySelector('#box1')
let div2 = document.querySelector('#box2')

div1.classList.add('red') // добавляем класс red к блоку div1
div2.classList.remove('blue') // Удаляем класс blue у блока div2

let checkClass = div2.classList.contains('blue') // Проверяю есть ли класс blue у бока div2
console.log(checkClass)

//Пример
if (checkClass) {
  div2.classList.remove('blue') // Удаляем класс blue у блока div2
} else {
  div2.classList.add('blue') // Удаляем класс blue у блока div2
}
