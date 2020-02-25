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