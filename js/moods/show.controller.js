"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsShowController", [
      "$stateParams",
      "moodsFactory",
      MoodsShowControllerFunction
    ]);

  function MoodsShowControllerFunction($stateParams, moodsFactory){
    this.moods = moodsFactory.query()
    this.getmood = function () {
      let param = $stateParams
      console.log(param);
      // this.mood = this.moods.reduce(function(total, currentValue){
      //   if currentValue == param.id {
      //     return total.push(currentValue)
      //   }
      //   else {
      //     return total
      //   }
      // },[])
    }
    this.getmood;
    // this.log = function () {
    //   console.log(this.mood)
    // }
    // this.log();

  }
}());
