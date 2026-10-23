(() => {
  const carousel = document.querySelector('.home-hero[aria-roledescription="carousel"]');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.hero-slide'));
  const dots = Array.from(carousel.querySelectorAll('[data-slide]'));
  if (slides.length < 2) return;

  let activeIndex = 0;
  let autoplayTimer;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === activeIndex;
      slide.hidden = !active;
      if (active) slide.setAttribute('aria-current', 'true');
      else slide.removeAttribute('aria-current');
    });
    dots.forEach((dot, dotIndex) => {
      if (dotIndex === activeIndex) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  };

  const startAutoplay = () => {
    window.clearInterval(autoplayTimer);
    autoplayTimer = window.setInterval(() => showSlide(activeIndex + 1), 5000);
  };

  carousel.querySelectorAll('[data-direction]').forEach((button) => {
    button.addEventListener('click', () => {
      showSlide(activeIndex + Number(button.dataset.direction));
      startAutoplay();
    });
  });
  dots.forEach((button) => {
    button.addEventListener('click', () => {
      showSlide(Number(button.dataset.slide));
      startAutoplay();
    });
  });

  const stopAutoplay = () => window.clearInterval(autoplayTimer);
  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);
  carousel.addEventListener('focusin', stopAutoplay);
  carousel.addEventListener('focusout', (event) => {
    if (!carousel.contains(event.relatedTarget)) startAutoplay();
  });

  showSlide(0);
  carousel.classList.add('carousel-ready');
  startAutoplay();
})();
