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

        const plus = document.querySelector('.plus'),
        number = document.querySelector('.number'),
        minus = document.querySelector('.minus');
        let a = 1;

        plus.addEventListener('click',()=>
{
a++;
console.log("a");
number.innerText = (a);

        });

        minus.addEventListener('click',()=>
        {
if(a>1){
a--
number.innerText = (a);
}
else{
    a--;
    number.innerText = (a);
}



                });
                const reset = document.querySelector('.reset');
                reset.addEventListener('click',clearAll);

function clearAll(){

number.innerHTML = ('0');


}




function age(){

if(document.getElementById('numb').value>=18){

window.alert('ELIGIBLE FOR VOTE');

}
else{

window.alert('U ARE NOT ELIGIBLE');
}
}


function favourite(){
    let text;
if(document.getElementById('lucky').value>=10){

text = 'Yeah ! its Greater than 10';
}
else{

text = 'Enter a Valid Number';
}

document.getElementById('demo').innerHTML = text
;}


function rainbow(){
let crayons;

if(document.getElementById('color').value=='red'){

crayons = "you clicked RED";
}
else if(document.getElementById('color').value=='green'){

    crayons = "you clicked GREEN";
}
else if(document.getElementById('color').value=='blue'){

    crayons = "you clicked BLUE";
}
else if(document.getElementById('color').value=='black'){

    crayons = "you clicked BLACK";
}
else if(document.getElementById('color').value=='blue'){

    crayons = "you clicked ROSE";
}
else if(document.getElementById('color').value=='orange'){

    crayons = "you clicked ORANGE";
}
else if(document.getElementById('color').value=='pink'){

    crayons = "you clicked PINK";
}

else{
    crayons = "Enter a Valid Color";

}
document.getElementById('star').innerHTML = crayons ;

}

function identity(){


    let x = document.getElementById('aadhar').value;
    window.alert(x);

}

const hourSpan = document.getElementById('hour');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const amorpmSpan = document.getElementById('amorpm');

function changeTime(){

const date = new Date();
let hours = date.getHours();
let minutes =date.getMinutes();
let seconds =date.getSeconds();

let amorpm;
console.log(hours,minutes,seconds,amorpm);
hourSpan.innerText = hours;
minutesSpan.innerText = minutes;
secondsSpan.innerText = seconds;

if (hours <= 0 || hours <= 12)
{
amorpm ="AM"


}
else{
amorpm = "PM"

}
amorpmSpan.textContent = amorpm;

}
setInterval(changeTime,1000)



// to-do-list

const addNewButton = document.getElementById('addNew');
 const inputField =document.getElementById('inputField')
 const addResults = document.getElementById('addResults')

 addNewButton.addEventListener('click',function(){

const createNew = document.createElement('createNew');
createNew.innerText = inputField.value;
createNew.classList.add('creator');

addResults.appendChild(createNew);
inputField.value = "";
const mySpan = document.createElement('spans');
mySpan.innerText = "x";
mySpan.classList.add("spaner");
createNew.appendChild(mySpan);

mySpan.addEventListener('click',function(){

    addResults.removeChild(createNew);


})



 })