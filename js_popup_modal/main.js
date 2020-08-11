const open_btn = document.querySelector('.open_modal');
const close_btn = document.querySelector('.close_modal');
const modal = document.querySelector('.modal');

open_btn.addEventListener('click', toggleModal);
close_btn.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('is-active');
}