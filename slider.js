// nextButton - кнопка для перелистывания вправо (т.е. от 1 до 3)
const nextButton = document.querySelector("#next")
// nextButton - кнопка для перелистывания влево (т.е. от 3 до 1)
const prevButton = document.querySelector("#prev")
// img - переменная для хранения HTML-тега <img>
const img = document.querySelector("img")
let i = 1

// Делал для проверки работы querySelector
// console.log(nextButton);

// Стрелочная функция, выполняющая пролистывание изображений вправо
const next = () => {
    if (i < 3) {
        i++
        img.setAttribute('src', `slider/img/${i}.jpg`)
    }
    else{
        i = 1
        img.setAttribute('src', `slider/img/${i}.jpg`)
    }
}

//Стрелочная функция, выполняющая пролистывание изображений влево
const prev = () => {
    if (i > 1) {
        i--
        img.setAttribute('src', `slider/img/${i}.jpg`)
    }
    else{
        i = 3
        img.setAttribute('src', `slider/img/${i}.jpg`)
    }
}

// Приставляем слушателя событий для кнопок, 
// устанавливаем в качетсве первого аргумента
// событие одинарного нажатия левой кнопки мыши
// в качестве второго аргумента устанавливаем
// выполняемую функцию в данном случае
// ранее созданная функция next
nextButton.addEventListener("click", next)
prevButton.addEventListener("click", prev)
