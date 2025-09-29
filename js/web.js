let canciones = [
    'aud/The Winner Is.mp3',
    'aud/Bruno Mars - Count on Me (Official Lyric Video)(MP3_160K).mp3',
    'aud/Ed Sheeran - Perfect (Official Music Video)(MP3_160K).mp3',
    'aud/Can_t take my eyes off you (10 things i hate about you)(MP3_160K).mp3',
    'aud/Cody Simpson - La Da Dee (Official Music Video)(MP3_160K).mp3',
    'aud/New West - Those Eyes (Lyrics)(MP3_160K).mp3'
];

let indice = 0;

const audioWeb = document.getElementById('audioWeb');
const PlayPause = document.querySelector('.btnAudio');
const Anterior = document.querySelector('.btnAnt');
const Siguiente = document.querySelector('.btnSig');
const text = document.getElementById('text-music');
const videos = document.querySelectorAll('.video');


audioWeb.src = canciones[indice];

videos.forEach(video => {
    video.addEventListener('play', () => {
        audioWeb.pause();
    });
});


audioWeb.addEventListener('play', () => {
    videos.forEach(video => video.pause());
});

function cargarCancion(i){
    if(i < 0) {
        indice = canciones.length - 1;
    } else if(i >= canciones.length){
        indice = 0;
    } else {
        indice = i;
    }

    audioWeb.src = canciones[indice]; 
    audioWeb.play();
    PlayPause.textContent = '⏸️';
}

audioWeb.addEventListener('ended', () => {
    cargarCancion(indice + 1);
});

PlayPause.addEventListener('click', () => {
    if(audioWeb.paused){
        audioWeb.play();
        PlayPause.textContent = '⏸️';
    } else {
        audioWeb.pause();
        PlayPause.textContent = '🎧';
    }
});

Anterior.addEventListener('click', () => {
    cargarCancion(indice - 1);
});

Siguiente.addEventListener('click', () => {
    cargarCancion(indice + 1);
});




function voltear(card){
    card.classList.toggle('flipped')
}




