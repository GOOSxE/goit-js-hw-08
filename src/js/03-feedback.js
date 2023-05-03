// *
import throttle from 'lodash.throttle';
// *
const inputFormUrl = document.querySelector('.feedback-form');
const emailInputUrl = document.querySelector('input');
const messageInputUrl = document.querySelector('textarea');
const FORM_STORAGE_KEY = 'feedback-form-state';
// ? // Додав селектори та створив ключ сховища ;

if (localStorage.getItem(FORM_STORAGE_KEY)) {
  const { email, message } = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));
  emailInputUrl.value = email;
  messageInputUrl.value = message;
}

const settingsArray = {
  email: emailInputUrl.value || "",
  message: messageInputUrl.value || "",
};
// ? // Після перевірки на наявність даних в сховищі - додаються значення в інпути
// ? Та створюється об'єкт з параметрами ;

inputFormUrl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  if (event.target.name === 'email' || event.target.name === 'message') {
    settingsArray.email = emailInputUrl.value.trim();
    settingsArray.message = messageInputUrl.value.trim();
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(settingsArray));
  }
}
// ? // При інпутах працює функція що додає в масив параметрів поточні значенняя інпутів
// ? Після чого додає масив поточних значень методом JSON.stringify в локальне сховище ;

inputFormUrl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (
    emailInputUrl.value.trim() === '' ||
    messageInputUrl.value.trim() === ''
  ) {
    alert('Всі поля повинні бути заповнені!');
    return;
  }
  console.log(settingsArray);

  localStorage.removeItem(FORM_STORAGE_KEY);
  inputFormUrl.reset();
  
  settingsArray.email = '';
  settingsArray.message = '';
}
// ? // При сабміті форми функція виводить поточні значення об'єкта параметрів в консоль
// ? Після чого очищується ТІЛЬКИ ОДИН ключ сховища, інпути,
// ? Та об'єкт з параметрами даних ;
