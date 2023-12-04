import '../styles/style.css';
import { characters } from './array';
import { DOMselectors } from './dom';

/* document.querySelector('#app').innerHTML = `
  <h1>Hello Vite???</h1>
`; */

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

let buttons = document.querySelectorAll(".button")
buttons.forEach((button) => button.addEventListener("click",
function() {
  let rarity = button.textContent
  let array = characters.filter((el) => el.rarity.includes(rarity))
  remove()
  createCard(array)
}))

let buttons2 = document.querySelectorAll(".secondbutton")
buttons2.forEach((button) => button.addEventListener("click",
function() {
  let from = button.textContent
  let array2 = characters.filter((el) => el.region.includes(from))
  remove()
  createCard(array2)
}))

DOMselectors.theme.addEventListener("click", function() {
  if (document.body.classList.contains("blue")) {
    document.body.classList.add("beige")
    document.body.classList.remove("blue")
  }
  else {
    document.body.classList.add("blue")
    document.body.classList.remove("beige")
  } 
})

/* 
const filters = {
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

DOMselectors.fourstar.addEventListener("click", function() {
  remove()
  characters.filter((fourstar) => fourstar.rarity.includes("4 Star").forEach(fourstar => createCard(fourstar)))
}) 

DOMselectors.mondstadt.addEventListener("click", function() {
  remove()
  characters.filter((mondstadt) => mondstadt.region.includes("Mondstadt").forEach(mondstadt => createCard(mondstadt)))
})

DOMselectors.liyue.addEventListener("click", function() {
  remove()
  characters.filter((liyue) => liyue.region.includes("Liyue").forEach(liyue => createCard(liyue)))
})

DOMselectors.inazuma.addEventListener("click", function() {
  remove()
  characters.filter((inazuma) => inazuma.region.includes("Inazuma").forEach(inazuma => createCard(inazuma)))
})
*/
