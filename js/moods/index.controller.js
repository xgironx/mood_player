"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsIndexController", [
      "moodsFactory",
      MoodsIndexControllerFunction
    ]);

  function MoodsIndexControllerFunction(moodsFactory){
    this.moods = moodsFactory.query()
  }
}());
