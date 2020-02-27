let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

const timer = (seconds) => {
  clearInterval(countDown);

  const now = Date.now();// te da la feche desde el 1 e enero 1970 en milisegundos
  const then = now + seconds * 1000;//convierto el parametro a milisegundos para poder connseguir un número mayor  
  displayTimeLeft(seconds);
  displayEndTime(then);

  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);//obtengo los segundos regresivos  
    if (secondsLeft <= 0) {
        clearInterval(countDown);
      return;
    }
    displayTimeLeft(secondsLeft);
}, 1000);
}

const displayTimeLeft = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds %  60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
    // console.log(reminderSeconds);
}

const displayEndTime = (timestamp) => {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
  }

const startTimer = (e) => {
    const seconds = parseInt(e.target.dataset.time);
    timer(seconds);
  }

  buttons.forEach(button => button.addEventListener('click', startTimer));
  document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = e.target.minutes.value;
    console.log(mins);
    timer(mins * 60);
    e.target.reset();
  });
