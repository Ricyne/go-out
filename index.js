

function moveButton() {
    const noButton = document.getElementById("No");
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;
    
    let randomX, randomY;
    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (Math.abs(randomX - noButton.offsetLeft) < 100 && Math.abs(randomY - noButton.offsetTop) < 50);
    
    noButton.style.transform = `translate(${randomX - noButton.offsetLeft}px, ${randomY - noButton.offsetTop}px)`;
    
    alert(messages[Math.floor(Math.random() * messages.length)]);
}