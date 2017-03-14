"use strict";

(function(){
  angular
    .module( "moods" )
    .factory( "moodsFactory", [
      "$resource",                //dependency for ng to make the http call, returns answer in json
      FactoryFunction
    ])

  function FactoryFunction($resource){
    console.log("WE ARE IN moods.factory.FactoryFunction....");
    console.log("Returning resource here...");
    // var localMoods = $resource("http://localHost:3000/moods/1.json");
    // return $resource("http://localhost:3000/moods")
    return $resource("http://localhost:3000/moods/1.json")
    // return $resource("https://embed.spotify.com/embed?uri=spotify:artist:08td7MxkoHQkXnWAYD8d6Q")
  }
}());
