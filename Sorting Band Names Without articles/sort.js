const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const strip = (bandName) => {
  //^n el cuanificador hace coincidir el string digitado solo al inicio de el string.
  //(a|b) representa a cualquiera de las alternativas especificadas.
  // i no hay diferencia entre mayúsculas o minúsculas.
  return bandName.replace(/^(a |the |an )/i, '').trim();//replace('a remplazar', 'remplazo')
  //el metodo trim() elimina los espacios en blanco.
}
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
//otra forma de hacer sortedBands
// const sortedBands = bands.sort((a,b) => {
//   if (strip(a) > strip(b)) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

document.querySelector('#bands').innerHTML = 
  sortedBands
  .map( band => `<li>${band}</li>`)
  .join('');
  
console.log(sortedBands);
