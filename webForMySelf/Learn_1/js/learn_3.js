let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')

//Функция для работы ты с вызывом через addEventListener
function buttonClick() {
  h1.textContent = input.value // выводим значение сделаенное с помощью инпута
}

btn.addEventListener('click', buttonClick) // Отслеживает событие click и обращается к функции buttonClick
