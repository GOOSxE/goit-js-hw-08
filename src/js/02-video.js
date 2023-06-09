// *
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// *
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// ? // Додав селектор і додав на нього Player

const STORAGE_KEY = 'videoplayer-current-time';
// ? // Створюю ключ сховища

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
// ? // Після перевірки встановив поточний час із сховища або 0 при false

const onTimeUpdate = time => localStorage.setItem(STORAGE_KEY, time.seconds);

player.on('timeupdate', throttle(onTimeUpdate, 1000));
// ? // При зміні поточного тайму перегляду записав нові значення в сховище
