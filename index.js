document.getElementById('add').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    addCard(name);
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('nameForm').reset();
});


//Adding a card
function addCard(name) {
    const cardContainer = document.querySelector('.cards');
    const newCard = document.createElement('div');
    newCard.classList.add('card1');

    const images = ['images/panther1.jpeg', 'images/panther2.jpeg', 'images/panther3.jpeg'];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    newCard.innerHTML = `
        <img src="${randomImage}" alt="candidate-image" class="image">
        <h3>${name}</h3>
        <h4>Votes</h4>
        <p class="count">0</p>
    `;

    newCard.addEventListener('click', function(event) {
        const voteCountElement = newCard.querySelector('.count');
        let voteCount = parseInt(voteCountElement.textContent);

        const cardWidth = newCard.offsetWidth;
        const clickX = event.offsetX;

        if (clickX < cardWidth / 2) {
            
            voteCount = Math.max(voteCount - 1, 0); 
        } else {

            voteCount++;
        }

        voteCountElement.textContent = voteCount;
    });

    cardContainer.appendChild(newCard);
}
