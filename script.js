const projects = document.querySelectorAll('[data-project]');

// Replace concept descriptions and contact details here with verified personal information.
const details = {
  haevichi: {
    category: '01 / WEB DESIGN', title: 'Haevichi',
    description: '해비치 호텔 웹사이트 프로젝트입니다. 기존 haevichi-tt 저장소에서 HTML, CSS와 인터랙션 작업을 확인할 수 있습니다. 조개 이미지는 프로젝트를 소개하기 위한 그래픽이며 실제 사이트 화면은 아닙니다.',
    link: 'https://github.com/glassbox71/haevichi-tt', linkLabel: '프로젝트 저장소 보기 ↗'
  },
  onul: {
    category: '02 / BRAND CONCEPT', title: 'Onul',
    description: '식물과 함께하는 일상을 상상한 브랜드 콘셉트 예시입니다. 부드러운 초록색과 간결한 형태로 편안한 분위기를 표현했습니다. 실제 작업 내역이 제공되면 프로젝트 이미지와 설명을 교체할 수 있습니다.'
  },
  perspective: {
    category: '03 / GRAPHIC CONCEPT', title: 'New perspectives',
    description: '새로운 시각을 주제로 만든 그래픽 콘셉트 예시입니다. 큰 타이포그래피와 따뜻한 오렌지색으로 관점의 변화를 표현했습니다. 실제 포트폴리오 작업물로 교체할 수 있습니다.'
  },
  contact: {
    category: 'LET’S CONNECT', title: 'Say hello.',
    description: '연락처는 아직 등록되지 않았습니다. 공개할 이메일이나 소셜 프로필을 전달해 주시면 이 버튼을 실제 연락 링크로 연결할 수 있습니다.'
  }
};
const dialog = document.querySelector('#detail-dialog');
function openDetails(key) {
  const item = details[key];
  document.querySelector('#dialog-category').textContent = item.category;
  document.querySelector('#dialog-title').textContent = item.title;
  document.querySelector('#dialog-description').textContent = item.description;
  const extra = document.querySelector('#dialog-extra');
  extra.replaceChildren();
  if (item.link) {
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.linkLabel;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    extra.append(link);
  }
  dialog.showModal();
  document.body.classList.add('modal-open');
}
projects.forEach(project => project.addEventListener('click', () => openDetails(project.dataset.project)));
document.querySelector('#contact-button').addEventListener('click', () => openDetails('contact'));
document.querySelectorAll('.dialog-close,.dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
document.querySelector('#year').textContent = new Date().getFullYear();

// Fill first, then reveal the initials with a gently changing refraction field.
const intro = document.querySelector('.water-intro');
const fill = document.querySelector('.water-fill');
const turbulence = document.querySelector('#water-ripple feTurbulence');
const displacement = document.querySelector('#water-ripple feDisplacementMap');
const pauseButton = document.querySelector('#water-pause');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let rippleFrame = 0;
let rippleTime = 0;
let previousTime = 0;
let introVisible = true;

function stopRipple() {
  cancelAnimationFrame(rippleFrame);
  rippleFrame = 0;
  previousTime = 0;
}
function ripple(time) {
  if (previousTime) rippleTime += Math.min(time - previousTime, 64);
  previousTime = time;
  turbulence.setAttribute('baseFrequency', `${0.008 + Math.sin(rippleTime / 2800) * 0.0015} ${0.025 + Math.cos(rippleTime / 3400) * 0.004}`);
  displacement.setAttribute('scale', String(11 + Math.sin(rippleTime / 1900) * 4));
  rippleFrame = requestAnimationFrame(ripple);
}
function syncRipple() {
  stopRipple();
  if (!motionPreference.matches && intro.classList.contains('is-filled') && !intro.classList.contains('is-paused') && introVisible && !document.hidden) {
    rippleFrame = requestAnimationFrame(ripple);
  }
}
fill.addEventListener('animationend', event => {
  if (event.animationName !== 'water-rise') return;
  intro.classList.add('is-filled');
  syncRipple();
});
pauseButton.addEventListener('click', () => {
  const paused = intro.classList.toggle('is-paused');
  pauseButton.setAttribute('aria-pressed', String(paused));
  pauseButton.textContent = paused ? '물결 재생 ▷' : '물결 멈추기 Ⅱ';
  syncRipple();
});
document.querySelector('#water-replay').addEventListener('click', () => {
  intro.classList.remove('is-filled', 'is-paused');
  pauseButton.setAttribute('aria-pressed', 'false');
  pauseButton.textContent = '물결 멈추기 Ⅱ';
  stopRipple();
  fill.style.animation = 'none';
  void fill.offsetWidth;
  fill.style.animation = '';
});
new IntersectionObserver(entries => {
  introVisible = entries[0].isIntersecting;
  syncRipple();
}).observe(intro);
document.addEventListener('visibilitychange', syncRipple);
motionPreference.addEventListener('change', () => {
  if (motionPreference.matches) intro.classList.add('is-filled');
  syncRipple();
});
if (motionPreference.matches) intro.classList.add('is-filled');

const aboutSection = document.querySelector('#about');
new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) aboutSection.classList.add('about-entered');
}, { threshold: 0.2 }).observe(aboutSection);
document.querySelector('#dolphin-replay').addEventListener('click', () => {
  aboutSection.classList.remove('about-entered');
  void aboutSection.offsetWidth;
  aboutSection.classList.add('about-entered');
});

