
//Labb-1 grupp 42


const checkbox = document.querySelector('.checkbox');

const textField = document.querySelectorAll('.textfield');

const button = document.getElementById('eButton');

const divElement = document.querySelector('.eDiv');


//kollar så att det fungerar 

console.log(checkbox);
console.log(textField);
console.log(button);
console.log(divElement);


//Hanterar händelse för textfältet 
function input(e){
    console.log('Inputfält som genererar eventet: ', e.target);
    const nameAttribute = e.target.name;
    if(nameAttribute === 'content'){
        divElement.innerHTML = e.target.value;
    }

}


const colorInp = document.querySelector('[name="color"]');

//Lägger en Eventlyssnare till checkbox för händelsen change.

checkbox.addEventListener('change', function(e){
    const colorSet = colorInp.value;
    divElement.style.backgroundColor = colorSet;
})

//Lägger en Eventlyssnare till båda textFields för händelsen input.
textField.forEach(function(textField){
    textField.addEventListener('input', input);
})

//Lägger en Eventlyssnare till button för händelsen klick. 
button.addEventListener('click', function() {
    event.preventDefault();
    divElement.remove();
    console.log('Div-elementet borta.');
});

