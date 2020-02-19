    // 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
const trigers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

const highlightLink = (e) => {
  const linkCoords = e.target.getBoundingClientRect();
  console.log(linkCoords);
  
  const coords = {
    height:linkCoords.height,
    width:linkCoords.width,
    top:linkCoords.top + window.scrollY,
    left:linkCoords.left + window.scrollX
  }

  highlight.style.height =`${coords.height}px`;
  highlight.style.width = `${coords.width}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}

trigers.forEach(a => a.addEventListener('mouseenter', highlightLink));

