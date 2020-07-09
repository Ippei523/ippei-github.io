$(function() {
  $("a").click(function() {
    var target = $($(this).attr("href")).offset().top;

    target -= 70;

    $("html, body").animate({scrollTop: target}, 500);
  });

  var current = 1;
  var next = 2;
  var count = $(".skill__ability").length;
  
  $("#nextBtn").click(function() {
    $(".skill__ability:nth-child(" + current + ")").hide();
    $(".skill__ability:nth-child(" + next + ")").show();
    
    current = next;
    next = next++;
    if(next > count) {
      next = 1;
    }
  })
})
