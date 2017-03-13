// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
// https://api.spotify.com/v1/search?q=middle&type=track&artist=DJ%20Snake

$(document).ready(() => {

  $(".get").on("click", () => {
    console.log(" GET Worked");
    let artist = $(".artist").val();
    let track = $(".track").val();

    let url =  "https://api.spotify.com/v1/search?q="+track+"&type=track&artist="+artist;


    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url
    }).done((response) => {
      // console.log(response);


      //need to validate
      console.log(response.tracks.items[0].uri);

      $("#here").append(response);
    }).fail((response)=> {
      console.log("ajax get failed");
    });

  }); //end of get


});//end document ready