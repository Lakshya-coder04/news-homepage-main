const navSlide = () => {
  const burger = document.querySelector('.icon-menu');
  const nav = document.querySelector('.menu');
  const body = document.querySelector('body');
  let isMenuOpen = false;
  burger.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    nav.classList.toggle('active');

    if (isMenuOpen) {
      burger.src = './assets/images/icon-menu-close.svg'; // Change to the cross icon
    } else {
      burger.src = './assets/images/icon-menu.svg'; // Change back to the hamburger icon
    }
  });
};

navSlide();
