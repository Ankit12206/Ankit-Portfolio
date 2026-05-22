// app.js
import { portfolioData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  renderProfileData();
  renderProjects();
  renderCredentials();
  initScrollReveal();
  initContactForm();
});

// 1. Custom Pointer / Cursor Logic
function initCursor() {
  const cursor = document.getElementById('js-cursor');
  if (!cursor) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  // Track mouse coordinates
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth lerp (linear interpolation) cursor position
  function tick() {
    const ease = 0.15;
    cursorX += (mouseX - cursorX) * ease;
    cursorY += (mouseY - cursorY) * ease;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(tick);
  }
  tick();

  // Add hover effects on interactive elements
  const interactives = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-tag');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovered');
    });
  });
}

// 2. Render General Profile Metadata
function renderProfileData() {
  const p = portfolioData.profile;
  const c = portfolioData.contact;

  // Header and Title
  const logo = document.getElementById('js-header-logo');
  if (logo) logo.textContent = p.name;
  
  const ghostFooter = document.getElementById('js-footer-ghost');
  if (ghostFooter) ghostFooter.textContent = p.name;

  // Hero subtitles
  const heroSubtitle = document.getElementById('js-hero-subtitle');
  if (heroSubtitle) heroSubtitle.textContent = p.shortTitle;

  const heroRole = document.getElementById('js-hero-meta-role');
  if (heroRole) heroRole.textContent = p.fullTitle.split('|')[0].trim(); // Get main tag

  const heroLoc = document.getElementById('js-hero-meta-loc');
  if (heroLoc) heroLoc.textContent = p.location;

  const heroCoord = document.getElementById('js-hero-meta-coord');
  if (heroCoord) heroCoord.textContent = p.coordinates;

  // Social Links
  const linkedin = document.getElementById('js-linkedin-link');
  if (linkedin && c.linkedin) linkedin.href = c.linkedin;

  const github = document.getElementById('js-github-link');
  if (github && c.github) github.href = c.github;

  // Manifesto content
  const manifestoText = document.getElementById('js-manifesto-text');
  const manifestoLabel = document.getElementById('js-manifesto-label');
  
  if (manifestoLabel) manifestoLabel.textContent = p.manifestoLabel;

  if (manifestoText) {
    // Process text to insert highlighted elements and paragraph indents
    let htmlContent = p.manifestoText;
    
    // Highlight matching block
    if (p.manifestoHighlight) {
      const escapedHighlight = p.manifestoHighlight.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`(${escapedHighlight})`, 'gi');
      htmlContent = htmlContent.replace(regex, '<span class="highlight">$1</span>');
    }

    // Split at mid-point or period for visual double-line brutalist paragraph separation
    const sentences = htmlContent.split('. ');
    if (sentences.length > 2) {
      const mid = Math.ceil(sentences.length / 2);
      const part1 = sentences.slice(0, mid).join('. ') + '.';
      const part2 = sentences.slice(mid).join('. ');
      htmlContent = `${part1} <span class="indent-para">${part2}</span>`;
    }

    manifestoText.innerHTML = htmlContent;
  }

  // Footer Contact Details
  const footerEmail = document.getElementById('js-footer-email');
  if (footerEmail) footerEmail.textContent = `EMAIL: ${c.email}`;
  
  const footerPhone = document.getElementById('js-footer-phone');
  if (footerPhone) footerPhone.textContent = `PHONE: ${c.phone}`;
  
  const footerAddress = document.getElementById('js-footer-address');
  if (footerAddress) footerAddress.textContent = `ADDR: ${c.address}`;
}

