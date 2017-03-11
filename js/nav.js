"use strict";

(function(){
  angular
  .module("mood_player")
  .controller("Nav", [
    "$state",
    NavFunction
  ])

  function NavFunction($state) {
    this.update = function () {
      let state = $state
      this.state = state
    }
    this.update();
  }

}());
