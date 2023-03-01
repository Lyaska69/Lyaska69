let loginButton = document.querySelector('.login-button');
let loginPopup = document.querySelector('.login-popup');
let closeButton = document.querySelector('.popup-close');

loginButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', close);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopup.classList.toggle('show-popup');
};

function close() {
    loginPopup.classList.remove('show-popup')
}

loginPopup.addEventListener('click', (e) => {
    if (e.target.classList.contains('show-popup')) {
        close();
    }
})