document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});










// Animate elements on scroll
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  document.querySelectorAll('.animate').forEach((el) => {
    observer.observe(el);
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  document.querySelectorAll('.animate').forEach((el) => {
    observer.observe(el);
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("applicationForm");

  form.addEventListener("submit", () => {
    setTimeout(() => {
      alert("✅ Your application has been sent successfully!");
      form.reset(); // optional: clears form fields
    }, 500); // give it a moment to submit before showing alert
  });
});
