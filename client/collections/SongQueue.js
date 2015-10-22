// SongQueue.js - Defines a backbone model class for the song queue.

// We believe this is a model, and maybe shouldn't even be in the collection folder.
var SongQueue = Songs.extend({

  initialize: function(){
    
    this.on('add', function() {
      if(this.length === 1) {
        //console.log('first song in queue, start playing');
        this.playFirst();
      } else {
        //console.log('another song added, do not start playing');
      }
    });

    this.on('ended', function(song) {
      this.dequeue();
      // this.remove(this.models[0]);
      if(this.length > 0) {
        this.playFirst();
      }
    });

    // this was important
    this.on('dequeue', function() {
      this.dequeue();
      // if (this.length > 0) {
      //   this.remove(this.models[0]);
      // }
    });

  },

  playFirst: function() {
    this.models[0].play();
  },

  dequeue: function() {
    if (this.length > 0) {
      this.remove(this.models[0]);
    }
  }

});

  /*

  //Note that Backbone.Events is mixed into the Backbone object. 
  //Since Backbone is globally visible, it can be used as a simple event bus:

  Backbone.on('event', function() {console.log('Handled Backbone event');});
  Backbone.trigger('event'); // logs: Handled Backbone event

  //As collections represent a group of items, we can listen for add and remove 
  //events which occur when models are added to or removed from a collection. 
  //Here’s an example:

  var TodosCollection = new Backbone.Collection();

  TodosCollection.on("add", function(todo) {
    console.log("I should " + todo.get("title") + ". Have I done it before? "  + (todo.get("completed") ? 'Yeah!': 'No.' ));
  });

  TodosCollection.add([
    { title: 'go to Jamaica', completed: false },
    { title: 'go to China', completed: false },
    { title: 'go to Disneyland', completed: true }
  ]);

  //In addition, we’re also able to bind to a 
  //change event to listen for changes to any of the models in the collection.

  // log a message if a model in the collection changes
  TodosCollection.on("change:title", function(model) {
      console.log("Changed my mind! I should " + model.get('title'));
  });

  TodosCollection.add([
    { title: 'go to Jamaica.', completed: false, id: 3 },
  ]);

  var myTodo = TodosCollection.get(3);

  myTodo.set('title', 'go fishing');
  // Logs: Changed my mind! I should go fishing





  */  

  // events: {
  //   'change': function() {
  //     if(!isPlaying) {
  //       this.playFirst();
  //       this.isPlaying = true;
  //     }
  //   }
  // },

  // params.library.on('play', function(song){
  //     this.set('currentSong', song);
  //   }, this);


