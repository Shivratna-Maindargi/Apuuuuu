// Initialize particles on page load
document.addEventListener('DOMContentLoaded', function () {
    createParticles();
    initializeAnimations();
    setupScrollAnimations();
});

/*song*/

document.body.addEventListener("click", () => {
    const music = document.getElementById("bg-music");
    music.muted = false;  // unmute on first click
    music.play();
}, { once: true });

// Create floating particles
function createParticles() {
    const particles = document.getElementById('particles');
    const particleEmojis = ['❤️', '💕', '💖', '💗', '🌸', '🌺', '✨', '💫', '🦋'];

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = particleEmojis[Math.floor(Math.random() * particleEmojis.length)];

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation duration and delay
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';

        particles.appendChild(particle);
    }
}

// Initialize typewriter and other animations
function initializeAnimations() {
    // Typewriter effect is handled by CSS

    // Add staggered animation delays to elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        element.style.animationDelay = (index * 0.2) + 's';
    });
}

// Scroll animations (AOS - Animate On Scroll)
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');

                // Special handling for message text
                if (entry.target.classList.contains('message-card')) {
                    animateMessageText();
                }
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const elementsToObserve = document.querySelectorAll('[data-aos], .section-title, .message-card');
    elementsToObserve.forEach(element => {
        observer.observe(element);

        // Add delay based on data-delay attribute
        const delay = element.getAttribute('data-delay');
        if (delay) {
            element.style.transitionDelay = delay + 'ms';
        }
    });
}

// Setup surprise effects for more creativity
function setupSurpriseEffects() {
    // Surprise on hero title click
    const heroTitle = document.querySelector('.typewriter');
    if (heroTitle) {
        heroTitle.addEventListener('click', () => {
            triggerSurprise();
        });
    }

    // Random surprise messages every 30 seconds
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance
            showRandomMessage();
        }
    }, 30000);
}

// Animate message text with staggered effect
function animateMessageText() {
    const messageTexts = document.querySelectorAll('.message-text');
    messageTexts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('fade-in-animate');
        }, index * 500);
    });
}

// Trigger surprise effect on hero title click
function triggerSurprise() {
    // Create confetti effect
    createConfetti();

    // Show a surprise message
    showSurpriseMessage("🎉 Surprise! You found the secret click! 🎂");
}

// Create confetti animation
function createConfetti() {
    const confettiCount = 50;
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';

        document.body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

// Show surprise message
function showSurpriseMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'surprise-message';
    messageDiv.innerHTML = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.background = 'rgba(255, 255, 255, 0.9)';
    messageDiv.style.padding = '20px';
    messageDiv.style.borderRadius = '10px';
    messageDiv.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    messageDiv.style.zIndex = '10000';
    messageDiv.style.fontSize = '1.5rem';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.animation = 'bounceIn 0.5s ease-out';

    document.body.appendChild(messageDiv);

    // Remove after 3 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 3000);
}

