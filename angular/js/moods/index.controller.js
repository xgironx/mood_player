"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsIndexController", [
      "moodsFactory",
      MoodsIndexControllerFunction
    ]);

  function MoodsIndexControllerFunction(moodsFactory){
    console.log("WE ARE IN moodsIndexControllerFunction....");  // THIS SHOWS UP
    // this.mood = moodsFactory.query( function() {
      this.mood = moodsFactory.get( function() {
      console.log("In callback....");
      // console.log(this.mood);
    })
    console.log("Have a mood");   // RETURNS property undefined
    //console.log(this.mood[0]);    // RETURNED Undefined


  }
}());
