import '../styles/style.css';
import { characters } from './array';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite???</h1>
`;

function createCard(card) {
  document.querySelector('#container').insertAdjacentElement(
    `afterbegin`,
    `<div class="gallery">
      <h2>${card.name}</h2> 
      <img src="${card.icon}"alt=""></img>
      <h3>${card.weapon} | ${card.element}</h3>
      <h3>${card.region}</h3>
      <h3>${card.rarity}</h3>
    </div>`
    ) 
}

characters.forEach(el => createCard(el));




//npm install aos --save 