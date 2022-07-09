$(".No").click(function (){
  $(".No").removeClass("pushed");
  var current=$(this);
  current.addClass("pushed");
  var value=current.text();
   $(".thank-p").text("You selected "+value+" out of 5");
});

$("input").click(function()
{
  $(".rating").addClass("visibilty");
  $(".ThankYou").removeClass("visibilty");
})
