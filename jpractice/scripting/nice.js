
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.square(50, 50, 50, 50);
ctx.stroke();


function change() {
  document.images[0].src="pizzapics/gfd.gif"
}

function change2() {
  document.images[0].src="pizzapics/pizza.gif"
}

function changeStatus(){
  var curMessage ="good";
  function changeMessage(){
    if (curMessage == "good2"){
      document.images[0].src="pizzapics/pizza.gif"
    }
  }
}
$(document).ready(function(){
$("p").click(function(){
    $(this).hide();
});
});
