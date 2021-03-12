const container = document.querySelector('.container')// It will just selector one element. 
const seats = document.querySelectorAll('.row .seat:not(.occupied)') // Query selectorAll grabs and puts them in a node list.
const count = document.getElementById('count') // We use the getElementByID because count is id in the span. 
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = movieSelect.value;



container.addEventListener('click', (e) => {
    console.log(e.target);
})

