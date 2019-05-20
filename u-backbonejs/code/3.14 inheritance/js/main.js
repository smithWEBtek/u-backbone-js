// ex 1
// var Animal = Backbone.Model.extend({
//   initialize: function () {
//     console.log('A new animal was created ... ')
//   },
//   walkAnimal: function () {
//     console.log("We are walking the: ", this.attributes.type)
//   },
//   defaults: {
//     species: 'animal'
//   }
// })

// ex 2
var Animal = Backbone.Model.extend({
  initialize: function () {
    console.log('A new animal was created ... ')
  },
  walkAnimal: function () {
    console.log("We are walking the: ", this.attributes.type)
  },
  defaults: {
    species: 'animal'
  }
})

Animal.prototype.animalCard = () => {
  return (`
    <div class='animal-card'>  
      <h3>We are walking ${cat.attributes.name} the ${cat.attributes.type}, who is a member of the ${cat.attributes.species} species.</h3>\
    </div>
  `)
}

var cat = new Animal();
cat.set("name", "Felix")
cat.set("type", "cat")
cat.walkAnimal()

let mainDiv = document.getElementById('main')

let buttonDiv = document.createElement('button')
buttonDiv.classList.add('show-animal')
buttonDiv.innerText = 'Show animal'
mainDiv.appendChild(buttonDiv)

buttonDiv.addEventListener('click', (e) => {
  e.preventDefault();
  mainDiv.innerHTML = cat.animalCard();
})
