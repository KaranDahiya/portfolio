// initialize on scroll animations
AOS.init();

// adjust icon size
const icons = document.querySelectorAll('i');
if(window.innerWidth > 2000) {
    for (icon of icons) {
        const currentClass = icon.getAttribute('class');
        console.log(currentClass);
        icon.setAttribute('class', currentClass + ' fa-lg');
    }
}

// toggle email
const emailLink = document.querySelector('.emailLink');
const emailText = document.querySelector('.emailText');
emailLink.addEventListener('click', () => {
    if(emailText.style.display == 'none')
        emailText.style.display = 'block';
    else 
        emailText.style.display = 'none';
});

// typewriter effect
const cards = document.querySelectorAll('.card');
const introText = "./projects";
var i = 0;
speed = 125;
setTimeout(typewriter, 1000);

function typewriter() {
  if(i < introText.length) {
    document.querySelector('.typewriter').innerHTML += introText.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  } else {
      document.querySelector('.fa-angle-double-down').style.visibility = 'visible';
      for(card of cards)
        card.style.visibility = 'visible';
  }
}

// smooth scroll to WORK
function scrollToWork() {
    document.querySelector('#scrollWorkTarget').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// smooth scroll to CONTACT
function scrollToContact() {
    document.querySelector('.contact').scrollIntoView({ 
    behavior: 'smooth' 
  });
}