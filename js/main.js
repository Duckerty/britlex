$(document).ready(function() {
  $('.header__menu-click').click(function(){
    $('.nav-links-row-mobile').addClass('nav-links-row-mobile--active');
    $('.nav-links').addClass('nav-links--active');
  });
  $('.header__menu-close--btn').click(function(){
    $('.nav-links ul').removeClass('nav-links-row-mobile--active');
  });
  $('.header__menu-list__link').click(function(){
    $('.nav-links ul').removeClass('nav-links-row-mobile--active');
  });
});