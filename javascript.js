const btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click', generate);
const flags = document.getElementById('flag');

function generate() {
    const newDiv = document.createElement('div');
    console.log("sahira");
    newDiv.classList.add('box');
    flags.appendChild(newDiv);

}


