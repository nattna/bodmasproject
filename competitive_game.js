/*let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
}*/

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

    window.location.href = "competitiveGame_page3.html";
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else if (usernameValue.length < 5 ) {
        setError(username, 'Username must be at least 5 characters.')
    } else if (usernameValue.length > 20 ) {
        setError(username, 'Username must be no more than 20 characters.')
    } else {
        setSuccess(username);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 5 ) {
        setError(password, 'Password must be at least 5 characters.')
    } else if (passwordValue.length > 20 ) {
        setError(password, 'Password must no more than 20 characters.')
    } else {
        setSuccess(password);
    }
};














