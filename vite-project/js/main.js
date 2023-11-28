import '../styles/style.css';
import { characters } from './array';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite???</h1>
`;

function createCard(card) {
  document.querySelector('#container').insertAdjacentHTML(
    `afterbegin`,
    `<div class="gallery">
      <h2 id="">${card.name}</h2> 
      <img src="${card.icon}"/>
      <h3>${card.element} | ${card.weapon}</h3>
      <h3>${card.region}</h3>
      <h3>${card.rarity}</h3>
    </div>`
    ) 
}

characters.forEach(el => createCard(el));




//npm install aos --save 