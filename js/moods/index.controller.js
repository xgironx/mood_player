"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsIndexController", [
      "moodsFactory",
      MoodsIndexControllerFunction
    ]);

  function MoodsIndexControllerFunction(moodsFactory){
    this.data = moodsFactory.query()
    this.hello = function () {
      console.log(this.data)
    }
  }
}());
