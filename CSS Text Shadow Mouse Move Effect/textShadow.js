const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500;

const shadow = (e) => {
//   const width = hero.offsetWidth;
//   const height = hero.offsetHeight;
// otra forma de realizar 
  const {offsetWidth : width, offsetHeight : height} = hero;

  let {offsetX : x, offsetY : y} = e;
  const divHero = this.document.children[0].children[1].children[0];

//   console.log(this.document.children[0].children[1].children[0], e.target);
  if (divHero !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;     
  }

  const xWalk = Math.round((x / width * walk) - (walk/50));
  const yWalk = Math.round((y / width * walk) - (walk/50));

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
  ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
  ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
  ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
  
}

hero.addEventListener('mousemove', shadow);