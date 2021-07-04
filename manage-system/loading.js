$('body').append('<div style="" class="load"><div class="loader">Loading...</div></div>');
document.body.style.overflow = "hidden";
$(window).on('load', function()
{
    setTimeout(removeLoader, 1000); //wait for page load + 1s.
});
function removeLoader()
{   
      window.scrollTo(0, 0);
      document.body.style.overflow = "visible";
      $( ".load" ).fadeOut(500, function() 
      {
        // fadeOut complete . loading complete
        $( ".load" ).remove(); //makes page more light we remove yhis class
    });  
   
}