// Show random birthday messages
function showRandomMessage() {
    const messages = [
        "You're the light of my life! ✨",
        "Happy Birthday to the most amazing person! 🎂",
        "May your day be filled with love and joy! ❤️",
        "You're getting older, but never old! 😄",
        "Wishing you endless happiness! 🌟"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showSurpriseMessage(randomMessage);
}

// Cut the cake function
function cutTheCake() {
    // Create a virtual cake
    const cake = document.createElement('div');
    cake.className = 'virtual-cake';
    cake.innerHTML = '🎂';
    cake.style.position = 'fixed';
    cake.style.top = '50%';
    cake.style.left = '50%';
    cake.style.transform = 'translate(-50%, -50%) scale(0)';
    cake.style.fontSize = '5rem';
    cake.style.zIndex = '10001';
    cake.style.animation = 'cakeAppear 0.5s ease-out forwards';

    document.body.appendChild(cake);

    // After cake appears, "cut" it
    setTimeout(() => {
        cake.innerHTML = '🍰'; // Change to cut cake
        createConfetti(); // Trigger confetti
        showSurpriseMessage("🎉 Cake Cut! Happy Birthday! 🎂");
    }, 500);

    // Remove cake after 5 seconds
    setTimeout(() => {
        if (cake.parentNode) {
            cake.parentNode.removeChild(cake);
        }
    }, 5000);
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Toggle like functionality for photos
function toggleLike(button) {
    const heartIcon = button.querySelector('.heart-icon');
    button.classList.toggle('liked');

    if (button.classList.contains('liked')) {
        heartIcon.textContent = '❤️';
        // Create floating heart effect
        createFloatingHeart(button);
    } else {
        heartIcon.textContent = '🤍';
    }
}

// Create floating heart animation when photo is liked
function createFloatingHeart(button) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = '1.5rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';

    const rect = button.getBoundingClientRect();
    heart.style.left = rect.left + 'px';
    heart.style.top = rect.top + 'px';

    document.body.appendChild(heart);

    // Animate the heart
    heart.animate([
        { transform: 'translateY(0px) scale(1)', opacity: 1 },
        { transform: 'translateY(-60px) scale(1.5)', opacity: 0 }
    ], {
        duration: 1500,
        easing: 'ease-out'
    }).onfinish = () => {
        document.body.removeChild(heart);
    };
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const parallaxSpeed = 0.5;

    if (hero) {
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }

    // Update particles position based on scroll
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        const speed = 0.2 + (index % 3) * 0.1;
        particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add mouse movement effect to hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Subtle movement effect
    const moveX = (x - 0.5) * 20;
    const moveY = (y - 0.5) * 20;

    const floatingHearts = document.querySelector('.floating-hearts');
    if (floatingHearts) {
        floatingHearts.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// Add click effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add entrance animations for photos when they come into view
const photoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target.querySelector('img');
            if (img) {
                img.style.animation = 'photoEnter 0.8s ease-out forwards';
            }
        }
    });
}, { threshold: 0.2 });

// Observe all photo cards
document.querySelectorAll('.photo-card').forEach(card => {
    photoObserver.observe(card);
});

// Add photo enter animation
const photoStyle = document.createElement('style');
photoStyle.textContent = `
    @keyframes photoEnter {
        from {
            transform: scale(0.8) rotate(-5deg);
            opacity: 0;
        }
        to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
    }
`;
document.head.appendChild(photoStyle);

// 🚀 NEW CODE: Redirect when like button is clicked
document.addEventListener('DOMContentLoaded', function () {
    const targets = [
        'page1.html',
        'page2.html',
        'page3.html',
        'page4.html',
        'page5.html',
        'page6.html'
    ];

    const likeButtons = document.querySelectorAll('.gallery-grid .like-btn');

    likeButtons.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // stop normal button behavior
            const url = targets[i];
            if (url) {
                window.location.href = url;
            }
        });
    });
});

/*countdown section*/
const birthdayInput = document.getElementById("birthdayDate");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownMessage = document.getElementById("countdownMessage");

let countdownInterval;

// Function to update countdown
function updateCountdown(targetDate) {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    countdownMessage.innerHTML = "<p>🎉 Happy Birthday! 🎂🎊</p>";
    return;
  }

  // Calculate time parts
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display values
  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

// Event listener for date input
birthdayInput.addEventListener("change", () => {
  const birthdayDate = new Date(birthdayInput.value).getTime();

  if (isNaN(birthdayDate)) {
    countdownMessage.innerHTML = "<p>Please select a valid date ⏰</p>";
    return;
  }

  countdownMessage.innerHTML = "<p>Countdown started! 🎉</p>";

  // Clear any previous countdown
  clearInterval(countdownInterval);

  // Start new countdown
  countdownInterval = setInterval(() => {
    updateCountdown(birthdayDate);
  }, 1000);

  // Immediately update without waiting 1s
  updateCountdown(birthdayDate);
});

