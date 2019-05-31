
var SongView = Backbone.View.extend({
  render: function () {
    this.$el.html("Hellow WOrld");
    listenForYellowButton();
    return this;
  },
  turnBlue: function () {
    this.$el.addClass("go-blue");
    return this;
  },
  turnYellow: function () {
    this.$el.addClass("go-yellow")
    return this;
  }
})

var songView = new SongView({
  el: "#container"
});

songView.render();
songView.turnBlue();

function listenForYellowButton() {
  $('button#yellow-button').on('click', function (event) {
    event.preventDefault()
    songView.turnYellow()
  })
}
