const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-project]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  projects.forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
  });
}));

// Replace concept descriptions and contact details here with verified personal information.
const details = {
  haevichi: {
    category: '01 / WEB DESIGN', title: 'Haevichi',
    description: '해비치 호텔 웹사이트 프로젝트입니다. 이 카드의 풍경은 홈페이지 초안용 그래픽이며, 실제 사이트 화면은 아닙니다. 기존 haevichi-tt 저장소에서 HTML, CSS와 인터랙션 작업을 확인할 수 있습니다.',
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
