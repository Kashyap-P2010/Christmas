document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});
document.addEventListener('DOMContentLoaded', function() {

    const gifts = [
        { image: 'assets/cookie.png', text: 'Merry Christmas! Here is a Cookie!' },
        { image: 'assets/plum-cake.png', text: 'Merry Christmas! Here is a Plum Cake!' },
        { image: 'assets/cupcake.png', text: 'Merry Christmas! Here is a Cupcake!' }
    ];

    function revealGift(id) {

        const randomGift = gifts[Math.floor(Math.random() * gifts.length)];

        document.getElementById('gift-image').src = randomGift.image;
        document.getElementById('gift-description').innerText = randomGift.text;

        document.getElementById('gift-popup').style.display = 'flex';

        triggerConfetti();
    }

    function closePopup() {
        document.getElementById('gift-popup').style.display = 'none';
    }

    function triggerConfetti() {

        const confettiContainer = document.createElement('div');
        confettiContainer.classList.add('confetti-container');
        document.body.appendChild(confettiContainer);

        for (let i = 0; i < 100; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.classList.add('confetti');
            confettiContainer.appendChild(confettiPiece);

            gsap.to(confettiPiece, {
                duration: Math.random() * 3 + 3,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotation: Math.random() * 360,
                opacity: 0,
                scale: Math.random() * 0.5 + 0.5,
                ease: 'power2.out',
                delay: Math.random() * 2
            });
        }

        setTimeout(() => {
            document.body.removeChild(confettiContainer);
        }, 5000);
    }

    document.querySelectorAll('.gift').forEach((gift, index) => {
        gift.addEventListener('click', () => revealGift(index + 1));
    });

    document.body.addEventListener('click', () => {
        const music = document.getElementById('bg-music');
        music.paused ? music.play() : music.pause();
    });
});

gsap.to("#santa img", {
    duration: 10,
    x: window.innerWidth + 300,
    repeat: -1,
    ease: "linear"
});

function revealGift(id) {
    alert(`🎉 You opened Gift #${id}! 🎉`);
}

document.body.addEventListener('click', () => {
    const music = document.getElementById('bg-music');
    music.paused ? music.play() : music.pause();
});