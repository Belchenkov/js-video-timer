const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const time = document.getElementById('time');

// Play & pause video
function toggleVideoStatus () {
    video.paused ? video.play() : video.pause();
}

// Update play/pause icon
function updatePlayIcon () {
    video.paused ?
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>' :
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
}

// Update Progress & timestamp
function updateProgress () {
    console.log('updateProgress')
}

// Set video time to progress
function setVideoProgress() {
    console.log('setVideoProgress')
}

// Stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);