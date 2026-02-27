// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Highlight nearest upcoming event based on today's date
const today = new Date();
document.querySelectorAll('.event-card h3').forEach(card => {
  const text = card.textContent;
  const monthAbbr = text.match(/[A-Za-z]{3}/);
  const dayMatch = text.match(/\b\d{1,2}\b/);

  if (monthAbbr && dayMatch) {
    const monthMap = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };
    const eventDate = new Date(
      today.getFullYear(),
      monthMap[monthAbbr[0]],
      parseInt(dayMatch[0])
    );

    // Highlight or dim based on event date
    const parent = card.closest('.event-card');
    if (eventDate >= today) {
      parent.style.border = "3px solid var(--red)";
      parent.style.boxShadow = "0 0 15px rgba(181,43,36,0.8)";
    } else {
      parent.style.opacity = "0.7";
    }
  }
});

// Form submission handling
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('🎸 Thanks for reaching out! We’ll get back to you soon, Rock Star 🤘');
    form.reset();
  });
}

// Hero button scroll shortcut to contact form
const heroButton = document.querySelector('.hero button');
if (heroButton) {
  heroButton.addEventListener('click', () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Basic fade-in on scroll for performance
const faders = document.querySelectorAll('.section, .event-card, .merch-item');
const revealOnScroll = () => {
  const trigger = window.innerHeight / 1.2;
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = 'all 0.6s ease-out';
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
