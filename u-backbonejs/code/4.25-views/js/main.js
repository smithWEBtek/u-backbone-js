var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
  tagName: "li",

  render: function () {
    this.$el.html(this.model.get("title"));
    return this;
  }
});

var Songs = Backbone.Collection.extend({
  model: Song
})

var SongsView = Backbone.View.extend({
  render: function () {
    var self = this;
    this.model.each(function (song) {
      var songView = new SongView({ model: song });
      self.$el.append(songView.render().$el);
    })
  }
})


var song = new Song({ title: "Blue in Green" });
var songView = new SongView({ el: "#container", model: song });
songView.render();


var songs = new Songs([
  new Song({ title: "The Alley Cat" }),
  new Song({ title: "Tuxedo Junction" }),
  new Song({ title: "Blue Skies" })
])

var songsView = new SongsView({ el: "#songs", model: songs });
songsView.render();
