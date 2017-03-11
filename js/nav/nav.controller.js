"use strict";

(function(){
  angular
    .module( "nav" )
    .controller( "NavController", [
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
