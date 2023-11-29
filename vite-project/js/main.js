import '../styles/style.css';
import { characters } from './array';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite???</h1>
`;
//domselecors

const DOMselectors = {
  theme: document.getElementById("theme"),
  fivestar: document.getElementById("fivestar"),
  fourstar: document.getElementById("fourstar"), 
  mondstadt: document.getElementById("mondstadt"),
  liyue: document.getElementById("liyue"),
  inazuma: document.getElementById("inazuma"),
}


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

function remove() {
  document.querySelectorAll('.gallery').forEach((card) => card.remove())
}

const filters = {
  fivestarcharacters: function() {
    DOMselectors.male.addEventListener("click", function() {
      remove()
      const fivestar = character.filter(fivestar => fivestar.rarity === "5 Star")
    }
    )
  }
}
