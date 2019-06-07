var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
  model: Song
});

var SongView = Backbone.View.extend({

  tagName: "li",

  render: function () {
    this.$el.html(this.model.get("title"));

    return this;
  }
});

var SongsView = Backbone.View.extend({

  tagName: "ul",

  initialize: function () {
    // listen for collection events and call a named function based on the type of event
    // an "add" event was added to the collection
    this.model.on('add', this.onSongAdded, this);
    this.model.on('click', this.onSongRemoved, this);
  },

  // namedFunction: function(){
  onSongAdded: function (thisSong) {
    // do the thing needed based on the collection event that we heard
    // update collection based on event, for example
    console.log('song added ...');
    // this.render();
    var songView = new SongView({ model: thisSong });
    this.$el.append(songView.render().$el);
  },

  onSongRemoved: function (song) {

    console.log('song removed ...');
    songs.remove(song);

    // this.render();
    // var songView = new SongView({ model: thisSong });
    // this.$el.append(songView.render().$el);
  },

  render: function () {
    var self = this;

    this.model.each(function (song) {
      var songView = new SongView({ model: song });
      self.$el.append(songView.render().$el);
    });
  }
});

var songs = new Songs([
  new Song({ title: "Blue in Green" }),
  new Song({ title: "So What" }),
  new Song({ title: "Freddie Freeloader" }),
  new Song({ title: "All Blues" })
]);

var songsView = new SongsView({ el: "#container", model: songs });

songsView.render();
