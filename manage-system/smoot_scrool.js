
$(document).ready(function()
{
    // menambahkan smoot scrool by click a link
    $(".submenu .select , .capsulated-button .mapsss").on('click', function(event) 
    {
      if (this.hash !== "") 
      {
        event.preventDefault();
       
        const hash = this.hash;
       
        $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },1000, function()
        {
          window.location.hash = hash;
        });
      } 
    });

    $('.spslect , .footer .rec .right .bactoup .fa-arrow-circle-up').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0},1500);
    });
  });