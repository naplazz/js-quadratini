//questa funzione genera numeri random e aggiunge una classe alla griglia

  var randomNumber = [];
  while (randomNumber.length < 15 ) {
    var n = Math.floor(Math.random()*64) + 1;
    if (randomNumber.includes(n) == false) {
        randomNumber.push(n);
    }
  }
console.log(randomNumber)


$(".quadrato").each(function(index, element){
  if (randomNumber.includes(index)) {
    $(this).addClass("pippo");

  }

});

$(".quadrato").click(function(){
    if ($(this).hasClass("pippo")){
      $(this).addClass("red");
      $('#redCount span').text(parseInt($('#redCount span').text()) + 1 );
    } else {
      $(this).addClass("green");
      $('#greenCount span').text(parseInt($('#greenCount span').text()) + 1 );
    }

});
