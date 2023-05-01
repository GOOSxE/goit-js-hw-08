// * 
import { throttle } from 'lodash';
// *
const inputFormUrl = document.querySelector('.feedback-form');
const emailInputUrl = document.querySelector('input');
const messageInputUrl = document.querySelector('textarea');
// ? // Додав селектори

const FORM_STORAGE_KEY = 'feedback-form-state';
const settingsArray = {
  email: 'example@gmail.com',
  message: 'message example...',
};
// ? // Створив ключ сховища та масив з параметрами

if (localStorage.getItem(FORM_STORAGE_KEY)) {
  const { email, message } = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));
  emailInputUrl.value = email;
  messageInputUrl.value = message;
}
// ? // Після перевірки на наявність даних в сховищі - додаються значення в інпути

inputFormUrl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  if (event.target.name === 'email' || event.target.name === 'message') {
    settingsArray.email = emailInputUrl.value;
    settingsArray.message = messageInputUrl.value;
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(settingsArray));
  }
}
// ? // При інпутах працює функція що додає в масив параметрів поточні значенняя інпутів
// ? Після чого додає масив поточних значень методом JSON.stringify в локальне сховище 

inputFormUrl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(localStorage.getItem(FORM_STORAGE_KEY));
  localStorage.clear();
  inputFormUrl.reset()
}
// ? // При сабміті форми функція виводить поточні значення інпутів в консоль
// ? Після чого очищується сховище та інпути 