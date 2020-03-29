// initialize animations
AOS.init();

// smooth scroll to PROJECTS
function scrollToProjects() {
    document.querySelector('#projects').scrollIntoView({ 
    behavior: 'smooth' 
  });
}
 
// smooth scroll to ABOUT
function scrollToAbout() {
    document.querySelector('#about').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// smooth scroll to LANDING
function scrollToLanding() {
    document.querySelector('#landing').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// typewriter effect
const introText = "engineering." + "development." + "design.";
var i = 0;
speed = 45;
setTimeout(typewriter, 1000);

function typewriter() {
  if(i < introText.length) {
    document.querySelector('.typewriter').innerHTML += introText.charAt(i);
    if(introText.charAt(i) == '.' && i != introText.length - 1)
      document.querySelector('.typewriter').innerHTML += "<br>";
    i++;
    setTimeout(typewriter, speed);
  }
}
