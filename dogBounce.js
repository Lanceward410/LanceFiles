document.addEventListener('DOMContentLoaded', function() {
    let score = 0;
    let gameInterval;

    function createDogImage() {
        for (let i = 0; i < 2; i++) { // Create two dog images for every click
            const dogImage = document.createElement('img');
            dogImage.src = ".\\appphotos\\dogphoto.jpg";
            dogImage.alt = "Dog!";
            dogImage.classList.add('dog-image');

            dogImage.addEventListener('click', function() {
                score++;
                updateScore();
                createDogImage();  // Create two more dog images
                dogImage.remove();  // Remove the clicked dog image
            });

            document.querySelector('.immersive-container').appendChild(dogImage);
            moveDogImage(dogImage); // Immediately place the dog image at a random position
        }
    }

    function updateScore() {
        document.getElementById('scoreDisplay').textContent = `Score: ${score}`;
    }

    function moveDogImage(dogImage) {
        const xMax = window.innerWidth - dogImage.offsetWidth;
        const yMax = window.innerHeight - dogImage.offsetHeight;

        const randomX = Math.random() * xMax;
        const randomY = Math.random() * yMax;

        dogImage.style.left = randomX + 'px';
        dogImage.style.top = randomY + 'px';
    }

    // Start the game
    createDogImage();  // Start with one dog image
    gameInterval = setInterval(() => {
        const dogImages = document.querySelectorAll('.dog-image');
        dogImages.forEach(img => moveDogImage(img));
    }, 500);

    // End the game after 30 seconds
    setTimeout(function() {
        clearInterval(gameInterval);
        const currentHighScore = parseInt(localStorage.getItem('highScore') || "0");
        if(score > currentHighScore) {
            localStorage.setItem('highScore', score);
        }
        window.location.href = ".\\index2.html";
    }, 30000);
});