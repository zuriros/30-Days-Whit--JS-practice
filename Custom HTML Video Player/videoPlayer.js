// Obtener nuestro elementos
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


//construir funciones


const togglePlay = () => {
  const method = video.paused ? 'play':'pause';
  video[method]();
//   if (video.paused) {
//     video.play();  
//   }else{
//     video.pause();
//   }
}

const updateButton = (e) => {
  const icon = e.target.paused? '►' : '❚ ❚';
  toggle.textContent = icon;
}

const skip = (e) => {
//   console.log(parseFloat(e.target.dataset.skip));
// console.log(video.currentTime); //calcula el tiempo de reproducción del video 
  video.currentTime += parseFloat(e.target.dataset.skip);
}

const handleRangeUpdate = (e) => {
//   console.log(e.target.value);
//   console.log(e.target.name);
//   console.log(video[e.target.name]); 
  video[e.target.name] = e.target.value;  
}

const handleProgress = () => {
  const percent = (video.currentTime/video.duration)*100;
  progressBar.style.flexBasis = `${percent}%`;
}

const scrub = (e) => {
//   console.log(e.offsetX);//UBICA LA CORDENADA
//   console.log(progress.offsetWidth);//TE DA TODA LA LONGITUD
//   console.log(video.duration);//DURCIÓN TOTAL DEL VIDEO
  const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
  video.currentTime = scrubTime;
}

//Conectar con los eventListener

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay); 
skipButtons.forEach(button => button.addEventListener('click', skip)); 
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


// progress.addEventListener('mousemove', scrub);

