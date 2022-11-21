import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const iframe = document.querySelector(`iframe`);
const player = new Player(iframe);


player.on('timeupdate', throttle(saveData, 1000));

function saveData(data) {
 localStorage.setItem("videoplayer-current-time", data.seconds);
}
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

