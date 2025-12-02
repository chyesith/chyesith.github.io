// ============ YEAR IN FOOTER ============
document.getElementById("year").textContent = new Date().getFullYear();

// ============ NAV TOGGLE & SMOOTH SCROLL ============
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navLinkEls = document.querySelectorAll(".nav-link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Smooth scroll + close mobile nav
navLinkEls.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      if (target) {
        const yOffset = -70; // nav height
        const y =
          target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    navLinks.classList.remove("show");
  });
});

// ============ ACTIVE NAV ON SCROLL ============
const sections = document.querySelectorAll("section[id]");
const navMap = {};
navLinkEls.forEach((link) => {
  if (link.hash) {
    navMap[link.hash.substring(1)] = link;
  }
});

const setActiveNav = () => {
  let currentId = "";
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const top = rect.top + window.pageYOffset - 120;
    const bottom = top + rect.height;
    if (scrollY >= top && scrollY < bottom) {
      currentId = section.id;
    }
  });

  navLinkEls.forEach((l) => l.classList.remove("active"));
  if (currentId && navMap[currentId]) {
    navMap[currentId].classList.add("active");
  }
};

window.addEventListener("scroll", setActiveNav);
setActiveNav();

// ============ BACK TO TOP ============
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============ PARTICLES JS (HERO ONLY) ============
if (window.particlesJS) {
  particlesJS("hero-particles", {
    particles: {
      number: { value: 55, density: { enable: true, value_area: 800 } },
      color: { value: ["#38bdf8", "#a855f7", "#22c55e"] },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#64748b",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: false },
        resize: true,
      },
      modes: {
        repulse: { distance: 90, duration: 0.4 },
      },
    },
    retina_detect: true,
  });
}

// ============ CONTACT "COPY TO EMAIL" BEHAVIOUR ============
const fakeSubmitBtn = document.getElementById("fake-submit");
if (fakeSubmitBtn) {
  fakeSubmitBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email-contact").value.trim();
    const message = document.getElementById("message-contact").value.trim();

    const fullMessage =
      `Hi Yesitha,\n\n` +
      `${message || "I'd like to connect with you."}\n\n` +
      `From: ${name || "A recruiter / hiring manager"} (${
        email || "no email provided"
      })`;

    const mailto = `mailto:chyesith@gmail.com?subject=${encodeURIComponent(
      "New opportunity / enquiry"
    )}&body=${encodeURIComponent(fullMessage)}`;

    window.location.href = mailto;
  });
}
