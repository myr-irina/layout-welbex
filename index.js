const titles = document.querySelectorAll('.grid-col-2__title');
const footerTitles = document.querySelectorAll('.footer__link-menu');

function changeContentOnMobile() {
  const isMobile = window.matchMedia('(max-width: 414px)').matches;

  titles.forEach((title, index) => {
    if (isMobile) {
      if (index === 0) {
        title.textContent = 'Skype аудит';
      } else if (index === 1) {
        title.textContent = '30 виджетов';
      } else if (index === 2) {
        title.textContent = 'Dashboard';
      } else if (index === 3) {
        title.textContent = 'Месяц аmoCRM';
      }
    } else {
      if (index === 0) {
        title.textContent = 'Виджеты';
      } else if (index === 1) {
        title.textContent = 'Dashboard';
      } else if (index === 2) {
        title.textContent = 'Skype Аудит';
      } else if (index === 3) {
        title.textContent = '35 дней';
      }
    }
  });

  footerTitles.forEach((footerTitle, index) => {
    if (isMobile) {
      if (index === 0) {
        footerTitle.textContent = 'Расчёт стоимости';
      } else if (index === 1) {
        footerTitle.textContent = 'Услуги';
      } else if (index === 2) {
        footerTitle.textContent = 'Виджеты';
      } else if (index === 3) {
        footerTitle.textContent = 'Интеграции';
      } else if (index === 4) {
        footerTitle.textContent = 'Наши клиенты';
      } else if (index === 5) {
        footerTitle.textContent = 'Благодарность клиентов';
      } else if (index === 6) {
        footerTitle.textContent = 'Кейсы';
      } else if (index === 7) {
        footerTitle.textContent = 'Сертификаты';
      } else if (index === 8) {
        footerTitle.textContent = 'Блог на Youtube';
      } else if (index === 9) {
        footerTitle.textContent = 'Вопрос / Ответ';
      }
    } else {
      if (index === 0) {
        footerTitle.textContent = 'Расчёт стоимости';
      } else if (index === 1) {
        footerTitle.textContent = 'Услуги';
      } else if (index === 2) {
        footerTitle.textContent = 'Виджеты';
      } else if (index === 3) {
        footerTitle.textContent = 'Интеграции';
      } else if (index === 4) {
        footerTitle.textContent = 'Наши клиенты';
      } else if (index === 5) {
        footerTitle.textContent = 'Кейсы';
      } else if (index === 6) {
        footerTitle.textContent = 'Благодарственные письма';
      } else if (index === 7) {
        footerTitle.textContent = 'Сертификаты';
      } else if (index === 8) {
        footerTitle.textContent = 'Блог на Youtube';
      } else if (index === 9) {
        footerTitle.textContent = 'Вопрос / Ответ';
      }
    }
  });
}

changeContentOnMobile();

window.addEventListener('resize', changeContentOnMobile);
