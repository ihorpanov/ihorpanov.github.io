let playList = document.querySelectorAll('audio');
let playerInterface = document.querySelector('.player');
let btnPrevious = document.querySelector('.previous');
let btnStop = document.querySelector('.stop');
let btnPause = document.querySelector('.pause');
let btnPlay = document.querySelector('.play');
let btnNext = document.querySelector('.next');
let vinyl = document.querySelector('.vinyl > img');
let songName = document.querySelector('h3');
let currentTrack = 0;

btnPlay.addEventListener('click', function() {
    playList[currentTrack].play();

    btnPlay.style.display = 'none';
    btnPause.style.display = 'block';
    songName.innerHTML = playList[currentTrack].innerHTML;

    vinyl.className = 'vinyl-animation';
})

btnPause.addEventListener('click', function() {
    playList[currentTrack].pause(); 

    btnPause.style.display = 'none';
    btnPlay.style.display = 'block';
    songName.innerHTML = 'Пауза';
    vinyl.className = '';
    
})

btnStop.addEventListener('click', function() {
    playList[currentTrack].pause();
    playList[currentTrack].currentTime = 0.0;

    btnPause.style.display = 'none';
    btnPlay.style.display = 'block';
    songName.innerHTML = 'Стоп';
    vinyl.className = '';
})

btnNext.addEventListener('click', function() {
    if (currentTrack != 3) {
        playList[currentTrack].pause();
        playList[currentTrack].currentTime = 0.0;
        playList[++currentTrack].play(); 
    } else {
        playList[currentTrack].pause();
        playList[currentTrack].currentTime = 0.0;
        currentTrack = 0;
        playList[currentTrack].play(); 
    }

    songName.innerHTML = playList[currentTrack].innerHTML;
    vinyl.className = 'vinyl-animation';
})

btnPrevious.addEventListener('click', function() {
    if (currentTrack != 0) {
        playList[currentTrack].pause();
        playList[currentTrack].currentTime = 0.0;
        playList[--currentTrack].play();  
    } else {
        playList[currentTrack].pause();
        playList[currentTrack].currentTime = 0.0;
        currentTrack = 3;
        playList[currentTrack].play(); 
    }

    songName.innerHTML = playList[currentTrack].innerHTML;
    vinyl.className = 'vinyl-animation';
})


