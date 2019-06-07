var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
  events: {
    "click": "onClick",
    "click .serial": "onClickSerial"
  },

  onClick: function () {
    console.log('Listen was clicked!');
  },

  onClickSerial: function (e) {
    e.stopPropagation();
    console.log("math: ", Math.floor(Math.random() * 100))
    // this.model.attributes.serial = Math.floor(Math.random() * 100)

    song.attributes.serial = Math.floor(Math.random() * 100)
    song.attributes.log.push(song.attributes.serial)
    this.render();
  },

  render: function () {
    // this.$el.html(this.model.get("title") + `${Math.random() * 100}<button>Listen</button> <button>Listen2</button>`);
    // this.$el.html('asdf');
    this.$el.html(this.model.get("title") + (`
      <div>
        <button>Listen</button><h3 class="serial">${this.model.get("serial")}</h3>
        <h5>Current log: ${this.model.get("log")}</h5>
      </div>
        `));
    return this;
  }
});

var song = new Song({
  title: "Blue in Green",
  serial: 0,
  log: []
});

var songView = new SongView({ el: "#container", model: song });

songView.render();
