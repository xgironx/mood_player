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
            return [1, 2, 3];
        }
    }
  }
}());
