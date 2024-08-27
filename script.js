document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    });
  
    const exploreGrid = document.querySelector(".explore__grid");
    const arrowLeft = document.querySelector(".explore__nav .ri-arrow-left-line");
    const arrowRight = document.querySelector(".explore__nav .ri-arrow-right-line");
  
    let scrollAmount = 0;
  
    arrowRight.addEventListener("click", () => {
      exploreGrid.scrollBy({
        top: 0,
        left: 300,
        behavior: "smooth"
      });
      scrollAmount += 300;
    });
  
    arrowLeft.addEventListener("click", () => {
      exploreGrid.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth"
      });
      scrollAmount -= 300;
    });
  
    const joinForm = document.querySelector(".join__form__container form");
  
    joinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = joinForm.querySelector('input[placeholder="Your Name"]').value.trim();
      const email = joinForm.querySelector('input[placeholder="Enter Your Email Address"]').value.trim();
      const phone = joinForm.querySelector('input[placeholder="Phone Number"]').value.trim();
  
      if (!name || !email || !phone) {
        alert("Please fill out all fields.");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return;
      }
  
      alert("Form submitted successfully!");
      joinForm.reset();
    });
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    function validatePhone(phone) {
      const re = /^\d{10}$/;
      return re.test(phone);
    }
  });

 
  