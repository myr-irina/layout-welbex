const titles = document.querySelectorAll('.grid-col-2__title');

function changeContentOnMobile() {
  if (window.matchMedia('(max-width: 414px)').matches) {
    titles.forEach((title, index) => {
      if (index === 0) {
        title.textContent = 'Skype аудит';
      } else if (index === 1) {
        title.textContent = '30 виджетов';
      } else if (index === 2) {
        title.textContent = 'Dashboard';
      } else if (index === 3) {
        title.textContent = 'Месяц аmoCRM';
      }
    });
  } else {
    titles.forEach((title, index) => {
      if (index === 0) {
        title.textContent = 'Виджеты';
      } else if (index === 1) {
        title.textContent = 'Dashboard';
      } else if (index === 2) {
        title.textContent = 'Skype Аудит';
      } else if (index === 3) {
        title.textContent = '35 дней';
      }
    });
  }
}

changeContentOnMobile();

window.addEventListener('resize', changeContentOnMobile);
