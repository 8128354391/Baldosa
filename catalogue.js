// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize custom cursor
  initCursor();

  // Initialize smooth scrolling
  initSmoothScroll();

  // Initialize animations
  initAnimations();

  // Initialize navbar behavior
  initNavbar();
});

// Custom cursor functionality
function initCursor() {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // Add hover effect for interactive elements
  const interactiveElements = document.querySelectorAll(
    "a, button, .catalog-image"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(1.5)";
      cursor.style.mixBlendMode = "difference";
    });

    element.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
      cursor.style.mixBlendMode = "difference";
    });
  });
}

// Smooth scrolling with Lenis
function initSmoothScroll() {
  // Check if Lenis is available
  if (typeof Lenis === "function") {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
}

// Initialize animations with GSAP
function initAnimations() {
  // Register ScrollTrigger plugin if available
  if (gsap && gsap.registerPlugin && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    // Animate catalog items on scroll
    const catalogItems = document.querySelectorAll(".catalog-item");

    catalogItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleClass: { targets: item, className: "visible" },
            once: true,
          },
          delay: index * 0.2,
        }
      );
    });

    // Animate download buttons
    gsap.utils.toArray(".download-btn").forEach((button) => {
      gsap.fromTo(
        button,
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: button,
            start: "top 90%",
            once: true,
          },
        }
      );
    });
  }
}

// Navbar scroll behavior
const navbar = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  // Determine scroll direction
  const currentScrollY = window.scrollY;

  // Show navbar when scrolling up, hide when scrolling down
  if (currentScrollY > lastScrollY) {
    navbar.classList.add("navbar--hidden"); // Scrolling down - hide navbar
  } else {
    navbar.classList.remove("navbar--hidden"); // Scrolling up - show navbar
  }

  // Update last scroll position
  lastScrollY = currentScrollY;
});

// Hamburger Menu Functionality
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", () => {
    // Toggle nav
    navLinks.classList.toggle("active");

    // Animate hamburger
    hamburger.classList.toggle("active");

    // Hamburger animation
    const lines = hamburger.querySelectorAll("div");
    if (hamburger.classList.contains("active")) {
      lines[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
      lines[1].style.opacity = "0";
      lines[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
      lines[0].style.transform = "none";
      lines[1].style.opacity = "1";
      lines[2].style.transform = "none";
    }
  });

  // Close menu when clicking a link
  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
      const lines = hamburger.querySelectorAll("div");
      lines[0].style.transform = "none";
      lines[1].style.opacity = "1";
      lines[2].style.transform = "none";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
      const lines = hamburger.querySelectorAll("div");
      lines[0].style.transform = "none";
      lines[1].style.opacity = "1";
      lines[2].style.transform = "none";
    }
  });
});

// Mobile Menu Functionality
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-links");
const links = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  // Toggle Nav
  navLinks.forEach((link) => {
    link.classList.toggle("active");
  });

  // Animate Links
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });

  // Hamburger Animation
  hamburger.classList.toggle("toggle");
});

// Close mobile menu when clicking a link
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    hamburger.classList.remove("toggle");
    links.forEach((link) => {
      link.style.animation = "";
    });
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  hamburger.addEventListener("click", function () {
    mobileMenu.classList.add("active");
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });

  // Optional: close menu when clicking a link
  document.querySelectorAll(".mobile-menu-links a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
});
