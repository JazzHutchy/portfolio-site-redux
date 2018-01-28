function sentence() {
  var x = "Hey this javascript "
  var y = "works!"
  document.write(x + y)
  return
}

function add() {
  var x = 5
  var y = 9
  var z = x + y + 5

  document.write("<br>" + z + "<br>")
  return
}

function loop() {
  for (x = 1; x <= 8; x++) {
    document.write(" " + x + "loop" + " ")
  }
}

sentence()
add()
loop()