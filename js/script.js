const OFFSET = 100;

const topNav = document.getElementById('topNav');

window.addEventListener('scroll', () => {
  topNav.classList.toggle('scrolled', window.scrollY > 20);
});

const navHeight = topNav.offsetHeight;

const topNavItems = [
  { nav: document.getElementById('homeNav'), section: document.getElementById('home') },
  { nav: document.getElementById('introduceNav'), section: document.getElementById('introduce') },
  { nav: document.getElementById('projectsNav'), section: document.getElementById('projects') },
  { nav: document.getElementById('contactNav'), section: document.getElementById('contact') },
];

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // ✅ 화면 중앙 기준선
  const viewportCenter = scrollY + window.innerHeight / 2 - OFFSET;

  topNavItems.forEach((item, index) => {
    const currentTop =
      item.section.getBoundingClientRect().top + scrollY - navHeight;

    const nextTop =
      topNavItems[index + 1]
        ? topNavItems[index + 1].section.getBoundingClientRect().top + scrollY - navHeight
        : Infinity;

    if (viewportCenter >= currentTop && viewportCenter < nextTop) {
      item.nav.classList.add('active', 'text-primary');
    } else {
      item.nav.classList.remove('active', 'text-primary');
    }
  });
});

const sideNav = document.getElementById('sideNav');
const introduceSection = document.getElementById('introduce');
const projectsSection = document.getElementById('projects');

window.addEventListener('scroll', () => {
  const scrollCenter = window.scrollY + window.innerHeight / 2;

  const introduceTop = introduceSection.offsetTop;
  const projectsTop = projectsSection.offsetTop;

  if (scrollCenter >= introduceTop && scrollCenter < projectsTop) {
    sideNav.classList.add('is-visible');
  } else {
    sideNav.classList.remove('is-visible');
  }
});

const sideNavItems = [
  {
    section: document.getElementById('profile'),
    nav: document.getElementById('profileNav')
  },
  {
    section: document.getElementById('educations'),
    nav: document.getElementById('educationsNav')
  },
  {
    section: document.getElementById('certificates'),
    nav: document.getElementById('certificatesNav')
  }
];

window.addEventListener('scroll', () => {
  const scrollCenter = window.scrollY + window.innerHeight / 2;

  sideNavItems.forEach((item, index) => {
    const currentTop =
      item.section.getBoundingClientRect().top + window.scrollY;

    const nextTop =
      sideNavItems[index + 1]
        ? sideNavItems[index + 1].section.getBoundingClientRect().top + window.scrollY
        : Infinity;

    if (index === 0 && scrollY < nextTop / 2) {
      item.nav.classList.add('text-primary');
      return;
    }

    if (scrollCenter >= currentTop && scrollCenter < nextTop) {
      item.nav.classList.add('text-primary');
    } else {
      item.nav.classList.remove('text-primary');
    }
  });
});

const projectSideNav = document.getElementById('projectSideNav');
window.addEventListener('scroll', () => {
  const top = document.getElementById('projects').offsetTop;
  const bottom = document.getElementById('contact').offsetTop + OFFSET;
  const scrollY = window.scrollY + window.innerHeight / 2;

  if (!sideNav.classList.contains('is-visible') &&scrollY >= top && scrollY <= bottom) {
    projectSideNav.classList.add('is-visible');
  } else {
    projectSideNav.classList.remove('is-visible');
  }
});

const projectSideNavItems = [
  {
    section: document.getElementById('project1'),
    nav: document.getElementById('project1Nav')
  },
  {
    section: document.getElementById('project2'),
    nav: document.getElementById('project2Nav')
  },
  {
    section: document.getElementById('project3'),
    nav: document.getElementById('project3Nav')
  }
];
window.addEventListener('scroll', () => {
  const scrollCenter = window.scrollY + window.innerHeight / 2;

  projectSideNavItems.forEach((item, index) => {
    const currentTop =
      item.section.getBoundingClientRect().top + window.scrollY;

    const nextTop =
      projectSideNavItems[index + 1]
        ? projectSideNavItems[index + 1].section.getBoundingClientRect().top + window.scrollY
        : Infinity;

    if (index === 0 && scrollCenter < nextTop - 1) {
      item.nav.classList.add('text-primary');
      return;
    }
    
    if (scrollCenter >= currentTop - 1 && scrollCenter < nextTop - 1) {
      item.nav.classList.add('text-primary');
    } else {
      item.nav.classList.remove('text-primary');
    }
  });
});

const adjectives = ["열정적인", "도전적인", "긍정적인"];
const p = document.getElementById("intro-text");
let index = 0;
let charIndex = 0;
let deleting = false;

function typeAdjective() {
  const current = adjectives[index];
  if (!deleting) {
    p.innerHTML = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeAdjective, 1250);
      return;
    }
  } else {
    p.innerHTML = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      index = (index + 1) % adjectives.length;
    }
  }
  setTimeout(typeAdjective, deleting ? 125 : 125);
}

window.addEventListener("DOMContentLoaded", typeAdjective);