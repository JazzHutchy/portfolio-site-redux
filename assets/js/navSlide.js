// jQuery: Slide page to section when button on the navbar is clicked
$(document).ready(function () {
  setBindings()
})

function setBindings() {
  $("nav ul li a").click(function (e) {
    e.preventDefault()
    var sectionID = e.currentTarget.id + "Section"
    console.log('working')

    $("html, body").animate({
      scrollTop: $("#" + sectionID).offset().top
    }, 1000)
    console.log(sectionID)
  })
}
