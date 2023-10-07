document.addEventListener('DOMContentLoaded', function() {
    const dogImage = document.getElementById('dogImage');

    function moveDogImage() {
        const xMax = window.innerWidth - dogImage.offsetWidth;
        const yMax = window.innerHeight - dogImage.offsetHeight;

        const randomX = Math.random() * xMax;
        const randomY = Math.random() * yMax;

        dogImage.style.left = randomX + 'px';
        dogImage.style.top = randomY + 'px';
    }

    setInterval(moveDogImage, 500);  // Move the image every 2 seconds
});