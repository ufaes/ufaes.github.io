document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll("[data-slide]");
  if (!slides.length) return;

  let current = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle("hidden", i !== index);
    });

    indicators.forEach((btn, i) => {
      btn.classList.toggle("opacity-50", i !== index);
    });

    current = index;
  }

  function startAuto() {
    interval = setInterval(() => {
      const next = (current + 1) % slides.length;
      showSlide(next);
    }, 5000);
  }

  function stopAuto() {
    clearInterval(interval);
  }
  showSlide(0);
  startAuto();
});