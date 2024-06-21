import './style.css';
import myImage1 from './image1.jpg';
import myImage2 from './image2.jpg';
import myImage3 from './image3.jpg';


console.log('Hello World'); 

const dropDownElement = document.getElementById("dropdownbutton"); 
const buttonContainerElement = document.getElementById('buttonContainer'); 

dropDownElement.addEventListener('click', () =>{
    createDropDown(); 
}); 
const dropdownlist = document.createElement('ul'); 
const dropdownelement1 = document.createElement('li'); 
const dropdownelement2 = document.createElement('li'); 
const dropdownelement3 = document.createElement('li');
dropdownelement1.textContent = 'blibli'; 
dropdownelement2.textContent = 'blabalb'; 
dropdownelement3.textContent = 'blublu'; 

function createDropDown(){

    dropdownlist.appendChild(dropdownelement1); 
    dropdownlist.appendChild(dropdownelement2); 
    dropdownlist.appendChild(dropdownelement3); 
    buttonContainerElement.appendChild(dropdownlist); 
}

window.addEventListener('click', (event) => {
    if (!event.target.matches('#dropdownbutton')) {
        if (buttonContainerElement.contains(dropdownlist)) {
            buttonContainerElement.removeChild(dropdownlist);
        }          
    }
})

const frameElement = document.getElementById('frame');
frameElement.style.backgroundImage = `url(${myImage1})`;

const Images = [myImage1, myImage2, myImage3]; 

let currentIndex = 0;
function getNextImage() {
    currentIndex = (currentIndex + 1) % Images.length;
    return Images[currentIndex];
}

function getPreviousImage() {
    currentIndex = (currentIndex - 1 + Images.length) % Images.length;
    return Images[currentIndex]
}

const rightButtonElement = document.getElementById('rightButton'); 
rightButtonElement.addEventListener('click', ()=>{
    frameElement.style.backgroundImage = `url(${getNextImage()})`;
})
const leftButtonElement = document.getElementById('leftButton'); 
leftButtonElement.addEventListener('click', ()=>{
    frameElement.style.backgroundImage = `url(${getPreviousImage()})`;
})

function changeToNextImage(){
    frameElement.style.backgroundImage = `url(${getNextImage()})`;
}

setInterval(changeToNextImage, 5000);

  
/*
function getPreviousImage() {
    currentIndex = (currentIndex - 1 + array.length) % array.length;
    return array[currentIndex];
  }
*/

