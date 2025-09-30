// JOIN PAGE - MODAL SYSTEM FOR CONTRIBUTE CARDS
// Place this in: arcup-astro/src/scripts/join-modals.js

const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeaIq1c0a9zu0R5Z0_GHP73HxKKjDr2vcjgjoiV2L3PxSv-ww/viewform?usp=dialog";

// Modal content for each contribution type
const modalContent = {
  physics: {
    title: "Applied Physics: Plasma Research",
    icon: "⚛️",
    description: "Focus on dielectric barrier discharge (DBD) systems and the fundamental physics of plasma generation and behavior.",
    whatYoullDo: [
      "Design and optimize DBD plasma reactors",
      "Measure key plasma parameters (electron density, temperature, electric field)",
      "Characterize reactive species generation (OH, O, NO, etc.)",
      "Model plasma-surface interactions using computational tools",
      "Develop and document experimental protocols for plasma generation",
      "Conduct voltage-current measurements and spectroscopy",
      "Collaborate with chemists on reactive species chemistry"
    ],
    skills: [
      "Understanding of electromagnetism and plasma physics fundamentals",
      "Experience with high-voltage systems and electrical safety",
      "Familiarity with diagnostic tools (oscilloscopes, spectrometers)",
      "Computational modeling skills (COMSOL, Python) are a plus",
      "Strong documentation and experimental design abilities"
    ],
    projects: [
      "Optimizing DBD electrode configurations",
      "Measuring reactive species lifetimes",
      "Scaling plasma reactors for agricultural applications"
    ],
    ideal: "Physicists, plasma engineers, electrical engineers, students with physics/EE training",
    formSubject: "Applied Physics Contribution"
  },
  
  chemistry: {
    title: "Applied Chemistry: Reactive Species & Pollution",
    icon: "⚗️",
    description: "Investigate chemical interactions between plasma-generated reactive species and target compounds like pollutants, nutrients, and organic matter.",
    whatYoullDo: [
      "Analyze reactive species chemistry and reaction pathways",
      "Test plasma treatment effectiveness on various pollutants (pesticides, heavy metals, organics)",
      "Measure chemical degradation kinetics and byproducts",
      "Design experiments to optimize treatment conditions",
      "Document chemical protocols and safety procedures",
      "Collaborate with biologists on plant-chemistry interactions",
      "Conduct solution chemistry analysis (pH, conductivity, ion concentrations)"
    ],
    skills: [
      "Background in analytical chemistry or environmental chemistry",
      "Experience with lab techniques (spectroscopy, chromatography, titrations)",
      "Understanding of oxidation-reduction chemistry",
      "Safety training for handling chemicals and reactive species",
      "Strong lab notebook and documentation practices"
    ],
    projects: [
      "Testing plasma water treatment for agricultural runoff",
      "Measuring reactive species in treated water",
      "Analyzing nutrient transformation pathways"
    ],
    ideal: "Chemists, chemical engineers, environmental scientists, students with chemistry training",
    formSubject: "Applied Chemistry Contribution"
  },
  
  biology: {
    title: "Applied Biology: Plasma-Plant Interactions",
    icon: "🌱",
    description: "Study how plasma treatment and reactive species affect plant physiology, growth, and health in agricultural contexts.",
    whatYoullDo: [
      "Design plant exposure experiments with controlled plasma treatment",
      "Monitor plant growth metrics (germination, biomass, yield)",
      "Analyze plant health indicators (chlorophyll, photosynthesis, stress markers)",
      "Investigate biological pathways affected by reactive species",
      "Document ecological outcomes and long-term effects",
      "Collaborate with farmers on field trial design",
      "Conduct soil microbiology and plant biochemistry analysis"
    ],
    skills: [
      "Background in plant biology, agronomy, or ecology",
      "Experience with plant cultivation and experimental design",
      "Understanding of plant physiology and stress responses",
      "Familiarity with biological analysis techniques",
      "Field research experience is valuable but not required"
    ],
    projects: [
      "Testing plasma-treated water on seed germination",
      "Measuring plant growth responses to plasma exposure",
      "Studying soil microbial changes after plasma treatment"
    ],
    ideal: "Biologists, agricultural scientists, ecologists, students with biology/agronomy training",
    formSubject: "Applied Biology Contribution"
  },
  
  engineering: {
    title: "Open Hardware Engineering",
    icon: "🛠️",
    description: "Build, perfect, test, and document Arc^ hardware following open source principles and the Arc^ method.",
    whatYoullDo: [
      "Design plasma device components using CAD software",
      "3D print, machine, or fabricate physical prototypes",
      "Build and assemble complete plasma systems",
      "Test prototypes rigorously and iterate on designs",
      "Develop safety protocols and testing frameworks",
      "Create comprehensive build guides and bills of materials (BOMs)",
      "Write technical documentation for replication",
      "Code analysis tools or automation scripts (Python, Arduino) if needed",
      "Ensure all designs follow CERN OHL-S licensing"
    ],
    skills: [
      "Mechanical or electrical engineering background",
      "CAD proficiency (Fusion 360, FreeCAD, OnShape)",
      "Hands-on building skills (soldering, assembly, testing)",
      "Technical writing and documentation abilities",
      "Software/coding skills helpful but not required",
      "Safety-first mindset for high-voltage work"
    ],
    projects: [
      "Designing modular DBD reactor components",
      "Building low-cost plasma generators for field testing",
      "Creating open source monitoring systems"
    ],
    ideal: "Mechanical/electrical engineers, makers, software developers, technical writers, students with engineering/CS training",
    formSubject: "Engineering Contribution"
  },
  
  research: {
    title: "Research & Replication",
    icon: "📊",
    description: "Conduct rigorous experiments, replicate existing protocols, analyze data, and provide feedback on Arc^ technology across all disciplines.",
    whatYoullDo: [
      "Replicate existing Arc^ protocols and document results",
      "Analyze open datasets from Arc^ projects",
      "Write up experimental findings following Arc^ standards",
      "Review literature and methods for improvement",
      "Provide constructive feedback on technology iterations",
      "Conduct statistical analysis and data visualization",
      "Help identify what works, what doesn't, and why"
    ],
    skills: [
      "Scientific method and experimental design knowledge",
      "Data analysis skills (Excel, R, Python, or similar)",
      "Attention to detail and rigorous documentation",
      "Critical thinking and literature review abilities",
      "Willingness to learn across multiple disciplines"
    ],
    projects: [
      "Replicating plasma treatment protocols",
      "Analyzing multi-site field trial data",
      "Conducting systematic literature reviews"
    ],
    ideal: "Independent researchers, students (any discipline), data analysts, anyone interested in rigorous documentation",
    formSubject: "Research Contribution"
  },
  
  community: {
    title: "Community Partnerships",
    icon: "🌍",
    description: "Co-design research with communities, host field trials, and ensure Arc^ technology serves real-world needs with ethical practices.",
    whatYoullDo: [
      "Host field trials of plasma technology on your land",
      "Share traditional ecological knowledge and local expertise",
      "Co-design experiments based on community needs and priorities",
      "Monitor long-term ecological and social outcomes",
      "Guide ethical research practices and consent protocols",
      "Connect Arc^ with local networks and initiatives",
      "Provide feedback on technology usability and appropriateness"
    ],
    skills: [
      "Connection to land and ecological systems",
      "Experience with farming, gardening, or land stewardship",
      "Community organizing or facilitation skills",
      "Traditional or local ecological knowledge",
      "Commitment to consent-based, participatory research"
    ],
    projects: [
      "Testing plasma water treatment in agricultural settings",
      "Evaluating ecological impacts on working farms",
      "Co-designing technology for specific local contexts"
    ],
    ideal: "Farmers, land stewards, community organizers, environmental groups, indigenous knowledge holders",
    formSubject: "Community Partnership"
  }
};

