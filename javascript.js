const btnAdd = document.querySelector('.btn-add');
// btnAdd.addEventListener('click', generate);
const flags = document.getElementById('flag');

function generate() {
    const newDiv = document.createElement('div');
    console.log("sahira");
    newDiv.classList.add('box');
    flags.appendChild(newDiv);

}
function showImage(){
const nationals = document.getElementById('national');
const newImage = document.createElement('img');
newImage.setAttribute('src','images/india.jpeg');
newImage.setAttribute('height','50');
newImage.setAttribute('width','100');

nationals.appendChild(newImage);

}
function generateImage(){
    const nation = document.getElementById('nation');
    const newsImage = document.createElement('img');
    newsImage.setAttribute('src','images/australia.jpeg');
    newsImage.setAttribute('height','50');
    newsImage.setAttribute('width','100');

    nation.appendChild(newsImage);

    }
    function clickImage(){
        const nations = document.getElementById('nations');
        const newImages = document.createElement('img');
        newImages.setAttribute('src','images/canada.jpeg');
        newImages.setAttribute('height','50');
        newImages.setAttribute('width','100');

        nations.appendChild(newImages);

        }

