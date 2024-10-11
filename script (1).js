
let clickCount = 0;

document.getElementById("bloomButton").addEventListener("click", function() {
    const flowers = document.querySelector('.flower-container');
    const firstMessage = document.getElementById("surpriseMessage");
    const secondMessage = document.getElementById("secondMessage");
    const thirdMessage = document.getElementById("thirdMessage");

    flowers.style.opacity = "1";  // Show the flowers

    // Randomly change flower colors on each click
    const colors = ['#ff69b4', '#ff4500', '#1e90ff', '#32cd32', '#dda0dd'];
    document.querySelectorAll('.flower').forEach(flower => {
        flower.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });

    clickCount++;

    if (clickCount === 1) {
        setTimeout(function() {
            firstMessage.classList.remove('hidden');
            firstMessage.style.opacity = "1";  // Show the first surprise message
        }, 1500);
    } else if (clickCount === 2) {
        setTimeout(function() {
            secondMessage.classList.remove('hidden');
            secondMessage.style.opacity = "1";  // Show the second surprise message
        }, 1000);
    } else if (clickCount === 3) {
        setTimeout(function() {
            thirdMessage.classList.remove('hidden');
            thirdMessage.style.opacity = "1";  // Show the third surprise message
        }, 1000);
    }
});
