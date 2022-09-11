// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет
// его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
//     если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
//     которые мы уже добавили в исходные файлы задания.

const textInput = document.querySelector("#validation-input");

const validationInput = (event) => {
    event.target.value.length == textInput.dataset.length ?
        textInput.classList.add("valid") :
        textInput.classList.add("invalid");
};

const focusInput = (event) => {
    textInput.classList.remove("invalid", "valid");
};

textInput.addEventListener("blur", validationInput);
textInput.addEventListener("focus", focusInput);




