/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

const createModal = function () {
  // Create the modal div element
  const modal = document.createElement('div');

  // Set the CSS properties of the modal
  modal.classList.add('modal');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0,0,0,.5)';

  // Append the modal to the body element
  document.body.appendChild(modal);
};

/*===== MENU SHOW & MENU HIDDEN =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    // If navToggle exist make eventListener to add "show-menu" class to menu -> make mobile menu visible and create background under menu
    navMenu.classList.toggle('show-menu');
    if (navMenu.classList.contains('show-menu')) {
      createModal();
    } else {
      document.body.removeChild(document.querySelector('.modal'));
    }
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on any nav__link, the "show-menu" class wille be removed and "modal" element will be removed
  navMenu.classList.remove('show-menu');
  document.body.removeChild(document.querySelector('.modal'));
};
navLink.forEach(n => n.addEventListener('click', linkAction));
