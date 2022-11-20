import Player from '@vimeo/player';

const iframe = document.querySelector(`iframe`);
const player = new Player(iframe);

player.on('timeupdate', function (data) {
    const seconds = data;
    localStorage.setItem("videoplayer-current-time", data.seconds);
    player.setCurrentTime(seconds);
    throttle('timeupdate', 1000);

});

function onCurrentTime() {
    
}

