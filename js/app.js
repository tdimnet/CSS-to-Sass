
/*
  To Do later (in order to have unobtrusive JS):
    1. Create the variables
    2. Create the function
    3. Add the elements to the DOM with JS.
    4. Run the function
*/
var $navList = $('.main-nav ul');


$('#hamburger-img').on('click', function() {
  $navList.slideToggle('slow');
});
