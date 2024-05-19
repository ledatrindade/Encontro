// Método de áudio
const music = new Audio('./assets/olivia.mp3');

// Chamando variáveis
const progressBar = document.querySelector("#progressBar");
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const buttonVoltar = document.querySelector('#voltar');
const buttonAvancar = document.querySelector('#avancar');
const tempoAtual = document.querySelector("#tempoAtual");
const tempoTotal = document.querySelector("#tempoTotal");

// Método de áudio
let interval;

// Funções
function updateMusic() {
    console.log("Updating music...");
    music.src = './assets/olivia.mp3'; 
    music.load();
    play();
  }

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
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
    music.play();
    interval = setInterval(updateMusicTime, 1000);
  }
  
  function pause() {
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
    music.pause();
    clearInterval(interval);
  }

buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);


buttonAvancar.addEventListener('click', () => {
  window.location.href = 'index3.html';
});


buttonVoltar.addEventListener('click', () => {
  window.location.href = 'index.html';
});

updateMusic();
