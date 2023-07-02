const burger = document.querySelector('.burger');
const nav = document.querySelector('.headnav ul');

burger.addEventListener('click', () => {
  nav.classList.toggle('link-active');
  burger.classList.toggle('toggle');
});
