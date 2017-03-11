"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsNewController", [
      MoodsNewControllerFunction
    ]);

  function MoodsNewControllerFunction(){

    this.hello = function () {
      console.log('hey there you made it here')
    }
  }
}());
