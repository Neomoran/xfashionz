//Responsive navbar
$(function() {
  menu = $("nav ul");
  $("#openUp").on("click", function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });
  $("nav li").on("click", function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $(".openMenu").height($(window).height());
});

//smooth scrolling
$(".close a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});
