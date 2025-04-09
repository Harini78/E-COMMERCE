'use strict';

// Utility function to add event listeners
const addEventListenerToElements = (elements, event, handler) => {
  elements.forEach(element => element.addEventListener(event, handler));
};

// Modal functionality
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

const closeModal = () => modal.classList.add('closed');

modalCloseBtn.addEventListener('click', closeModal);
modalCloseOverlay.addEventListener('click', closeModal);

// Notification toast functionality
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

toastCloseBtn.addEventListener('click', () => {
  notificationToast.classList.add('closed');
});

// Mobile menu functionality
const mobileMenuOpenBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenus = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtns = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

mobileMenuOpenBtns.forEach((btn, index) => {
  const openMenu = () => {
    mobileMenus[index].classList.add('active');
    overlay.classList.add('active');
  };

  const closeMenu = () => {
    mobileMenus[index].classList.remove('active');
    overlay.classList.remove('active');
  };

  btn.addEventListener('click', openMenu);
  mobileMenuCloseBtns[index].addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
});


const accordionBtns = document.querySelectorAll('[data-accordion-btn]');
const accordions = document.querySelectorAll('[data-accordion]');

accordionBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const isActive = btn.nextElementSibling.classList.contains('active');


    if (!isActive) {
      accordions.forEach((accordion, i) => {
        accordion.classList.remove('active');
        accordionBtns[i].classList.remove('active');
      });
    }

    btn.nextElementSibling.classList.toggle('active');
    btn.classList.toggle('active');
  });
});
