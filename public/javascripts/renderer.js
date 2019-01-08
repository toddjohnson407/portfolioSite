var animateGo = document.getElementById("animate");
var helloName = document.getElementById("main");
var visible = false;

var unVeil = function () {
  animateGo.style.display = 'block';
  visible = true;
}

var thisAnimation = function () {
  var right = true;
  var anim = document.getElementById("animate");
  var pos = 48;
  if (visible) {
    var id = setInterval(function() {frame()}, 12);
  }
  var frame = function() {
    if (pos == 100) {
      right = false;
    }
    if (pos == 0 && right == false) {
      right = true;
    }
    if (right == false) {
      pos--;
      anim.style.left = pos + '%';
      anim.style.opacity = pos/100;
    } else {
      pos++;
      anim.style.left = pos + '%';
      anim.style.opacity = pos/100;
    }
  }
}

animateGo.onclick = function() { thisAnimation() };
helloName.onmouseover = function() { unVeil() };
