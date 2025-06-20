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

// close

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
    // const viewMore = item.querySelector(".content-small h2");
    const tileName = item.querySelector(".content-text h1").textContent.trim();

    // Add hover effect to images
    images.forEach((img) => {
      img.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
      });

      img.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    });

    // Add hover effect to view more text
    if (viewMore) {
      viewMore.addEventListener("mouseenter", function () {
        this.style.color = "#B44414";
        this.style.transform = "translateX(0)";
      });

      viewMore.addEventListener("mouseleave", function () {
        this.style.color = "#c1c1c1";
        this.style.transform = "translateX(0)";
      });

      // Add click event to open tile detail page
      viewMore.addEventListener("click", function () {
        const tileSlug = tileName.toLowerCase().replace(/\s+/g, "-");
        window.open(`tile-detail.html?tile=${tileSlug}`, "_blank");
      });
    }

    // Make the entire content item clickable
    item.addEventListener("click", function (e) {
      // Only trigger if the click wasn't on the "View More" text (to avoid double triggering)
      if (!e.target.closest(".content-small")) {
        const tileSlug = tileName.toLowerCase().replace(/\s+/g, "-");
        window.open(`tile-detail.html?tile=${tileSlug}`, "_blank");
      }
    });
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

// Mobile Menu Functionality
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-link");

  // Toggle mobile menu
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

// Improved Animations for Mobile
document.addEventListener("DOMContentLoaded", function () {
  const contentItems = document.querySelectorAll(".all-content");
  const isMobile = window.innerWidth <= 768;

  // Add animation classes to content items
  contentItems.forEach((item, index) => {
    item.classList.add("fade-in");
    item.style.animationDelay = `${index * 0.1}s`;
  });

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Observe all content items
  contentItems.forEach((item) => {
    observer.observe(item);
  });

  // Optimize hover effects for mobile
  if (isMobile) {
    contentItems.forEach((item) => {
      item.addEventListener("touchstart", function () {
        this.style.backgroundColor = "rgba(180, 68, 20, 0.05)";
      });

      item.addEventListener("touchend", function () {
        this.style.backgroundColor = "transparent";
      });
    });
  }
});

// Optimize scroll performance
let scrollTimeout;
window.addEventListener(
  "scroll",
  function () {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(function () {
        scrollTimeout = null;
        // Your scroll handling code here
      }, 100);
    }
  },
  { passive: true }
);

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.getElementById("mobileMenuOverlay");
  const closeBtn = document.getElementById("closeMenu");

  hamburger.addEventListener("click", function () {
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    overlay.classList.remove("active");
  });

  // Optional: close menu when clicking a link
  document.querySelectorAll(".mobile-menu-list a").forEach((link) => {
    link.addEventListener("click", () => {
      overlay.classList.remove("active");
    });
  });
});
