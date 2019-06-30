var newShane = {
  "background-image":'url("IMG-20190308-WA0010.jpg")',
}

var newCarl = {
  "background-image":'url("Carl.jpg")',
}

var newJoshua = {
  "background-image":'url("J.jpg")',
}

var newAireec = {
  "background-image":'url("boltA.jpg")',
}

var jumboDefault ={ "background-image":'url("backgroundRobot.jpg")',
}

// $('#Shane').hover(
// 		function(){'.jumbotron'.fadeIn('fast').css({'background-size' : '1100px 195px', 'background-repeat':'no-repeat'})},
// 		function(){$('.jumbotron').fadeOut().css(jumboDefault)}

$("#Shane").hover(function(){
  $(".jumbotron").css(newShane).css({'background-size' : '1100px 195px', 'background-repeat':'no-repeat'});
})
$("#Shane").mouseout(function(){
  $(".jumbotron").css(jumboDefault);
})

$("#Carl").hover(function(){
  $(".jumbotron").css(newCarl).css({'background-size' : '1100px 195px', 'background-repeat':'no-repeat'});
})
$("#Carl").mouseout(function(){
  $(".jumbotron").css(jumboDefault);
})

$("#Joshua").hover(function(){
  $(".jumbotron").css(newJoshua).css({'background-size' : '1100px 220px', 'background-repeat':'no-repeat'});
})
$("#Joshua").mouseout(function(){
  $(".jumbotron").css(jumboDefault);
})

$("#Aireec").hover(function(){
  $(".jumbotron").css(newAireec).css({'background-size' : '1100px 195px', 'background-repeat':'no-repeat'});
})
$("#Aireec").mouseout(function(){
  $(".jumbotron").css(jumboDefault);
})