// 3. Render Projects Grid (Asymmetrical Layout mapping)
function renderProjects() {
  const projectsGrid = document.getElementById('projects');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = ''; // Clear fallback

  portfolioData.projects.forEach((proj, idx) => {
    // Determine asymmetric grid properties based on index
    // Alternating between size-large (7 cols) and size-small (5 cols)
    const isLarge = idx % 4 === 0 || idx % 4 === 3;
    const isOffset = idx % 2 === 1;

    const sizeClass = isLarge ? 'size-large' : 'size-small';
    const aspectClass = isLarge ? 'aspect-4-5' : 'aspect-3-4';
    const offsetClass = isOffset ? 'offset-top' : '';

    const card = document.createElement('div');
    card.className = `project-card ${sizeClass} ${offsetClass} reveal-item`;
    
    // Check if image is available, fallback to high-contrast graphic placeholder
    const imagePath = proj.image;

    card.innerHTML = `
      <div class="project-image-container ${aspectClass}">
        <div class="neon-badge">${proj.badge || 'VIEW PROJECT'}</div>
        <img src="${imagePath}" alt="${proj.title}" class="project-image" onerror="this.src='https://picsum.photos/800/1000?grayscale&random=${idx}'">
      </div>
      <div class="project-details">
        <div class="project-title-row">
          <h3 class="project-title">${proj.title}</h3>
          <span class="project-year">${proj.year}</span>
        </div>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tags">
          <span class="project-tag">${proj.category}</span>
        </div>
      </div>
    `;

    // Click behavior (opens github or link in new tab)
    card.addEventListener('click', () => {
      if (proj.link) {
        window.open(proj.link, '_blank');
      }
    });

    projectsGrid.appendChild(card);
  });
}

// 4. Render Education, Certifications & Skills
function renderCredentials() {
  // Education
  const eduContainer = document.getElementById('js-education-container');
  if (eduContainer) {
    eduContainer.innerHTML = '';
    portfolioData.education.forEach(edu => {
      const item = document.createElement('div');
      item.className = 'cred-item reveal-item';
      item.innerHTML = `
        <h4 class="cred-institution">${edu.institution}</h4>
        <p class="cred-degree monospace">${edu.degree}</p>
        <p class="cred-period">${edu.period} [${edu.status}]</p>
        <p class="cred-desc monospace">${edu.department}</p>
      `;
      eduContainer.appendChild(item);
    });
  }

  // Certifications
  const certContainer = document.getElementById('js-certifications-container');
  if (certContainer) {
    certContainer.innerHTML = '';
    portfolioData.certifications.forEach(cert => {
      const item = document.createElement('div');
      item.className = 'cred-item reveal-item';
      item.innerHTML = `
        <h4 class="cred-institution">${cert.title}</h4>
        <p class="cred-degree monospace">${cert.issuer}</p>
        <p class="cred-period">${cert.date}</p>
        <p class="cred-desc">${cert.description}</p>
      `;
      certContainer.appendChild(item);
    });
  }

  // Skills
  const skillsContainer = document.getElementById('js-skills-container');
  if (skillsContainer) {
    skillsContainer.innerHTML = '';
    portfolioData.skills.forEach(skill => {
      const tag = document.createElement('span');
      tag.className = 'skill-tag reveal-item';
      tag.textContent = skill.name;
      skillsContainer.appendChild(tag);
    });
  }
}

// 5. Scroll Reveal Intersection Observer
function initScrollReveal() {
  // Select all dynamic cards, credentials, grid dividers and headers
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Stop tracking after element is revealed
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Allow elements some time to render dynamically before querying
  setTimeout(() => {
    const revealElements = document.querySelectorAll('.reveal-item, .manifesto-text, .section-divider');
    revealElements.forEach(el => {
      el.classList.add('reveal-item'); // Ensure base class is present
      observer.observe(el);
    });
  }, 100);
}

// 6. Contact Form & Toast notification logic
function initContactForm() {
  const form = document.getElementById('js-contact-form');
  const toastContainer = document.getElementById('js-toast-container');

  if (!form || !toastContainer) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    if (!emailInput || !messageInput) return;

    const email = emailInput.value;
    const message = messageInput.value;

    // Simulate submission
    showToast(`MESSAGE SENT SUCCESSFUL. ID: ${Math.random().toString(36).substring(2, 9).toUpperCase()}`);
    
    // Reset fields
    form.reset();
  });

  function showToast(text) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span>STATUS // ${text}</span>
    `;

    toastContainer.appendChild(toast);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s var(--transition-smooth), transform 0.4s var(--transition-smooth)';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 4000);
  }
}
