const burguer = document.querySelector('#nav__burguer-input');
const sidebar = document.querySelector('.nav__list');
const body = document.querySelector('body');

burguer.addEventListener('click', (e) => {
    sidebar.classList.toggle('is-active');
    body.classList.toggle('nav--overflow');
});

const nav = document.querySelector('.nav');
let scrolled = 0;

window.addEventListener('scroll', () => {
    let actualScroll = window.scrollY;
    if(actualScroll > scrolled) {
        nav.classList.add('nav__scroll');
    } else {
        nav.classList.remove('nav__scroll');
    }
    scrolled = actualScroll;    
});

const modal = document.querySelector('.skills__modal');
const modalBtns = document.querySelectorAll('.skills__display-item');

modalBtns.forEach(modalBtn => {
    modalBtn.addEventListener('click', () => {
        modal.classList.add('skills__modal--active');
        body.style.overflow = 'hidden';

        const modalNameTxt = modalBtn.querySelector('.skills__item-name').textContent;
        const modalName = document.querySelector('.modal__name-txt');
        modalName.innerHTML = modalNameTxt;

        const modalDescTxt = modalBtn.querySelector('.skills__item-desc').textContent;
        const modalDesc = document.querySelector('.modal__desc');
        modalDesc.innerHTML = modalDescTxt;

        const modalIconEl = modalBtn.querySelector('.skills__img');
        const modalIconClone = modalIconEl.cloneNode(true);
        modalIconClone.classList.add('modalClone');
        const modalIcon = document.querySelector('.modal__name-icon');        
        modalIcon.appendChild(modalIconClone);        
    });
})

const closeModal = () => {
    modal.classList.remove('skills__modal--active');
    body.style.overflow = 'auto';

    const modalDesc = document.querySelector('.modal__desc');
    modalDesc.innerHTML = '';

    const modalIcon = document.querySelector('.modal__name-icon');        
    modalIcon.removeChild(modalIcon.firstChild);
}

document.querySelector('.modal__close').addEventListener('click', () => {
     closeModal();
});

document.querySelector('.modal__buttons-close').addEventListener('click', () => {
    closeModal();
});