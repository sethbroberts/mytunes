// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    //this.render()
    // make sure it has the correct context
    // I'm gonna add remove 
    this.collection.on('add remove', function(){
      this.render();
    }, this)
  },


  render: function() {
    // this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
    // return this.$el;
  }

});



