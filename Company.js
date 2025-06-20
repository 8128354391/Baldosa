// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const loaderContainer = document.querySelector(".loader-container");
  const loaderProgress = document.querySelector(".loader-progress");
  const loaderPercentage = document.querySelector(".loader-percentage");
  const loaderOverlay = document.querySelector(".loader-overlay");
  const logoContainer = document.querySelector(".logo-container");
  const mainContent = document.querySelector(".main-content");

  // Initialize GSAP timeline for logo animation
  const logoTimeline = gsap.timeline();

  // Animate logo elements - now just fade in the logo
  logoTimeline.to(logoContainer, {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
  });

  // Simulate loading progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 10;

    if (progress > 100) {
      progress = 100;
      clearInterval(interval);

      // When loading is complete, animate the transition
      setTimeout(completeLoading, 1000);
    }

    // Update progress bar and percentage
    loaderProgress.style.width = `${progress}%`;
    loaderPercentage.textContent = `${Math.floor(progress)}%`;
  }, 100);

  // Function to handle the completion of loading
  function completeLoading() {
    // Create a timeline for the closing animation
    const closingTimeline = gsap.timeline();

    closingTimeline
      // First move the overlay from bottom to top
      .to(loaderOverlay, {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut",
      })
      // Then move the loader container up
      .to(
        loaderContainer,
        {
          y: "-100%",
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            // Hide the loader container after animation
            loaderContainer.style.display = "none";
          },
        },
        "-=1"
      )
      // Animate the overlay back down and out of view
      .to(loaderOverlay, {
        y: "100%",
        duration: 0.8,
        ease: "power2.in",
        // delay: 0.2,
      })
      // Show the main content
      .to(mainContent, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        onComplete: initializeSwiper,
      });
  }

  // Initialize Swiper slider
  function initializeSwiper() {
    // Initialize Swiper
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      speed: 1000,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
      },
      on: {
        init: function () {
          updateSlideCounter(this);
          animateSlideContent(this.activeIndex);
        },
        slideChange: function () {
          updateSlideCounter(this);
          animateSlideContent(this.activeIndex);
        },
      },
      // Mobile-specific settings
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });

    // Update slide counter
    function updateSlideCounter(swiper) {
      const currentSlide = document.querySelector(".current-slide");
      const totalSlides = document.querySelector(".total-slides");

      // Get the real index (accounting for duplicated slides in loop mode)
      let realIndex = swiper.realIndex + 1;

      // Format numbers to have leading zeros
      currentSlide.textContent = realIndex.toString().padStart(2, "0");
      totalSlides.textContent = swiper.slides.length
        .toString()
        .padStart(2, "0");
    }

    // Animate slide content
    function animateSlideContent(index) {
      // Reset all slides
      gsap.set(".slide-title, .slide-description, .explore-btn", {
        opacity: 0,
        y: 30,
      });

      // Animate the active slide content
      const activeSlide = document.querySelectorAll(".swiper-slide")[index];
      const title = activeSlide.querySelector(".slide-title");
      const description = activeSlide.querySelector(".slide-description");
      const button = activeSlide.querySelector(".explore-btn");

      const timeline = gsap.timeline();

      // Adjust animation duration for mobile
      const isMobile = window.innerWidth <= 768;
      const duration = isMobile ? 0.6 : 0.8;

      timeline
        .to(title, {
          opacity: 1,
          y: 0,
          duration: duration,
          ease: "power3.out",
        })
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: duration,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          button,
          {
            opacity: 1,
            y: 0,
            duration: duration,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }
  }
});

// About Section Animation - Updated to match HTML structure
gsap.registerPlugin(ScrollTrigger);

// Mobile Swiper Configuration
function initializeSwiper() {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    speed: 1000,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
    on: {
      init: function () {
        updateSlideCounter(this);
        animateSlideContent(this.activeIndex);
      },
      slideChange: function () {
        updateSlideCounter(this);
        animateSlideContent(this.activeIndex);
      },
    },
    // Mobile-specific settings
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });
}

// Mobile-friendly animations
function animateSlideContent(index) {
  // Reset all slides
  gsap.set(".slide-title, .slide-description, .explore-btn", {
    opacity: 0,
    y: 30,
  });

  // Animate the active slide content
  const activeSlide = document.querySelectorAll(".swiper-slide")[index];
  const title = activeSlide.querySelector(".slide-title");
  const description = activeSlide.querySelector(".slide-description");
  const button = activeSlide.querySelector(".explore-btn");

  const timeline = gsap.timeline();

  // Adjust animation duration for mobile
  const isMobile = window.innerWidth <= 768;
  const duration = isMobile ? 0.6 : 0.8;

  timeline
    .to(title, {
      opacity: 1,
      y: 0,
      duration: duration,
      ease: "power3.out",
    })
    .to(
      description,
      {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: "power3.out",
      },
      "-=0.4"
    )
    .to(
      button,
      {
        opacity: 1,
        y: 0,
        duration: duration,
        ease: "power3.out",
      },
      "-=0.4"
    );
}

