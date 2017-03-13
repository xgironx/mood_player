"use strict";

(function(){
  angular
    .module( "moods" )
    .factory( "moodsFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction($resource){
    return $resource("http://localhost:3000/moods/1.json")
  }
}());
