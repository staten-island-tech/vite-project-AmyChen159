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


function createCard(cards) {
  cards.forEach(card => {
    document.querySelector('#container').insertAdjacentHTML(
      `beforeend`,
      `<div class="gallery">
        <h2 id="charactername">${card.name}</h2> 
        <img id="imageicon" src="${card.icon}"/>
        <h3 class="bottomtext">${card.element} | ${card.weapon}</h3>
        <h3 class="bottomtext">${card.region}</h3>
        <h3 class="bottomtext">${card.rarity}</h3>
      </div>`) 
  })
}

createCard(characters)
//characters.forEach(el => createCard(el));

function remove() {
  document.querySelectorAll('.gallery').forEach((card) => card.remove())
}

/* const filters = {
  fivestarcharacters: function() {
    DOMselectors.fivestar.addEventListener("click", function(event) {
      event.preventDefault()
      remove()
      const fivestars = characters.filter(fivestar => fivestar.rarity.includes("5 Star"))
      createCard(fivestars)
    }
    )
  }
}
*/

let buttons = document.querySelectorAll(".button")
buttons.forEach((button) => button.addEventListener("click",
function() {
  let rarity = button.textContent
  let array = characters.filter((el) => el.rarity.includes(rarity))
  remove()
  createCard(array)
}))


/* 
DOMselectors.fivestar.addEventListener("click", function() {
  remove()
  characters.filter((fivestar) => fivestar.rarity.includes("5 Star").forEach(fivestar => createCard(fivestar)))
})

DOMselectors.fourstar.addEventListener("click", function() {
  remove()
  characters.filter((fourstar) => fourstar.rarity.includes("4 Star").forEach(fourstar => createCard(fourstar)))
}) 
*/