// Mobile-friendly scroll animations
gsap.registerPlugin(ScrollTrigger);

// Adjust scroll trigger settings for mobile
const scrollTriggerSettings = {
  trigger: ".about-section",
  start: window.innerWidth <= 768 ? "top 80%" : "top 70%",
  end: window.innerWidth <= 768 ? "bottom 60%" : "bottom 50%",
  toggleActions: "play none none reverse",
};

const aboutTl = gsap.timeline({
  scrollTrigger: scrollTriggerSettings,
});

// Handle window resize
window.addEventListener("resize", () => {
  // Update scroll trigger settings
  ScrollTrigger.refresh();

  // Update animations based on screen size
  const isMobile = window.innerWidth <= 768;

  // Adjust tile animations for mobile
  gsap.utils.toArray(".tile").forEach((tile, i) => {
    gsap.fromTo(
      tile,
      {
        y: isMobile ? 30 : 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: tile,
          start: isMobile ? "top 90%" : "top 80%",
          end: isMobile ? "top 60%" : "top 50%",
          scrub: true,
        },
        duration: isMobile ? 0.8 : 1,
        ease: "power2.out",
        delay: i * (isMobile ? 0.05 : 0.1),
      }
    );
  });
});

aboutTl
  // .from(".section-title", {
  //   opacity: 0,
  //   y: 50,
  //   duration: 1,
  //   ease: "power3.out",
  // })
  .from(
    ".about-left",
    {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.6"
  )
  .from(
    ".about-right .about-text",
    {
      opacity: 0,
      x: 50, // Change from y: 30 to x: 50 to make it come from the right
      duration: 0.8,
      stagger: 0.2, // Animate paragraphs one after another
      ease: "power3.out",
    },
    "-=0.6"
  )
  .from(
    ".about-btn",
    {
      opacity: 1,
      scale: 0.9,
      duration: 1,
      ease: "back.out(1)",
    },
    "-=2"
  );

// Right Image Animation
gsap.from(".right-image .image-container", {
  scrollTrigger: {
    trigger: ".right-image",
    start: "top 80%",
    end: "bottom 50%",
    toggleActions: "play none none reverse",
    // markers: true, // Uncomment for debugging
  },
  opacity: 0,
  x: 1000,
  duration: 1.5,
  ease: "power3.out",
});

// Story Section Animation
const storyTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".story-section",
    start: "top 50%",
    end: "top 60% ",
    toggleActions: "play none none reverse",
    // markers:true,
  },
});

storyTl
  .to(".story-text-1", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
  })
  .to(
    ".story-text-2",
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    },
    "-=0.8"
  );
// About Image Animation
gsap.from(".about-img", {
  scrollTrigger: {
    trigger: ".about-img",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none reverse",
    // markers: true, // Uncomment for debugging
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
});

// Collection Section Animation
const collectionTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".collection-section",
    start: "top 70%",
    end: "top 20%",
    toggleActions: "play none none reverse",
    // markers: true, // Uncomment for debugging
  },
});

collectionTl
  .to(".collection-title", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  })
  .to(
    ".collection-item",
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2, // Adds a delay between each item's animation
      ease: "power3.out",
    },
    "-=0.7"
  );

// Hover effect for collection items
const collectionItems = document.querySelectorAll(".collection-item");

collectionItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(item.querySelector(".collection-name"), {
      color: "#C25B17",
      duration: 0.3,
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(item.querySelector(".collection-name"), {
      color: "#1D1D1D",
      duration: 0.3,
    });
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".tile").forEach((tile, i) => {
  gsap.fromTo(
    tile,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: tile,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
      duration: 1,
      ease: "power2.out",
      delay: i * 0.1,
    }
  );
});

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// New Section Button
const newSectionButton = document.querySelector(".new-section-button");
newSectionButton.addEventListener("click", () => {
  alert("Button clicked!");
});

// New Section Animation
const newSectionTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".new-section",
    start: "top center",
    end: "bottom top",
    scrub: true,
  },
});

newSectionTl.to(".new-section", {
  scale: 0.9,
  duration: 0.5,
  ease: "power1.out",
});

// Ticker Scrolling Effect for Inspirations Section
document.addEventListener("DOMContentLoaded", function () {
  // Make sure GSAP is loaded
  if (typeof gsap !== "undefined") {
    // Initialize the ticker animation
    initTicker();
  }
});