// Create modal HTML
function createModal() {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'contribute-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3 id="modal-title"></h3>
        <button class="modal-close" aria-label="Close modal">&times;</button>
      </div>
      <div class="modal-body" id="modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

// Populate modal with content
function populateModal(type) {
  const content = modalContent[type];
  if (!content) return;
  
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  
  title.innerHTML = `<span style="font-size: 2rem; margin-right: 0.5rem;">${content.icon}</span> ${content.title}`;
  
  body.innerHTML = `
    <div class="modal-section">
      <p style="font-size: 1.1rem; color: var(--color-text);">${content.description}</p>
    </div>
    
    <div class="modal-section">
      <h4>What You'll Do</h4>
      <ul>
        ${content.whatYoullDo.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    
    <div class="modal-section">
      <h4>Skills & Background</h4>
      <ul>
        ${content.skills.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    
    <div class="modal-section">
      <h4>Example Projects</h4>
      <ul>
        ${content.projects.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    
    <div class="modal-section">
      <h4>Ideal For</h4>
      <p>${content.ideal}</p>
    </div>
    
    <div class="modal-cta">
      <a href="${formURL}&entry.123456789=${encodeURIComponent(content.formSubject)}" 
         target="_blank" 
         class="button">
        Express Interest
      </a>
      <button class="button button-outline modal-close-btn">Close</button>
    </div>
  `;
}

// Open modal
function openModal(type) {
  const modal = document.getElementById('contribute-modal');
  populateModal(type);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Focus management
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.focus();
}

// Close modal
function closeModal() {
  const modal = document.getElementById('contribute-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Create modal
  createModal();
  
  // Add event listeners to modal trigger buttons
  document.querySelectorAll('[data-modal-trigger]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const type = btn.getAttribute('data-modal-trigger');
      openModal(type);
    });
  });
  
  // Close modal on close button click
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-close') || 
        e.target.classList.contains('modal-close-btn')) {
      closeModal();
    }
  });
  
  // Close modal on overlay click
  document.getElementById('contribute-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'contribute-modal') {
      closeModal();
    }
  });
  
  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  // FAQ accordion functionality
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.closest('.faq-item');
      const isActive = faqItem.classList.contains('active');
      
      // Close all other FAQs (optional - remove these 3 lines if you want multiple open at once)
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      
      // Toggle current FAQ
      if (!isActive) {
        faqItem.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      } else {
        faqItem.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });
});