// Navbar scroll behavior
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

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

// Category Navigation Functionality
document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".category-link");

  // Add smooth scrolling to category links
  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target section id from the href
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Calculate header height for offset
        const headerHeight = document.querySelector(".header").offsetHeight;

        // Scroll to the target section with offset for header
        window.scrollTo({
          top: targetSection.offsetTop - headerHeight - 20, // Extra 20px padding
          behavior: "smooth",
        });

        // Update active state
        categoryLinks.forEach((link) => link.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });

  // Set active category based on scroll position
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + 200; // Offset for better detection

    // Find which section is currently in view
    const sections = document.querySelectorAll(".sec-flex > .section-1");
    const allTilesSection = document.getElementById("all-tiles");

    if (allTilesSection && scrollPosition >= allTilesSection.offsetTop - 200) {
      // Set All Tiles as active when scrolled to that section
      categoryLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#all-tiles") {
          link.classList.add("active");
        }
      });
    }
  });
});

// Tile Categories Functionality
document.addEventListener("DOMContentLoaded", function () {
  const categoryBoxes = document.querySelectorAll(".box");
  const contentSections = document.querySelectorAll(".content");

  // Initialize with the first category active
  categoryBoxes[0].classList.add("active");
  document.getElementById("content1").classList.add("active");

  // Add click event to each category box
  categoryBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      // Get the target content id
      const targetId = this.getAttribute("data-target");

      // Remove active class from all boxes and contents
      categoryBoxes.forEach((item) => item.classList.remove("active"));
      contentSections.forEach((item) => {
        item.classList.remove("active");
        // Use setTimeout to allow the fade-out effect
        setTimeout(() => {
          item.style.display = "none";
        }, 300);
      });

      // Add active class to clicked box and corresponding content
      this.classList.add("active");
      const targetContent = document.getElementById(targetId);

      // Display the target content with animation
      setTimeout(() => {
        targetContent.style.display = "block";
        // Force a reflow before adding the active class for animation
        void targetContent.offsetWidth;
        targetContent.classList.add("active");
      }, 300);
    });
  });

  // Add hover effects to content items
  const contentItems = document.querySelectorAll(".all-content");
  contentItems.forEach((item) => {
    const images = item.querySelectorAll(".image-container img");
    const viewMore = item.querySelector(".content-small h2");
  });
});

// Custom cursor movement
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Optional: Add a class when hovering over clickable elements
document
  .querySelectorAll(
    ".nav-link, .tile-design img, .all-content, .box, .footer-links a"
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

// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close mobile menu
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close mobile menu when clicking on a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target) && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Optimize animations for mobile devices
document.addEventListener("DOMContentLoaded", function () {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    // Disable animations for users who prefer reduced motion
    document.body.classList.add("reduced-motion");
  }

  // Adjust scroll behavior for mobile
  if (window.innerWidth <= 768) {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 0.5,
      smoothTouch: true,
      touchMultiplier: 1,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
});
