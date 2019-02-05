// @toddjohnson - home page

var homeInfo = document.getElementById('brief');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var hideHomeInfo = function() {
  homeInfo.style = 'display: none';
}

var activateAnimation = async function() {
  await sleep(200);
  develop.setAttribute("class", "dev dev-animation");
  homeInfo.style = 'display: block';
}

var develop = document.getElementById('dev');

// develop.onmouseout = function() { hideHomeInfo() };
activateAnimation();
