// @toddjohnson - home page


var homeInfo = document.getElementById('brief');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var hideHomeInfo = function() {
  homeInfo.style = 'display: none';
}

var activateAnimation = async function() {
  await sleep(300);
  develop.setAttribute("class", "dev dev-animation");
  await sleep(300);
  if (window.safari != undefined) {
    // homeInfo.style = 'display: block; margin-top: -28.75vw;';
    homeInfo.style = 'display: block;';
  } else {
    homeInfo.style = 'display: block;';
  }

}

var develop = document.getElementById('dev');

// develop.onmouseout = function() { hideHomeInfo() };
activateAnimation();