function initTicker() {
  const tickerWrapper = document.querySelector(".ticker-wrapper");

  if (!tickerWrapper) return;

  // Get the total width of all ticker items
  const tickerItems = document.querySelectorAll(".ticker-item");
  const tickerWidth = Array.from(tickerItems)
    .slice(0, tickerItems.length / 2)
    .reduce(
      (width, item) =>
        width +
        item.offsetWidth +
        parseInt(getComputedStyle(item).marginLeft) +
        parseInt(getComputedStyle(item).marginRight),
      0
    );

  // Create the scrolling animation
  const tickerAnimation = gsap.to(tickerWrapper, {
    x: -tickerWidth,
    ease: "none",
    duration: 20,
    repeat: -3,
    paused: true,
  });

  // Start the animation when the section is in view
  ScrollTrigger.create({
    trigger: ".inspirations-section",
    start: "top bottom",
    onEnter: () => tickerAnimation.play(),
    onLeave: () => tickerAnimation.pause(),
    onEnterBack: () => tickerAnimation.play(),
    onLeaveBack: () => tickerAnimation.pause(),
  });

  // Pause on hover effect
  tickerWrapper.addEventListener("mouseenter", () => {
    tickerAnimation.pause();
  });

  tickerWrapper.addEventListener("mouseleave", () => {
    tickerAnimation.play();
  });
}
gsap.from(".inspirations-title", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".inspirations-section",
    start: "top 80%",
  },
});

gsap.from(".inspirations-description", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".inspirations-section",
    start: "top 80%",
  },
});

gsap.from(".gallery-item", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".inspirations-gallery",
    start: "top 80%",
  },
});

// Headline scroll animation
gsap.from(".headline-container .headline", {
  x: 500,
  opacity: 0,
  duration: 2,
  delay: 0.5, // Added delay for a smoother start
  ease: "power2.out", // Added easing for a smoother mov
  scrollTrigger: {
    trigger: ".headline-container",
    start: "top 45%", // Adjusted trigger point
    end: "top 10%", // Adjusted end point
    scrub: 1, // Added smooth scrubbing
    toggleActions: "play none none reverse",
  },
});

gsap.from(".headline-container .headline1", {
  x: -500, // Changed from to() to from() and y:100 to y:50
  opacity: 0,
  duration: 2,
  delay: 0.5, // Added delay for a smoother start
  ease: "power2.out", // Added easing for a smoother mov
  scrollTrigger: {
    trigger: ".headline-container",
    start: "top 45%", // Adjusted trigger point
    end: "top 10%", // Adjusted end point
    scrub: 1, // Added smooth scrubbing
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

// Liquid Button Effect
document.addEventListener("DOMContentLoaded", function () {
  const liquidButtons = document.querySelectorAll(".liquid-btn");

  liquidButtons.forEach((button) => {
    const liquid = button.querySelector(".liquid");

    button.addEventListener("mouseenter", () => {
      gsap.to(liquid, {
        top: "0%",
        duration: 0.5,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(liquid, {
        top: "120%",
        duration: 0.5,
        ease: "power2.in",
      });
    });
  });
});

// Footer Animation
const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer-section",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

footerTl
  .from(".footer-logo-section", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  })
  .from(
    ".footer-links-column",
    {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    },
    "-=0.4"
  )
  .from(
    ".footer-bottom",
    {
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.4"
  );

// Custom cursor movement
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Optional: Add a class when hovering over clickable elements
document
  .querySelectorAll(
    "a, button, .collection-item, .ticker-item, .tile p, .tile img"
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

// Close menu when clicking on a nav link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinksContainer.classList.remove("active");
  });
});

// Navbar Functionality
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelectorAll(".nav-links");
  let lastScroll = 0;

  // Handle scroll events
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class when page is scrolled
    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Hide/show navbar based on scroll direction
    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
  });

  // Mobile menu functionality
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.forEach((links) => links.classList.toggle("active"));

    // Animate menu items
    if (hamburger.classList.contains("active")) {
      gsap.from(".nav-link", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !hamburger.contains(e.target) &&
      !Array.from(navLinks).some((links) => links.contains(e.target))
    ) {
      hamburger.classList.remove("active");
      navLinks.forEach((links) => links.classList.remove("active"));
    }
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.forEach((links) => links.classList.remove("active"));
    });
  });
});

// Add this to Company.js
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  function handleNavbarTransparency() {
    if (window.scrollY === 0) {
      navbar.classList.add("navbar-transparent");
    } else {
      navbar.classList.remove("navbar-transparent");
    }
  }
  window.addEventListener("scroll", handleNavbarTransparency);
  // Initial check in case the page is loaded at the top
  handleNavbarTransparency();
});

// Hamburger menu functionality
const hamburger = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Optional: Close menu when clicking a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
