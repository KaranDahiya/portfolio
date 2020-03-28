// make sure video plays
const video = document.querySelector('video');
if(video.paused)
    video.play();

// toggle email
const emailLink = document.querySelector('.emailLink');
const emailText = document.querySelector('.emailText');
emailLink.addEventListener('click', () => {
    if(emailText.style.display == 'none')
        emailText.style.display = 'block';
    else 
        emailText.style.display = 'none';
});

// show lastname on mobile
const titlename = document.querySelector('#titlename');
if(window.innerWidth < 500) 
    titlename.textContent = 'karan dahiya';

// adjust icon size
const icons = document.querySelectorAll('i');
if(window.innerWidth > 2000) {
    for (icon of icons) {
        const currentClass = icon.getAttribute('class');
        console.log(currentClass);
        icon.setAttribute('class', currentClass + ' fa-lg');
    }
}
    