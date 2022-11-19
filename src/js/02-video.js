// Ініціалізуємо плеєр
import Player from '@vimeo/player';
// Робимо посилання на фрейм
const iframe = document.querySelector(`iframe`);
const player = new Player(iframe);
// Застосовуємо метод on() та відстежуємо подію timeupdate - оновлення часу відтворення.
// Застосовуємо lodash.throttle, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
player.on('timeupdate', function (data) {
    const seconds = data;
    localStorage.setItem("videoplayer-current-time", data.seconds);
    player.setCurrentTime(seconds);
    throttle('timeupdate', 1000);

});

// Зберігаємо час відтворення у локальне сховище


// Функція лоя зберігання часу відтворення в local storage 
function onCurrentTime() {
    
}
