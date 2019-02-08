// @toddjohnson - projects page

'use-strict';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var activateProjects = async function() {
  await sleep(1000);

  projects.style = '';
}

var projects = document.getElementById('projects');

// window.onload = function() { activateProjects() };

activateProjects();
