
const playSound = (e) => {        
  const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key = '${e.keyCode}']`);
  //si el audio es null, paramos el recorrido de la función
  if (!audio) return;
  //si el audio existe, reproducimos el sonido con un tiempo de cero para que sea al instante
  audio.currentTime = 0;
  audio.play();
  //agregamos un cambio de estilos cada vez que precionemos alguna tecla. 
  key.classList.add('playing'); 
}

//creamos una función para remover el estilo agregado por presionar alguna tecla existente
const removeTransition = (e) => {
  // agregamos la condicional donde nos aseguramos que el evento sea de transform
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing'); 
  console.log(e.target.classList);
};
//Llamamos a todo los elementos de clase key
const keys = document.querySelectorAll('.key');
//recorremos cada clase
keys.forEach((key) => {
  //al escuchar el evento de transición aplicamos la función de remover estilos
  key.addEventListener('transitionend', removeTransition)
});

window.addEventListener('keydown', playSound);


