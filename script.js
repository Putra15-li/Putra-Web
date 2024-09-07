document.addEventListener('DOMContentLoaded', function() {
    const texts = document.querySelectorAll('.animated-text .text');
    let index = 0;

    function changeText() {
        texts.forEach((text, i) => {
            text.style.opacity = i === index ? '1' : '0';
        });
        index = (index + 1) % texts.length;
    }

    setInterval(changeText, 3000); // Ganti teks setiap 3 detik
});
