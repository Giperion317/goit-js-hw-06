// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит
// количество элементов в input и нажимает кнопку Создать, после чего рендерится
// коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в
// div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую
// функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым
// удаляя все созданные элементы.

const optionsInput = document.querySelector('input');

const createBtn = document.querySelector('button[data-create]');

const destroyBtn = document.querySelector('button[data-destroy]');

const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

optionsInput.addEventListener('blur', createBoxes);

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const amountBoxes = amount.target.value;
  createBtn.addEventListener('click', () => {
    for (let i = 0; i < amountBoxes; i += 1) {
      const div = document.createElement('div');
      div.classList.add('new-box');
      div.style.width = '30px';
      div.style.height = '30px';
      div.style.backgroundColor = getRandomHexColor();

      boxes.appendChild(div);
    };
  });
};

function destroyBoxes() {
  const newBox = document.querySelectorAll('.new-box');
  
  newBox.forEach(el => {
    el.remove();
  });
}
