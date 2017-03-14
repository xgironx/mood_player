"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsWelcomeController", [
      MoodsWelcomeControllerFunction
    ]);

  function MoodsWelcomeControllerFunction(){

    console.log("we are in the welcome controller");
  //  this.hello = function () {
    //  console.log('hey there you made it here')
  //  }
  }
}());
