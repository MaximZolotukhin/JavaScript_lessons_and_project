let a = document.querySelector('a')
console.log(a.getAttribute('href')) // Получение атрибутов из указанного болока
console.log(a.getAttribute('title')) // Получение атрибутов из указанного болока

console.log(a.attributes) // Получаем список атрибутов тэга
a.setAttribute('href', 'http://google.com') // Изменение параметров атрибута (какой атрибут, на что меняем)
console.log(a.getAttribute('href'))
a.textContent = 'yandex'
