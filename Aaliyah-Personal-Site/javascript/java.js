const body = document.querySelector('body'); //variable for selecting the body of the document
const modeSwitch = document.getElementById('mode'); //
const modeStat = document.querySelector('.mode-stat');

function LightDarkSwitch() { //function to switch from light to dark mode
    body.classList.toggle('dark-mode');

    //Checking if the toggle is in light mode or dark mode
    const modeMessage = body.classList.contains('dark-mode') ?
    'Dark Mode' : "Light Mode"

    modeStat.innerText = modeMessage;

}

modeSwitch.addEventListener('click', LightDarkSwitch); //event listener for toggle switch

//function to use Intersection Observer for fade-slide-in effect
function addSlideIn(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
        }
    });
}
//How far in the viewport to start the effect
const options = {
    threshold: 0.1
}
//creating an observer for the effect
const observer = new IntersectionObserver(addSlideIn, options);

//variables to select certain elements and/or classes
const par_items = document.querySelectorAll('.my_item');
//const myimg = document.querySelector('self-image')
const photo_card = document.querySelector('card');

//Adding observer to each item based on class or element
par_items.forEach(my_item => {
    observer.observe(my_item);
});
//I tried to create a seperate one to use for my photocards on my photos page and projects page.
photo_card.forEach(my_item => {
    observer.observe(my_item);
});

//observer.observe(photo_card);