// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  events: {
    'ended': function() {
      // console.log(this.model);
      // console.log(this.model.collection.at(1));
      // console.log(app.songQueue);
      this.model.dequeue();
      this.remove(this.model.collection.at(0));
      this.setSong(this.model.collection.at(0));
    }
  },

  // this.on('ended', function(song) {
  //   this.dequeue();
  //   // this.remove(this.models[0]);
  //   if(this.length > 0) {
  //     this.playFirst();
  //   }
  // });  

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
