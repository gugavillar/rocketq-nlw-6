import ModalPass from './modal-pass.js';

const modalPass = ModalPass();
const backButton = document.querySelector('.button.back');
const roomId = document.querySelector('#room-id').dataset.id;
backButton.addEventListener('click', (event) => handleClick(event, roomId));
modalPass.open();

function handleClick(event, roomId) {
    modalPass.close(roomId);
}
