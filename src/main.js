const button = document.querySelector('.button');
const counterDisplay = document.querySelector('.displayCount');

// element to display values.
let output = document.querySelector('.character1');
let secondOutput = document.querySelector('.character2');


// Generate the random letter
button.addEventListener('click', () => {

    // Generate a random number
    let x = Math.floor(Math.random() * 24);
    let y = Math.floor(Math.random() * 24);

     // Alphabet
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    output.textContent = alphabet[x];
    secondOutput.textContent = alphabet[y];
    checkValues();
});

// checks if value 1 is the same as value 2.
const checkValues = () => {
    if (output.textContent === secondOutput.textContent) {
        alert();
    } 
}

// Counter
let count = 0;
const current = () => {
    counterDisplay.innerHTML = count;
}

button.addEventListener('click', () => {
    count++;
    current();
});


// Reset counter

/* reset.addEventListener('click', () => {
    count = 0;
    current();
}); */
