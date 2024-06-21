import './style.css';

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