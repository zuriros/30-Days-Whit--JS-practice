const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
 // calculamos los grados que a de desplazarse secondHand
  const secondsDegrees = ((seconds/60) * 360) + 90;// se agrega 90 para que sea el punto de inicio  
// se agrega a estilos los grados a desplazarse por cada segundo
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
   
   
  const mins = now.getMinutes();
  // calculamos los grados que a de desplazarse mindHand
  const minsDegrees = ((mins/60) * 360) + 90;
  // se agrega a estilos los grados a desplazarse por cada minuto
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();  
  // calculamos los grados que a de desplazarse hourHand
  const hoursDegrees = ((hours/12) * 360) + 90;
  // se agrega a estilos los grados a desplazarse por cada hora
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

};

setInterval(setDate, 1000);

  