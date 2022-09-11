// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


 
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const counterOutputValue = document.querySelector('#value');

let counterValue = 0; 

const handleClickDecrement = event => {
    counterValue -= 1;
    counterOutputValue.textContent = counterValue;
};

const handleClickIncrement = event => {
    counterValue += 1;
    counterOutputValue.textContent = counterValue;
};

decrementBtn.addEventListener("click",handleClickDecrement);
incrementBtn.addEventListener("click", handleClickIncrement);

