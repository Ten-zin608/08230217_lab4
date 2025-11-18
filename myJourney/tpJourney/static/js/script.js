document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("hero-btn");
    const text = document.getElementById("motivation-text");

    if (!btn || !text) return;

    const messages = [
        "Every error you fix today makes you stronger tomorrow.",
        "Keep going—debugging is just your brain exercising.",
        "You don’t have to know everything, you just have to not give up.",
        "Small progress is still progress.",
        "You’re closer than you think. One more try!"
    ];

    btn.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * messages.length);
        text.textContent = messages[randomIndex];
    });
});
