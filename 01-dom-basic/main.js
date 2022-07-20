const input = document.querySelector('#fullname');
const text = document.querySelector('.text');

function handleChangeInput(e) {
    renderFullname(e.target.value);
}

function renderFullname(value) {
    text.innerText = value;
}

// binding event
input.addEventListener('input', handleChangeInput);