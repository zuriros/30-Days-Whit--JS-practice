//<canvas> se usa para dibujar gráficos, pero solo es un contenedor de gráficos
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');//este método devuelve un objeto que proporciona metodos y prpiedades para dibujar

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0; 
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (e) => {
  if (!isDrawing) return;
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // ctx.lineWidth = hue;

  ctx.beginPath();//comienza una ruta o la restablece
  //empezamos desde las cordenadas de moveTo
  ctx.moveTo(lastX, lastY);// mueve el borde izquierdo y superior; X(horizontal), Y(vertical);
  //nos movemos hasta lineTo
  ctx.lineTo(e.offsetX, e.offsetY);// agrega un nuevo punto y crea una linea
  ctx.stroke();// es el que dibuja
  [lastX, lastY] = [e.offsetX, e.offsetY];
  // lastX = e.offsetX;
  // lastY = e.offsetY;
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  }else{
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);



