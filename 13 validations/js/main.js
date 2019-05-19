var Song = Backbone.Model.extend({
  validate: function (attrs) {
    if (!attrs.title) {
      return "Title is required";
    }
  }
})

var song1 = new Song();
console.log('song1: ', song1);



//1.1-2 
// var Song = Backbone.Model.extend({
//   // defaults: {
//   //   genre: 'Jazz'
//   // }
//   // initialize: function () {
//   //   console.log('A new song created ... ')
//   defaults: {
//     genre: 'Punk'
//   }
//   // }
// });

// var song1 = new Song();

// song1.set("title", "Blue In Green")
// song1.set({
//   year: 1959,
//   artist: "Miles Davis",
//   company: "Blue Note Records"
// })

// var song2 = new Song();

// song2.set("title", "All Blues")
// song2.set({
//   year: 1959,
//   artist: "Miles Davis",
//   company: "Blue Note Records"
// })
