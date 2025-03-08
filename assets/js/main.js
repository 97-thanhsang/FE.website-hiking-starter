// select header
const header = document.querySelector('.header');
// select nav
const nav = document.querySelector('.nav');
// select nav trigger
const navTrigger = document.querySelector('.header__nav-trigger');

// select form
const btnSubscribe = document.getElementById('btnSubscribe');


// Add event listener to subscribe button
btnSubscribe.addEventListener('click', function(e) {
  e.preventDefault();
  
  // Create confirmation popup
  const popupContainer = createConfirmationPopup('Do you want to subscribe to our newsletter?');
  
  // Get the buttons from the popup
  const yesButton = popupContainer.querySelector('.btn.btn--primary');
  const noButton = popupContainer.querySelector('.btn:not(.btn--primary)');
  
  // Add event listeners to buttons
  yesButton.addEventListener('click', function() {
    alert('Thank you for subscribing!');
    document.body.removeChild(popupContainer);
  });
  
  noButton.addEventListener('click', function() {
    document.body.removeChild(popupContainer);
  });
  
  // Add popup to body
  document.body.appendChild(popupContainer);
});

// Function to create a confirmation popup
function createConfirmationPopup(message) {
  // Create popup container
  const popupContainer = document.createElement('div');
  popupContainer.className = 'popup-container';
  popupContainer.style.position = 'fixed';
  popupContainer.style.top = '0';
  popupContainer.style.left = '0';
  popupContainer.style.width = '100%';
  popupContainer.style.height = '100%';
  popupContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  popupContainer.style.display = 'flex';
  popupContainer.style.justifyContent = 'center';
  popupContainer.style.alignItems = 'center';
  popupContainer.style.zIndex = '1000';

  // Create popup content
  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';
  popupContent.style.backgroundColor = 'white';
  popupContent.style.padding = '20px';
  popupContent.style.borderRadius = '5px';
  popupContent.style.textAlign = 'center';
  popupContent.style.maxWidth = '400px';

  // Create message
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  messageElement.style.marginBottom = '20px';

  // Create buttons container
  const buttonsContainer = document.createElement('div');
  buttonsContainer.style.display = 'flex';
  buttonsContainer.style.justifyContent = 'center';
  buttonsContainer.style.gap = '10px';

  // Create Yes button
  const yesButton = document.createElement('button');
  yesButton.textContent = 'Yes';
  yesButton.className = 'btn btn--primary';
  yesButton.style.padding = '8px 16px';

  // Create No button
  const noButton = document.createElement('button');
  noButton.textContent = 'No';
  noButton.className = 'btn';
  noButton.style.padding = '8px 16px';

  // Append elements
  buttonsContainer.appendChild(yesButton);
  buttonsContainer.appendChild(noButton);
  popupContent.appendChild(messageElement);
  popupContent.appendChild(buttonsContainer);
  popupContainer.appendChild(popupContent);
  document.body.appendChild(popupContainer);

  // Return promise to handle user choice
  return new Promise((resolve) => {
    yesButton.addEventListener('click', () => {
      document.body.removeChild(popupContainer);
      resolve(true);
    });

    noButton.addEventListener('click', () => {
      document.body.removeChild(popupContainer);
      resolve(false);
    });
  });
}


// open - close menu
navTrigger.addEventListener('click', function() {
  nav.classList.toggle('open');   
});

// header background on scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > 40) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// Initialize Swiper
let swiper = new Swiper('.slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el : '.swiper-pagination',
    clickable: true
  },
  breakpoints:{
    320:{
      slidesPerView: 1,
      spaceBetween: 50,

    },
    768:{
      slidesPerView:2,
      spaceBetween:50
    }
  }
});
// Scroll Reveal
const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  reset:true
});

sr.reveal(`
  .hero__title, 
  .features__container, 
  .companies__pretitle, 
  .companies__title, 
  .testimonials__pretitle, 
  .testimonials__title,
  .newsletter__container,
  .footer__container
  `);
sr.reveal('.hero__subtitle', {delay: 500});
sr.reveal('.hero__btn', {delay: 600});
sr.reveal('.hero__img', {delay: 600, origin:'bottom'});
sr.reveal('.feature', {interval:'100'});
sr.reveal('.feature__explore-text', {delay:600,origin:'bottom'});
sr.reveal('.section-primary__img', {origin:'left'});
sr.reveal('.section-primary__text', {origin:'right'});
sr.reveal('.brands__item', {interval: '100'});
sr.reveal('.slider', {interval: '100'});
sr.reveal('.footer__copyright', {delay: 200, origin:'top'});