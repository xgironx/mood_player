"use strict";

(function(){
  angular
    .module( "moods" )
    .factory( "moodsFactory", [
      FactoryFunction
    ])

  function FactoryFunction(){
    return {
        query: function() {
            return [
              {name: "angry", songs: ['angry1', 'angry2', 'angry3']},
              {name: "sad", songs: ['sad1', 'sad2', 'sad3']},
              {name: "happy", songs: ['happy1', 'happy2', 'happy3']},
              {name: "hungry", songs: ['hungry1', 'hungry2', 'hungry3']},
              {name: "irritated", songs: ['irritated1', 'irritated2', 'irritated3']}
            ]
        }
    }
  }
}());
