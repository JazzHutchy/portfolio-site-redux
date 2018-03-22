// jQuery: Slide page to section when button on the navbar is clicked
$(document).ready(function() {
  $("#slide-to").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#test").offset().top
      },
      2000
    )
  })
})
