const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', (e) =>{
  console.log(e.key, 'what happend');
  pressed.push(e.key);
//   console.log(pressed, 'uno');
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
//   console.log(pressed, 'dos');
  if (pressed.join('').includes(secretCode)) {
      console.log('DING DING');
      cornify_add();
  }
  console.log(pressed);
  
});