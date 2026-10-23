(() => {
  const programs = {
    cilt: {
      label: 'CILT',
      title: 'CILT (The Chartered Institute of Logistics and Transport)',
      description: 'CILT is the world’s leading organisation for professionals in logistics, transportation and supply chain. With our global community, we are creating the deeper intelligence needed for our world’s future.',
      image: 'img/scholar-3.jpg',
      imageAlt: 'Professionals studying together'
    },
    pmp: {
      label: 'PMP® CERTIFICATION PREPARATION',
      title: 'Project Management Professional (PMP®)',
      description: 'Build project management knowledge and practical skills, then prepare for the PMP® exam with focused study and exam strategies. The PMP® certification is awarded by PMI.',
      image: 'img/scholar-6.jpg',
      imageAlt: 'Learners collaborating at laptops'
    },
    'tvet-cdacc': {
      label: 'TVET CDACC',
      title: 'TVET Curriculum Development Assessment and Certification (CDACC)',
      description: 'Learn about curriculum development, assessment, and certification in the TVET context. Contact PECS to discuss training aligned with your organization’s needs.',
      image: 'img/scholar-5.jpg',
      imageAlt: 'Learners discussing books with an instructor'
    },
    cipd: {
      label: 'CIPD',
      title: 'Chartered Institute of Personnel and Development (CIPD)',
      description: 'The CIPD Intermediate qualifications provide a broader perspective of the people profession, covering the practical knowledge and skills needed to manage people and organisations effectively.\n\nThe Intermediate Certificate in HR develops knowledge across managing and coordinating the HR function, resourcing and talent planning, employee engagement, and using information in HR. The Intermediate Diploma adds organisation development, organisation design, and improving organisational performance at a deeper level.\n\nThese qualifications help HR professionals apply sound judgement, analyse organisational issues, solve people-management problems, and contribute to stronger workplaces, better leadership, and sustainable business performance.',
      image: 'img/scholar-6.jpg',
      imageAlt: 'Learners collaborating at laptops'
    },
    'cpsp-k': {
      label: 'KISEB PROGRAM · KNQA LEVEL 7',
      title: 'KISEB Certified Procurement and Supply Professional of Kenya (CPSP-K)',
      description: 'PECS provides training for candidates pursuing the CPSP-K qualification.',
      image: 'img/scholar-5.jpg',
      imageAlt: 'Learners studying with an instructor'
    },
    'short-courses': {
      label: 'PECS SHORT COURSES',
      title: 'Procurement & Supply Short Courses',
      description: 'Explore focused training in procurement practice, policy, contracts, logistics, inventory, leadership, project management, and more. PECS offers 25 short courses and can discuss delivery to suit your team.',
      image: 'img/scholar-3.jpg',
      imageAlt: 'Professionals studying procurement together'
    }
  };

  const program = programs[new URLSearchParams(window.location.search).get('program')];
  const content = document.getElementById('program-content');
  const notFound = document.getElementById('program-not-found');

  if (!program) {
    content.hidden = true;
    notFound.hidden = false;
    return;
  }

  document.title = `${program.title} | Procura Edge Consultancy & Services`;
  document.getElementById('program-label').textContent = program.label;
  document.getElementById('program-title').textContent = program.title;
  document.getElementById('program-heading').textContent = program.title;
  document.getElementById('program-description').textContent = program.description;
  const image = document.getElementById('program-image');
  image.src = program.image;
  image.alt = program.imageAlt;

  const contactLink = document.getElementById('program-contact-link');
  contactLink.href = `contact.html?subject=${encodeURIComponent(`Enquiry about ${program.title}`)}`;
})();
