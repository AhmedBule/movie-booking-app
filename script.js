const container = document.querySelector('.container')// It will just selector one element. 
const seats = document.querySelectorAll('.row .seat:not(.occupied)') // Query selectorAll grabs and puts them in a node list.
const count = document.getElementById('count') // We use the getElementByID because count is id in the span. 
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

//(Last Step)-- Populate UI

populateUI()





// Save seelcted movie index and price. 

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}



// update total and count
function updateSelectedCount() {

    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    const seatsIndex = [...selectedSeats].map((seat) =>
        [...seats].indexOf(seat));

    // localStorage
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


    console.log(seatsIndex)

    const selectedSeatsCount = selectedSeats.length

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}



// Copy selected seats into an array
// Map through array 
// return a new array of Index


// (4-Populate UI) - 
// Get Data from localstorage and populate UI

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));


    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    };

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}


// Movie select event

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})




// Seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat')
        && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }

})


// Initial count  and total set

updateSelectedCount();

