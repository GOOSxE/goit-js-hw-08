// *
import Player from '@vimeo/player';
import { isNumber, throttle} from 'lodash';
// *
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// ? // Додав селектор і додав на нього Player

const STORAGE_KEY = 'videoplayer-current-time';
// ? // Створюю ключ сховища

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
// ? // Після перевірки встановив поточний час із сховища або 0 при false

const onTimeUpdate = function () {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(STORAGE_KEY, seconds);
  });
};
player.on('timeupdate', throttle(onTimeUpdate, wait = 1000));
// ? // При зміні поточного тайму перегляду записав нові значення в сховище
// ? Та
