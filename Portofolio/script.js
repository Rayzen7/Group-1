// Scrolling navbar
jQuery(function($) {
  var $navbar = $('.navbar');

  updateNavbar();

  $(window).scroll(function() {
    updateNavbar();
  });

  function updateNavbar() {
    var $current = $(this).scrollTop();
    if ($current > 0) {
      $navbar.addClass('navbar-color').removeClass('original-color');
    } else {
      $navbar.removeClass('navbar-color').addClass('original-color');
    }
  }
});

// responsive navbar
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector('.navbar');
  const listIcon = document.querySelector('.list');

  listIcon.addEventListener('click', function () {
      navbar.classList.toggle('active');
  });
});