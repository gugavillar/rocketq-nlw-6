import ModalPass from './modal-pass.js';

const modalPass = ModalPass();
const backButton = document.querySelector('.button.back');
backButton.addEventListener('click', (event) => handleClick(event));
modalPass.open();

function handleClick(event) {
    modalPass.close();
    window.location.replace('/');
}
