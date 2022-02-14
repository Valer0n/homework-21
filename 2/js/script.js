const BUTTON_OPEN = document.querySelector('.open');
const MODAL = document.querySelector('.modal');
const BUTTON_CLOSE = MODAL.querySelector('.close');

BUTTON_OPEN.onclick = function() {
    MODAL.style.display = "block";
}

BUTTON_CLOSE.onclick = function() {
    MODAL.style.display = "none";
}