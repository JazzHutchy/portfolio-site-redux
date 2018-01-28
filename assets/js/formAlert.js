// If I create a form to not redirect to formspree
function form_alert() {
  var form = sent
  if (form == true) {
    alert("Form was sent successfully!");
  }
  else {
    alert("Oops, something went wrong!\nPlease try again.");
  }
}