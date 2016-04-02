$(function(){

    var gifGif = "";
    var disGif = {};
    var showGif = "";

  $("#gifButton").on("click", function(){
    $('section').toggle('slow');
      getItOnThere();
  })

  function getDaGif(){
    $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=goat').done(function(response){
      console.log(response);
      disGif = response;
      showGif = disGif.data.image_url;
      gifGif = "<img src=\"showGif\">";

    })
  };
  function getItOnThere(){
    $("#postItHere").append("<p> just gif it" + getDaGif());
  }
});
