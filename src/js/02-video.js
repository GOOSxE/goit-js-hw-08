// *

const iframe = document.querySelector('iframe');
const playerUrl = new Vimeo.Player(iframe);
// *

playerUrl.on('play', function() {
    console.log('played the video!');
});

