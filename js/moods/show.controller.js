"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsShowController", [
      MoodsShowControllerFunction
    ]);

  function MoodsShowControllerFunction(){

    this.hello = function () {
      console.log('hey there you made it here')
    }
  }
}());
