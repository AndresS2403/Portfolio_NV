document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const content = document.querySelector('.content');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('show-menu');
    
    if (menu.classList.contains('show-menu')) {
      content.style.marginLeft = '200px'; 
    } else {
      content.style.marginLeft = '0';
    }
  });
});