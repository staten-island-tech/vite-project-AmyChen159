import '../styles/style.css';
import { characters } from './array';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite???</h1>
`;

function createCard(card) {
  document.querySelector('#container').insertAdjacentHTML(
    `beforeend`,
    `<div class="gallery">
      <h2 id="charactername">${card.name}</h2> 
      <img id="imageicon" src="${card.icon}"/>
      <h3 class="bottomtext">${card.element} | ${card.weapon}</h3>
      <h3 class="bottomtext">${card.region}</h3>
      <h3 class="bottomtext">${card.rarity}</h3>
    </div>`
    ) 
}

characters.forEach(el => createCard(el));




//npm install aos --save 