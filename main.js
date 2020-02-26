// initialize animations
AOS.init();

// smooth scroll to WORK
function scrollToWork() {
    document.querySelector('#scrollWorkTarget').scrollIntoView({ 
    behavior: 'smooth' 
  });
}
 
// smooth scroll to CONTACT
function scrollToContact() {
    document.querySelector('#scrollContactTarget').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// smooth scroll to HOME
function scrollToHome() {
    document.querySelector('#scrollHomeTarget').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// typewriter effect
const introText = "karan." + "dahiya." + "portfolio." + "welcome.";
var i = 0;
speed = 125;
typewriter();

function typewriter() {
  if(i < introText.length) {
    document.querySelector('.typewriter').innerHTML += introText.charAt(i);
    if(introText.charAt(i) == '.' && i != introText.length - 1)
      document.querySelector('.typewriter').innerHTML += "<br>";
    i++;
    setTimeout(typewriter, speed);
  }
  else 
    document.querySelector('.fa-chevron-down').style.visibility = "visible";
}
