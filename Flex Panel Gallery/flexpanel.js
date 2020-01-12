const panels = document.querySelectorAll('.panels');
const toggleOpen = (e) => {
    console.log('hello');
    e.target.classList.toggle('open');
};
const toggleActive = (e) => {
console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    e.target.classList.toggle('open-active');
  }
};

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));