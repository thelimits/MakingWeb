// $('.Home').on('click' ,function(event) 
// {
//     event.preventDefault();   
//     $('.submenu').slideToggle(300,'linear');
//     $('.fa-caret-down').css("color","white")
//     $('.Home').css("color","red");
//     $('.Home').css("border-bottom","4px solid red");
// });
  
// DropDown Menu //
$(".game-home").hover(function(event)
    {
        event.preventDefault();
        $('.submenu').slideToggle(250,'linear');
        $('.fa-caret-down').css("color","white")
        $('.Home').css("color","red");
        $('.Home').css("border-bottom","4px solid red");
        
    }, 
    function(event)
    {
        event.preventDefault();

        $(".submenu").hover(function(event)
        {
            event.stopPropagation();
        },
        function()
        {
            $('.submenu').hide(0);
            $('.Home').css("color","");
            $('.fa-caret-down').css("color","");
            $('.Home').css("border-bottom","");
        });
        
        $(".containers , .content , .cek ,#Laforant-Bar .LaforantBar-left-menu ").hover(function()
        {
            $('.submenu').hide(0);
            $('.Home').css("color","");
            $('.fa-caret-down').css("color","");
            $('.Home').css("border-bottom","");
        },function(){

        });
        
        // for top and offsite home division home hover
        const offset_top = $(".game-home").offset().top;
        const height = $(".game-home").height();
        const Y = event.pageY;
        const loc = Math.abs(offset_top - Y);// abs absolute value
        if (loc < height/2) 
        {
            // console.log('bagian atas');
            $('.submenu').hide(0);
            $('.Home').css("color","");
            $('.fa-caret-down').css("color","");
            $('.Home').css("border-bottom","");
        }
        else 
        {}

        // for left home hover
        const offset_left = $(".game-home").offset().left;
        const width = $(".game-home").width();
        const X = event.pageX;
        const loc_left = Math.abs(offset_left - X);
        if (loc_left < width/11) 
        {
            // console.log(loc_left);
             $('.submenu').hide(0);
             $('.Home').css("color","");
             $('.fa-caret-down').css("color","");
             $('.Home').css("border-bottom","");
        }
          
    });


$(document).click(function() 
{
    $('.submenu').hide(0);
    $('.Home').css("color","");
    $('.fa-caret-down').css("color","");
    $('.Home').css("border-bottom","");
});

$('.game-home').click(function(e) 
{
    e.stopPropagation();
});
