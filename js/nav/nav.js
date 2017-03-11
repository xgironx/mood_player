"use strict";

(function(){
  angular
  .module("nav", [
    "ui-router",
    "ngResource"
  ])
  .config(["$stateProvider"])
  .controller( "NavController", [
    "$state",
    MoodsIndexControllerFunction
  ])
  .controller("Nav", [
    "$state",
    NavFunction
  ])

  function NavFunction($state) {
    this.state = $state
    this.log = function () {
      let state = this.state
      console.log(state.current.url)
    }
  }

}());



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
