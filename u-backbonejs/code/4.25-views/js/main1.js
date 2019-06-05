
var SongView = Backbone.View.extend({
  render: function () {
    this.$el.html("Hello Whirled");
    listenForButtonClicks();
    return this;
  },
  goBlue: function () {
    this.$el.css("background-color", "lightblue");
    this.$el.text("light blue");
    return this;
  },
  goGreen: function () {
    this.$el.css("background-color", "lightgreen")
    this.$el.text("light green");
    return this;
  }
})

// var songView = new SongView({
//   el: "#container"
// });

var songView = new SongView();
$("#container").html(songView.$el)

songView.render();

function listenForButtonClicks() {
  $('button#green-button').on('click', function (event) {
    event.preventDefault()
    songView.goGreen()
  })
  $('button#blue-button').on('click', function (event) {
    event.preventDefault()
    songView.goBlue()
  })
}
console.log('songView', songView);
