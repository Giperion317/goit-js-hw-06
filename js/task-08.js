// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей
// в обьект, где имя поля будет именем свойства, а значение поля - значением
// свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей
// формы методом reset.

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onHandleSubmit);

function onHandleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const data = {
    email: email.value,
    password: password.value,

    getData() {
      console.log(this);
    },
  };

  data.getData();

  event.target.reset();
}
