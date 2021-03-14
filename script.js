const container = document.querySelector('.container')// It will just selector one element. 
const seats = document.querySelectorAll('.row .seat:not(.occupied)') // Query selectorAll grabs and puts them in a node list.
const count = document.getElementById('count') // We use the getElementByID because count is id in the span. 
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = +movieSelect.value;

// update total and count
function updateSelectedCount() {

    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    console.log(selectedSeats);
}


container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat')
        && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }

})

