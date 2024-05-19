// Método de áudio
const music = new Audio('./assets/Billie.mp3');

// chamdando variaveis
const progressBar = document.querySelector("#progressBar");
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const tempoAtual = document.querySelector("#tempoAtual");
const tempoTotal = document.querySelector("#tempoTotal");

// metodo de audio
let interval;

//funçoes

function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = Math.floor(segundos % 60);
  return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
}

function updateMusicTime() {
  const progresso = (music.currentTime / music.duration) * 100;
  progressBar.value = progresso;
  tempoAtual.textContent = formatarTempo(music.currentTime);
}

music.addEventListener('loadedmetadata', function () {
  tempoTotal.textContent = formatarTempo(music.duration);
});

function play() {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  music.play();
  interval = setInterval(updateMusicTime, 1000);
}

function pause() {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  music.pause();
}

buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);