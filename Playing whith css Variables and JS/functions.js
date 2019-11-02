const inputs = document.querySelectorAll('.controls input');

const handleUpdate = (e) => {
  let suffix = e.target.dataset.sizing || '';  
  document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);    
}
// console.log(this.getAttribute('value'));

inputs.forEach((input) => {
  input.addEventListener('change', handleUpdate);
});
inputs.forEach((input) => {
    input.addEventListener('mousemove', handleUpdate);
  });