const divs = document.querySelectorAll('div');
const button = document.querySelector('button');
const logText = (e) => {    
    // console.log(e.target);  
  console.log(e.target.classList.value);   
};
// document.body.addEventListener('click', logText);
divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));

button.addEventListener('click', () => {
  console.log('click!!!!');
}, {
  once: true
});
