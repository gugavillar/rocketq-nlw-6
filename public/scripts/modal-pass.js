export default function ModalPass() {
    const modalWrapper = document.querySelector('.modal-wrapper');

    function open() {
        modalWrapper.classList.add('active');
    }

    function close(roomId) {
        modalWrapper.classList.remove('active');
        window.location.replace(`/room/${roomId}`);
    }

    return {
        open,
        close
    };
}