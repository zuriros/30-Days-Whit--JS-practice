const checkBoxes = document.querySelectorAll('.inbox input[type= "checkbox"]');

let lastCheck;
const handleCheck = (e) => {
//   console.log(e);
//   console.log(e.target);
//   console.log(e.shiftKey);
//   console.log(e.target.checked);
  let inBetween = false;
if (e.shiftKey && e.target.checked) {
    checkBoxes.forEach(checkbox =>{
        // console.log(checkbox);    
      if (checkbox === e.target || checkbox === lastCheck) {
          inBetween = !inBetween;
        //   console.log('soy extrañoo');
          
      }
      console.log(inBetween);
      if (inBetween) {
          checkbox.checked = true;  
      }
    });
}
  lastCheck = e.target
 
}
checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
