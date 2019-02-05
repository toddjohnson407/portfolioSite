// @toddjohnson - projects page

$('.card').click(function(){
  $(this).toggleClass('flipped');
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var activateProjects = function() {
  // project.className = 'container-animation';
  projects.style = 'display: block; margin-top: 20px';
  projectTitle.style = 'padding-top: 20px';
  projectHead.style = 'margin-bottom: -8vh !important;'
  projectHead.style = 'background-color: black; color: white; padding: 1vh 2vh 1vh 2vh';
  // projectBack.className = 'animation-active';
}

var project = document.getElementById('project-container')
var projects = document.getElementById('projects');
var projectTitle = document.getElementById('projects-title');
var projectHead = document.getElementById('projects-head');
var projectBack = document.getElementById('projects-title-back');

activateProjects();
