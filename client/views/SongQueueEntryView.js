// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  // has an event listener and this plays the next song in the queue

  events: {
    'change': function() {
      this.model.play();
    }
  }

});
