import Player from '/node_modules/@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  saveTimeToLocalStorage(currentTime);
});

const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}

const saveTimeToLocalStorage = throttle(function (currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

