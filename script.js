  const menuIcon = document.querySelector('.mobile-menu-icon');
  const navList = document.querySelector('header ul');

  menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
