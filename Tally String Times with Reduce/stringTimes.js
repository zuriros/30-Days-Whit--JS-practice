// const timeNodes = document.querySelectorAll('[data-time]'
// el nodeList es estático y no se puede iterar con map y forEach
// para eso necesitamos de un spread operator o un Array.from
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map( node => node.dataset.time)
  .map(timeCode => {    
     const [mins, secs] = timeCode.split(':').map(parseFloat);//usamos el parseFloat para convertir a numeral
     return (mins * 60) + secs;//convirtiendo todo a segundos 
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

  let secondsLeft = seconds
  
  // convirtiendo el total de segundos a horas 
  const hours = Math.floor(seconds / 3600);
  secondsLeft = secondsLeft % 3600;
  //convirtiendo el residuo a minutos
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 3600;//estos son los segundos del total
  
  console.log(hours, mins, secondsLeft);
  