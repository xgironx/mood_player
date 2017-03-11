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
            return {
              happy: ['angry1', 'angry2', 'angry3'],
              sad: ['sad1', 'sad2', 'sad3'],
              angry: ['angry1', 'angry2', 'angry3'],
              hungry: ['hungry1', 'hungry2', 'hungry3'],
              pissed: ['pissed1', 'pissed2', 'pissed3']
            }
        }
    }
  }
}());
