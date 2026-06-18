function filterPublications(event, type) {
  const normalizedType = type === 'list' ? 'list' : 'core';
  const buttons = document.querySelectorAll('.pub-button');
  const coreView = document.querySelector('[data-publication-view="core"]');
  const listView = document.querySelector('[data-publication-view="list"]');

  buttons.forEach((button) => button.classList.remove('active'));

  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  } else if (buttons.length) {
    const activeIndex = normalizedType === 'list' ? 1 : 0;
    if (buttons[activeIndex]) buttons[activeIndex].classList.add('active');
  }

  if (coreView) {
    coreView.hidden = normalizedType === 'list';
  }

  if (listView) {
    listView.hidden = normalizedType !== 'list';
  }
}

function showPublications(type) {
  filterPublications(null, type);
}

document.addEventListener('DOMContentLoaded', () => {
  filterPublications(null, 'core');
});
