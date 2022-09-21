/* E L E M E N T S */
const menu = document.querySelector('#nav__burguer-input');
const menuContainer = document.querySelector('.nav__list');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav__item');
const nav = document.querySelector('.nav');
const modal = document.querySelector('.skills__modal');
const modalCard = document.querySelector('.modal');
const modalItems = document.querySelectorAll('.skills__display-item');

/* V A R I A B L E S */
let navStatus = false;
let scrolled = 0;

/* F U N C T I O N S */
const closeModal = () => {
    modal.classList.remove('skills__modal--active');
    body.style.overflow = 'auto';

    const modalDesc = document.querySelector('.modal__desc');
    modalDesc.innerHTML = '';

    const modalIcon = document.querySelector('.modal__icon');
    modalIcon.removeChild(modalIcon.firstChild);
}

const navCheck = (res) => {
    if (navStatus) {
        body.classList.remove('nav__overflow--hidden');
        navStatus = false;
    } else {
        body.classList.add('nav__overflow--hidden');
        navStatus = true;
    }
}

/* E V E N T S */
/// Menu Toggle
menu.addEventListener('click', (e) => {
    menuContainer.classList.toggle('is-active');
    navCheck(navStatus);
});

/// Open-Menu close when link is clicked 
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        menuContainer.classList.toggle('is-active');
        menu.checked = false;
        navCheck(navStatus);
    });
});

/// Nav Scroll
window.addEventListener('scroll', () => {
    let actualScroll = window.scrollY;
    
    if (actualScroll > scrolled) {
        nav.classList.add('nav__scroll');
    } else {
        nav.classList.remove('nav__scroll');
    }
    
    scrolled = actualScroll;
});

/// Modal
modalItems.forEach(modalItem => {
    modalItem.addEventListener('click', () => {
        modal.classList.add('skills__modal--active');
        body.style.overflow = 'hidden';
        
        const modalNameTxt = modalItem.querySelector('.skills__name').textContent;
        const modalName = document.querySelector('.modal__name');
        modalName.innerHTML = modalNameTxt;

        const modalDescTxt = modalItem.querySelector('.skills__desc').textContent;
        const modalDesc = document.querySelector('.modal__desc');
        modalDesc.innerHTML = modalDescTxt;

        const modalIconEl = modalItem.querySelector('.skills__img');
        const modalIconClone = modalIconEl.cloneNode(true);
        modalIconClone.classList.add('modalClone');
        const modalIcon = document.querySelector('.modal__icon');
        modalIcon.appendChild(modalIconClone);
    });
})


/// Modal Close
document.querySelector('.modal__close').addEventListener('click', () => {
    closeModal();
});

document.querySelector('.modal__button-close').addEventListener('click', () => {
    closeModal();
});