// Only guide the first downward wheel gesture out of Intro. Other sections,
// touch scrolling, zoom gestures and dialogs keep their native scrolling.
let sectionTransition = false;
let transitionTimer;
window.addEventListener('wheel', event => {
  if (event.ctrlKey || event.metaKey || dialog.open || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
  if (sectionTransition) {
    event.preventDefault();
    clearTimeout(transitionTimer);
    transitionTimer = setTimeout(() => { sectionTransition = false; }, 700);
    return;
  }
  const bounds = intro.getBoundingClientRect();
  if (event.deltaY <= 4 || bounds.top > innerHeight * 0.5 || bounds.bottom < innerHeight * 0.55) return;
  event.preventDefault();
  sectionTransition = true;
  aboutSection.scrollIntoView({ behavior: motionPreference.matches ? 'instant' : 'smooth', block: 'start' });
  transitionTimer = setTimeout(() => { sectionTransition = false; }, 1000);
}, { passive: false });

const sectionLinks = document.querySelectorAll('.section-index a');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    sectionLinks.forEach(link => link.setAttribute('aria-current', String(link.hash === `#${entry.target.id}`)));
  });
}, { rootMargin: '-25% 0px -55% 0px', threshold: 0 });
document.querySelectorAll('main > section').forEach(section => sectionObserver.observe(section));


const projectSummaries = {
  haevichi: '쉼의 순간을 담은 호텔 웹사이트',
  onul: '일상에 초록을 더하는 브랜드 콘셉트',
  perspective: '새로운 시각을 담은 그래픽 콘셉트'
};
document.querySelectorAll('[data-select-project]').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.selectProject;
    const item = details[key];
    document.querySelector('#reef-category').textContent = item.category;
    document.querySelector('#reef-title').textContent = item.title;
    document.querySelector('#reef-description').textContent = projectSummaries[key];
    const shell = document.querySelector('.reef-shell');
    shell.dataset.project = key;
    shell.setAttribute('aria-label', `${item.title} 프로젝트 상세 보기`);
    document.querySelectorAll('[data-select-project]').forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
  });
});
new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('reef-entered');
  });
}, { threshold: 0.15 }).observe(document.querySelector('#portfolio'));
new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('reef-entered');
  });
}, { threshold: 0.15 }).observe(document.querySelector('#contact'));


// Each skill has its own shell; all unfold on arrival in the Skills section.
const skillsSection = document.querySelector('#skills');
const skillShells = document.querySelectorAll('.skill-clams .skills-clam');
function openSkillShells() {
  skillShells.forEach(shell => shell.classList.add('skills-open'));
}
new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) openSkillShells();
}, { threshold: 0.22 }).observe(skillsSection);
document.querySelector('#clam-replay').addEventListener('click', () => {
  skillShells.forEach(shell => shell.classList.remove('skills-open'));
  void skillsSection.offsetWidth;
  openSkillShells();
});
