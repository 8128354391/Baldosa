// Initialize Lenis smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a master timeline
const masterTimeline = gsap.timeline();

// Main title animation
gsap.from("#main-title", {
  scrollTrigger: {
    trigger: "#main-title",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

// Image containers animation
gsap.from(".image-container-1", {
  scrollTrigger: {
    trigger: ".image-row",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  x: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".image-container-2", {
  scrollTrigger: {
    trigger: ".image-row",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  x: 100,
  opacity: 0,
  duration: 1.2,
  delay: 0.2,
  ease: "power3.out",
});

gsap.from(".image-container-3", {
  scrollTrigger: {
    trigger: ".image-row",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 100,
  opacity: 0,
  duration: 1.2,
  delay: 0.4,
  ease: "power3.out",
});

// Corporate section animation
gsap.from(".corporate-title", {
  scrollTrigger: {
    trigger: ".corporate-video-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".corporate-image", {
  scrollTrigger: {
    trigger: ".corporate-video-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  x: -200,
  opacity: 0,
  duration: 1.2,
  delay: 0.3,
  ease: "power3.out",
});

gsap.from(".corporate-text", {
  scrollTrigger: {
    trigger: ".corporate-video-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  x: 200,
  opacity: 0,
  duration: 1.2,
  delay: 0.5,
  ease: "power3.out",
});

// History section animation
gsap.from(".history-title", {
  scrollTrigger: {
    trigger: ".history-section",
    start: "top 60%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
  x: 500,
  opacity: 0,
  duration: 1.2,
  delay: 0.4,
  ease: "power3.out",
});

gsap.from(".history-item", {
  scrollTrigger: {
    trigger: ".history-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 100,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
  delay: 0.6,
  ease: "power3.out",
});

// Technology section animation
gsap.from(".technology-title", {
  scrollTrigger: {
    trigger: ".technology-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 100,
  opacity: 0,
  duration: 1.2,
  delay: 0.4,
  ease: "power3.out",
});

gsap.from(".technology-image", {
  scrollTrigger: {
    trigger: ".technology-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
});

gsap.from(".technology-text", {
  scrollTrigger: {
    trigger: ".technology-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  ease: "power3.out",
});

gsap.from(".technology-list li", {
  scrollTrigger: {
    trigger: ".technology-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  delay: 0.6,
  ease: "power3.out",
});

// ICD section animation
gsap.from(".title-section h1", {
  scrollTrigger: {
    trigger: ".icd-main",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".title-section h4", {
  scrollTrigger: {
    trigger: ".icd-main",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
});

gsap.from(".image-section-1", {
  scrollTrigger: {
    trigger: ".icd-main",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  ease: "power3.out",
});

gsap.from(".image-section-2", {
  scrollTrigger: {
    trigger: ".icd-main",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  ease: "power3.out",
});

gsap.from(".image-section-3", {
  scrollTrigger: {
    trigger: ".icd-main",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  ease: "power3.out",
});

// Events section animation
gsap.from(".events-title", {
  scrollTrigger: {
    trigger: ".events-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".event-card", {
  scrollTrigger: {
    trigger: ".events-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
});

// Footer animations
gsap.from(".footer-logo-section", {
  scrollTrigger: {
    trigger: ".footer-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
});

gsap.from(".footer-links-column", {
  scrollTrigger: {
    trigger: ".footer-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
});

// Navbar scroll behavior
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  let lastScrollTop = 0;

  lenis.on("scroll", function ({ scroll }) {
    const scrollTop = scroll;

    // If we're scrolling down and we're past 50px from the top
    if (scrollTop > lastScrollTop && scrollTop > 50) {
      navbar.classList.add("navbar--hidden");
    }
    // If we're scrolling up
    else if (scrollTop < lastScrollTop) {
      navbar.classList.remove("navbar--hidden");
    }

    // Add background color change when scrolling down
    if (scrollTop > 50) {
      navbar.style.backgroundColor = "#B44414";
    } else {
      navbar.style.backgroundColor = "#B44414";
    }

    lastScrollTop = scrollTop;
  });
});

// Custom Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll(
  "a, button, .view-more-link, .content-small h2"
);

interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
  });

  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

// Optional: Add a class when hovering over clickable elements
document
  .querySelectorAll(
    ".nav-link, .box, .content-text, .tile p, .footer-links, .all-content"
  )
  .forEach((element) => {
    element.addEventListener("mouseenter", () => {
      document.querySelector(".cursor").style.transform =
        "translate(-50%, -50%) scale(1.5)";
    });

    element.addEventListener("mouseleave", () => {
      document.querySelector(".cursor").style.transform =
        "translate(-50%, -50%) scale(1)";
    });
  });

// Image scroll animations
const imageContainers = document.querySelectorAll(
  ".image-container-1, .image-container-2, .image-container-3"
);

lenis.on("scroll", function ({ scroll }) {
  const scrollTop = scroll;

  // Animate images based on scroll position
  imageContainers.forEach((container, index) => {
    const speed = 0.5 + index * 0.2; // Different speed for each image
    const yPos = -(scrollTop * speed);
    container.style.transform = `translateY(calc(-50% + ${yPos}px))`;
  });
});

// Adjust animations for mobile
const isMobile = window.innerWidth <= 768;

if (isMobile) {
  // Disable parallax effect on mobile
  lenis.on("scroll", function ({ scroll }) {
    const scrollTop = scroll;
    imageContainers.forEach((container) => {
      container.style.transform = "none";
    });
  });

  // Adjust GSAP animations for mobile
  gsap.from(".image-container-1, .image-container-2, .image-container-3", {
    scrollTrigger: {
      trigger: ".image-row",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });
}

// Mobile Menu Functionality
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");
const mobileNavLinks = document.querySelectorAll(".mobile-menu .nav-link");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  hamburger.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
});

// Close mobile menu
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  hamburger.classList.remove("active");
  document.body.style.overflow = ""; // Re-enable scrolling
});

// Close menu when clicking on a link
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    mobileMenu.classList.contains("active") &&
    !mobileMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.style.overflow = "";
  }
});
