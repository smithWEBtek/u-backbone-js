var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
  model: Song
});

var SongCategory = Backbone.Collection.extend({
  model: Song
})

var songsCollection1 = new Songs([
  new Song({ title: "Song 1.1" }),
  new Song({ title: "Song 1.2" }),
  new Song({ title: "Song 1.3" }),
  new Song({ title: "Song 1.4" }),
  new Song({ title: "Song 1.5" }),
  new Song({ title: "Song 1.6" }),
  new Song({ title: "Song 1.7" }),
]);

var songsCollection2 = new Songs([
  new Song({ title: "Song 2.1", genre: "jazz" }),
  new Song({ title: "Song 2.2", genre: "salsa" }),
  new Song({ title: "Song 2.3", genre: "jazz" }),
  new Song({ title: "Song 2.4", genre: "pop" }),
  new Song({ title: "Song 2.5", genre: "pop" }),
  new Song({ title: "Song 2.6", genre: "funk" }),
  new Song({ title: "Song 2.7", genre: "disco" }),
]);

var jazzSongs = songsCollection2.filter(function (song) {
  return song.get("genre") == "jazz"
})

var salsaSongs = songsCollection2.filter(function (song) {
  return song.get("genre") == "salsa"
})

var popSongs = songsCollection2.filter(function (song) {
  return song.get("genre") == "pop"
})


var categories = new SongCategory([
]);
categories.add(jazzSongs)
categories.add(salsaSongs)
categories.add(popSongs)
