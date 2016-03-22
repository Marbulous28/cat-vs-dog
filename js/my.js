$(document).ready(function() {
  $("button.noises").click(function() {
    $("ul.cat").append("<li>meow</li>");
    $("ul.dog").append("<li>woof!</li>");
  });

  $("button.tummytime").click(function() {
    $("ul.cat").append("<li>Meow!!! tummy time!");
    $("ul.dog").append("<li>Woof Woof Let's go for a walk! ok! tummy time!");
  });

  $("button.bathtime").click(function() {
    $("ul.cat").append("<li>not bath time!!!!");
    $("ul.dog").append("<li>Yay water! bath time!!!! Then tummy time again! then woof!");
  });

  $("button.changecolor").click(function() {
    $("body").removeClass();
    $("body").addClass("changecolor");
  });

  $("button.changeback").click(function() {
    $("body").removeClass();
    $("body").addClass("changeback");
  });

});
