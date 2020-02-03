const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
//necesito que los items no sean strings por ello usaremos a JSON.parse();
const items = JSON.parse(localStorage.getItem('items')) || [];

// JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
const addItem = (e) => {
  e.preventDefault();
  const text = (e.target.querySelector('[name=item]')).value;  
  const item = {
    text,
    done: false
  }   
  items.push(item);
  populateList(items, itemsList);
  //Agregamos los items a localStorage y lo convertimos a JSON
  localStorage.setItem('items', JSON.stringify(items));
  e.target.reset();
}

const populateList = (plates = [], platesList) => {    
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type = "checkbox" data-index = ${i} id = "item${i}" ${plate.done ? 'checked' : ''} />
        <label for = 'item${i}'>${plate.text}</label>
      </li>   
    `;
  }).join(''); 
};

const toggleDone = (e) => {
  console.log(e.target);
  //la condicional al ser falsa ejecutará solo los inputs.
  if (!e.target.matches('input')) return; // skip this unless it's an input
  //en caso seas un input.
  const el = e.target;//normalmente retornarías como un label y un input.
  const index = el.dataset.index;//retorna el indice del input según su orden.
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
  
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
// por ultimo llamamos a esta función para que al actualizar los datos sigan en la pantalla
populateList(items, itemsList);
             
// ------------------------------------------

// const addItems = document.querySelector('.add-items');
//   const itemsList = document.querySelector('.plates');
//   const items = JSON.parse(localStorage.getItem('items')) || [];

//   const addItem = (e) => {
//     e.preventDefault();
//     const text = (this.querySelector('[name=item]')).value;
//     const item = {
//       text,
//       done: false
//     };

//     items.push(item);
//     populateList(items, itemsList);
//     localStorage.setItem('items', JSON.stringify(items));
//     this.reset();
//   }

//   const populateList = (plates = [], platesList) => {
//     platesList.innerHTML = plates.map((plate, i) => {
//       return `
//         <li>
//           <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
//           <label for="item${i}">${plate.text}</label>
//         </li>
//       `;
//     }).join('');
//   }

//   const toggleDone = (e) => {
//     if (!e.target.matches('input')) return; // skip this unless it's an input
//     const el = e.target;
//     const index = el.dataset.index;
//     items[index].done = !items[index].done;
//     localStorage.setItem('items', JSON.stringify(items));
//     populateList(items, itemsList);
//   }

//   addItems.addEventListener('submit', addItem);
//   itemsList.addEventListener('click', toggleDone);

//   populateList(items, itemsList);