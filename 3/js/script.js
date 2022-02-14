document.addEventListener('DOMContentLoaded', function() {
    const BUTTON_CHANGE = document.querySelector('#change');
    const LIGHTS = document.querySelector('#lights');
    const GREEN = LIGHTS.querySelector('#green');
    const YELLOW = LIGHTS.querySelector('#yellow');
    const RED = LIGHTS.querySelector('#red');

    BUTTON_CHANGE.addEventListener('click', function() {
        if (RED.classList.contains('red')) {
            RED.classList.remove('red');
            YELLOW.classList.add('yellow');
        } else if (YELLOW.classList.contains('yellow')) {
            YELLOW.classList.remove('yellow');
            GREEN.classList.add('green');
        } else if (GREEN.classList.contains('green')) {
            GREEN.classList.remove('green');
            RED.classList.add('red');
        }
    });
});