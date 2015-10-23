// SongQueue.js - Defines a backbone model class for the song queue.

// We believe this is a model, and maybe shouldn't even be in the collection folder.
var SongQueue = Songs.extend({

  initialize: function(){
    
    this.on('add', function() {
      if(this.length === 1) {
        
        this.playFirst();
      } 

    });

    this.on('dequeue', this.dequeue, this);

    // this.on('dequeue', function() {
    //   this.dequeue(this);
    // }, this);

    this.on('ended', this.playNext, this);
  },

  playFirst: function() {
    this.models[0].play();
  },

  // dequeue: function() {
  //   if (this.length > 0) {
  //     this.remove(this.at(0));
  //   }
  // },

  dequeue: function(song) {
    if ( this.at(0) === song ) {
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  playNext: function() {
    // this => the song, not the collection
    this.shift();
    if ( this.length >= 1 ) {   //
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  }

});

  