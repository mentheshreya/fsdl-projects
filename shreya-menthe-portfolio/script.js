/* ==========================================================================
   Shreya Menthe Portfolio - JavaScript Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initNavbar();
  initSkillsFilter();
  initProjectModals();
  initContactActions();
  initToast();
});

/* --------------------------------------------------------------------------
   1. Typewriter Effect
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const words = [
    'Computer Engineering Student',
    'Generative AI Minor @ PCCOE',
    'Data & Machine Learning Developer',
    'Scalable REST API Engineer'
  ];
  
  const target = document.getElementById('typewriter');
  if (!target) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseTime = 1800;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delta = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delta = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delta = 400;
    }

    setTimeout(type, delta);
  }

  type();
}

/* --------------------------------------------------------------------------
   2. Sticky Navbar & Navigation Observer
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = id('navbar');
  const mobileToggle = id('mobileToggle');
  const navMenu = id('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Active Link Observer
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Skills Category Filter
   -------------------------------------------------------------------------- */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. Project Info Modals
   -------------------------------------------------------------------------- */
function initProjectModals() {
  const modalTriggers = document.querySelectorAll('.modal-trigger');
  const projectModal = id('projectModal');
  const modalClose = id('modalClose');
  const modalBody = id('modalBody');

  const projectDetails = {
    ecosnap: {
      title: 'Eco-Snap – AI Receipt Scanner',
      category: 'AI & Computer Vision',
      tech: ['React.js', 'Python / Node.js', 'Tesseract OCR', 'REST APIs'],
      desc: 'Eco-Snap is an intelligent receipt scanning application designed to automate expense digitization for individuals and businesses. Users upload or photograph receipts, and the OCR engine parses vendor names, dates, line items, tax, and total transaction amounts into structured JSON data.',
      highlights: [
        'Integrated Optical Character Recognition (OCR) with pre-processing filters for clean text extraction.',
        'Reduced manual accounting entry time by over 80%.',
        'Built dynamic React dashboard displaying automated expense analytics.'
      ]
    },
    saferoutes: {
      title: 'Safe Routes – Women & Child Safety App',
      category: 'Safety & Geolocation Services',
      tech: ['GoLang', 'Python', 'Google Maps API', 'HTML5 / CSS3'],
      desc: 'Safe Routes is a dedicated safety web platform that maps danger zones and provides emergency safety indicators for commuters. It empowers women and children with real-time location sharing and emergency service routing.',
      highlights: [
        'Implemented interactive Google Maps API integration with danger zone heatmap overlays.',
        'Built real-time emergency broadcast trigger connecting nearby emergency services.',
        'High-performance GoLang backend microservice for low-latency location processing.'
      ]
    }
  };

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const key = trigger.getAttribute('data-project');
      const data = projectDetails[key];
      if (!data || !projectModal || !modalBody) return;

      modalBody.innerHTML = `
        <span class="project-badge badge-web" style="margin-bottom: 0.5rem;">${data.category}</span>
        <h2 style="font-size: 1.8rem; margin: 0.5rem 0 1rem 0;">${data.title}</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">${data.desc}</p>
        
        <h4 style="margin-bottom: 0.75rem; color: var(--text-main);">Key Features & Engineering Highlights:</h4>
        <ul style="padding-left: 1.25rem; color: var(--text-muted); margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          ${data.highlights.map((h) => `<li>${h}</li>`).join('')}
        </ul>

        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${data.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      `;

      projectModal.classList.remove('hidden');
    });
  });

  if (modalClose && projectModal) {
    modalClose.addEventListener('click', () => {
      projectModal.classList.add('hidden');
    });

    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.classList.add('hidden');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   5. Contact Actions
   -------------------------------------------------------------------------- */
function initContactActions() {
  const copyEmailBtn = id('copyEmailBtn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('shreyamenthe@gmail.com').then(() => {
        showToast('Copied shreyamenthe@gmail.com to clipboard');
      }).catch(() => {
        showToast('shreyamenthe@gmail.com');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   6. Toast Notification Utility
   -------------------------------------------------------------------------- */
function initToast() {
  window.showToast = function (message) {
    const container = id('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--secondary-glow);"></i> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };
}

function id(name) {
  return document.getElementById(name);
}
