// portfolio_data.js
// Single source of truth for Ankit Shukla's portfolio.
// Update these values to instantly refresh the website content.

export const portfolioData = {
  profile: {
    name: "ANKIT SHUKLA",
    shortTitle: "DEVELOPER / AI ENTHUSIAST",
    fullTitle: "BCA STUDENT @UIET CSJMU | DSA & AI ENTHUSIAST | WEB DEVELOPMENT | PYTHON/C++ EXPLORER",
    location: "KANPUR NAGAR, UP, INDIA",
    coordinates: "26.4499° N, 80.3319° E",
    manifestoLabel: "MANIFESTO",
    manifestoText: "I MERGE DISCIPLINED DATA STRUCTURES WITH HARSH INDUSTRIAL AESTHETICS. BEYOND CONVENTIONAL WEB DESIGN, MY CODE PLUNGES INTO HIGH-PERFORMANCE ALGORITHMS AND RAW UTILITY, TRANSLATING INTUITIVE USER EXPERIENCES INTO SOLID PYTHON AND C++ LOGIC.",
    manifestoHighlight: "HIGH-PERFORMANCE ALGORITHMS AND RAW UTILITY",
    tagline: "SEASON 04 / EDITION 2026"
  },
  contact: {
    email: "ankitshukla12206@gmail.com",
    phone: "+91 9235220655",
    address: "Sidharth Nagar, Gooba Garden, Kalyanpur, Kanpur",
    linkedin: "https://www.linkedin.com/in/ankit-shukla-982a752b5",
    github: "https://github.com" // Placeholder, editable by user
  },
  skills: [
    { name: "ENGINEERING", category: "core" },
    { name: "WEB DEVELOPMENT", category: "core" },
    { name: "DATA STRUCTURES & ALGORITHMS", category: "core" },
    { name: "PYTHON EXPLORATION", category: "core" },
    { name: "C++ PROGRAMMING", category: "core" },
    { name: "E-COMMERCE ENGINES", category: "specialty" },
    { name: "IMAGE EDITING & VFX", category: "specialty" },
    { name: "ARTIFICIAL INTELLIGENCE", category: "specialty" }
  ],
  education: [
    {
      institution: "CHHATRAPATI SHAHU JI MAHARAJ UNIVERSITY (CSJMU)",
      location: "KANPUR, INDIA",
      degree: "BACHELOR OF COMPUTER APPLICATIONS (BCA)",
      department: "COMPUTER AND INFORMATION SCIENCES AND SUPPORT SERVICES",
      period: "JULY 2024 - AUGUST 2027",
      status: "IN PROGRESS"
    }
  ],
  certifications: [
    {
      title: "CERTIFICATE OF PARTICIPATION - HP POWER LAB 2.0",
      issuer: "HP INDIVIDUAL ROUND 1 ONLINE ASSESSMENT",
      date: "2025",
      description: "Successfully participated and earned credential in the advanced technical challenge."
    }
  ],
  projects: [
    {
      id: "proj-01",
      title: "NEUROMORPH AI",
      category: "AI & IMAGE EDITING",
      year: "2025",
      description: "An automated image rendering and processing pipeline written in Python. It features high-contrast custom filters, pixel-manipulation matrices, and noise shaders.",
      image: "assets/proj_neuromorph.png",
      link: "https://github.com",
      badge: "PYTHON/VFX"
    },
    {
      id: "proj-02",
      title: "KRYPTON E-COMM",
      category: "WEB DEVELOPMENT",
      year: "2025",
      description: "A lightning-fast, brutalist e-commerce interface built using pure CSS custom layouts. Integrated dynamic filtering, local cart caching, and raw UI interactions.",
      image: "assets/proj_krypton.png",
      link: "https://github.com",
      badge: "E-COMMERCE"
    },
    {
      id: "proj-03",
      title: "AETHELGARD DSA VISUALIZER",
      category: "ALGORITHMS & C++",
      year: "2026",
      description: "A performance-focused visualizer for advanced tree and graph algorithms. Built in C++ and compiled to WebAssembly for rendering node traversals.",
      image: "assets/proj_aethelgard.png",
      link: "https://github.com",
      badge: "DSA/WASM"
    },
    {
      id: "proj-04",
      title: "VAPOR RENDER ENGINE",
      category: "SYSTEMS",
      year: "2026",
      description: "A hardware-accelerated rendering sandbox using Python and OpenGL. It applies custom shadow mapping, grain animations, and physical coordinate systems.",
      image: "assets/proj_vapor.png",
      link: "https://github.com",
      badge: "GRAPHICS/GL"
    }
  ]
};
