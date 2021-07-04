

// sama dengan
// $('.content-slider').mousedown((event) =>
// {
//     isDown = true;
//     slider.classList.add('active')
//     startX =event.pageX -slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// }); 
// atau
// $('.content-slider').mousedown(function(event)
// {
//     isDown = true;
//     slider.classList.add('active')
//     startX =event.pageX -slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// }); 

$(document).ready( () =>
{
    let isDown = false;
    let startVertival;
    let startHorizontal;
    let scrollTop;
  
    // slide coloumn
    $('.content-slider').on('mousedown',(event) =>
    {
        isDown = true;
        clicks();
        $('.Item').addClass('actives');
        startVertival = event.pageY - $('.content-slider').offset().top;
        scrollTop = $('.content-slider').scrollTop();
    });
    $('.content-slider').on('mouseleave',() =>
    {
        isDown = false;
        $('.Item').removeClass('actives');
    });
    $('.content-slider').on('mouseup',() =>
    {
        isDown = false;
        $('.Item').removeClass('actives');
    });
    $('.content-slider').on('mousemove',(event) =>
    {
        if(!isDown)
        {
            return;
        } 
        event.preventDefault();
        clicks();
        const slider = document.querySelector('.content-slider');
        const vertival = event.pageY - $('.content-slider').offset().top;
        const walk = (vertival - startVertival) * 1.15;
        slider.scrollTop = scrollTop - walk;
    
    });

    // slide row
    $('.content-sliderformobile').on('mousedown',(event) =>
    {
        isDown = true;
        clicks();
        $('.Item').addClass('actives');
        startHorizontal = event.pageX - $('.content-sliderformobile').offset().left;
        scrollLeft = $('.content-sliderformobile').scrollLeft();
    });
    $('.content-sliderformobile').on('mouseleave',() =>
    {
        isDown = false;
        $('.Item').removeClass('actives');
    });
    $('.content-sliderformobile').on('mouseup',() =>
    {
        isDown = false;
        $('.Item').removeClass('actives');
    });
    $('.content-sliderformobile').on('mousemove',(event) =>
    {
        if(!isDown)
        {
            return;
        } 
        event.preventDefault();
        clicks();
        const slider = document.querySelector('.content-sliderformobile');
        const Horizontal = event.pageX - $('.content-sliderformobile').offset().left;
        const walk = (Horizontal - startHorizontal) * 1.15;
        slider.scrollLeft = scrollLeft - walk;
    
    });

    function clicks(e)
    {
        if($('.selected span').is(':visible'))
        {
            $(".selected span").css("transform","translateX(-150%)",
                                    "display" , "none")
           
        }

        if($(".Item").on('click' , () => 
        {
            $(".menu").css("display" , "none")
        })); 
        if($('.ch-1').on('click' , () =>
        {
            // char text name
             // char 1
            $('.ch-1 span').css("color" , "red" )
            $('.ch-1').css("transform" , "translateX(-30px)")
            $('.content-sliderformobile .ch-1').css("transform" , "scale(1.1)")
            // char 2
            $('.ch-2 span').css("color" , "" )
            $('.ch-2').css("transform" , "")

            // char 3
            $('.ch-3 span').css("color" , "" )
            $('.ch-3').css("transform" , "")

            // char 4
            $('.ch-4 span').css("color" , "" )
            $('.ch-4').css("transform" , "")

            // char 5
            $('.ch-5 span').css("color" , "" )
            $('.ch-5').css("transform" , "")

            // char 6
            $('.ch-6 span').css("color" , "" )
            $('.ch-6').css("transform" , "")

            // char 7
            $('.ch-7 span').css("color" , "" )
            $('.ch-7').css("transform" , "")

            // char 8
            $('.ch-8 span').css("color" , "" )
            $('.ch-8').css("transform" , "")

            // char 9
            $('.ch-9 span').css("color" , "" )
            $('.ch-9').css("transform" , "")

            // char 10
            $('.ch-10 span').css("color" , "" )
            $('.ch-10').css("transform" , "")

            // char 11
            $('.ch-11 span').css("color" , "" )
            $('.ch-11').css("transform" , "")

            // char 12
            $('.ch-12 span').css("color" , "" )
            $('.ch-12').css("transform" , "")

            // char 13
            $('.ch-13 span').css("color" , "" )
            $('.ch-13').css("transform" , "")

            // char 14
            $('.ch-14 span').css("color" , "" )
            $('.ch-14').css("transform" , "")

            // char 15
            $('.ch-15 span').css("color" , "" )
            $('.ch-15').css("transform" , "")

            // char character physic
            // char 1
            $(".selected .characters .charac-1").addClass("active");

            // char 2
            $(".selected .characters .charac-2").removeClass("active");

            // char 3
            $(".selected .characters .charac-3").removeClass("active");

            // char 4
            $(".selected .characters .charac-4").removeClass("active");

            // char 5
            $(".selected .characters .charac-5").removeClass("active");

            // char 6
            $(".selected .characters .charac-6").removeClass("active");

            // char 7
            $(".selected .characters .charac-7").removeClass("active");

            // char 8
            $(".selected .characters .charac-8").removeClass("active");

            // char 9
            $(".selected .characters .charac-9").removeClass("active");

            // char 10
            $(".selected .characters .charac-10").removeClass("active");

            // char 11
            $(".selected .characters .charac-11").removeClass("active");

            // char 12
            $(".selected .characters .charac-12").removeClass("active");

            // char 13
            $(".selected .characters .charac-13").removeClass("active");

            // char 14
            $(".selected .characters .charac-14").removeClass("active");

            // char 15
            $(".selected .characters .charac-15").removeClass("active");

            // bio and type
            // char 1
            $(".content-baground .selected .type1").css("display" , "block");

            // char 2
            $(".content-baground .selected .type2").css("display" , "");

            // char 3
            $(".content-baground .selected .type3").css("display" , "");

            // char 4
            $(".content-baground .selected .type4").css("display" , "");

            // char 5
            $(".content-baground .selected .type5").css("display" , "");

            // char 6
            $(".content-baground .selected .type6").css("display" , "");

            // char 7
            $(".content-baground .selected .type7").css("display" , "");

            // char 8
            $(".content-baground .selected .type8").css("display" , "");

            // char 9
            $(".content-baground .selected .type9").css("display" , "");

            // char 10
            $(".content-baground .selected .type10").css("display" , "");

            // char 11
            $(".content-baground .selected .type11").css("display" , "");

            // char 12
            $(".content-baground .selected .type12").css("display" , "");

            // char 13
            $(".content-baground .selected .type13").css("display" , "");

            // char 14
            $(".content-baground .selected .type14").css("display" , "");

            // char 15
            $(".content-baground .selected .type15").css("display" , "");
        }));
        if($('.ch-2').on('click' , () =>
        {
            // char text name
            // char 1
            $('.ch-1 span').css("color" , "");
            $('.ch-1').css("transform" , "")

            // char 2
            $('.ch-2 span').css("color" , "red" )
            $('.ch-2').css("transform" , "translateX(-30px)")
            $('.content-sliderformobile .ch-2').css("transform" , "scale(1.1)")
            // char 3
            $('.ch-3 span').css("color" , "" )
            $('.ch-3').css("transform" , "")

            // char 4
            $('.ch-4 span').css("color" , "" )
            $('.ch-4').css("transform" , "")

            // char 5
            $('.ch-5 span').css("color" , "" )
            $('.ch-5').css("transform" , "")

            // char 6
            $('.ch-6 span').css("color" , "" )
            $('.ch-6').css("transform" , "")

            // char 7
            $('.ch-7 span').css("color" , "" )
            $('.ch-7').css("transform" , "")

            // char 8
            $('.ch-8 span').css("color" , "" )
            $('.ch-8').css("transform" , "")

            // char 9
            $('.ch-9 span').css("color" , "" )
            $('.ch-9').css("transform" , "")

            // char 10
            $('.ch-10 span').css("color" , "" )
            $('.ch-10').css("transform" , "")

            // char 11
            $('.ch-11 span').css("color" , "" )
            $('.ch-11').css("transform" , "")

            // char 12
            $('.ch-12 span').css("color" , "" )
            $('.ch-12').css("transform" , "")

            // char 13
            $('.ch-13 span').css("color" , "" )
            $('.ch-13').css("transform" , "")

            // char 14
            $('.ch-14 span').css("color" , "" )
            $('.ch-14').css("transform" , "")

            // char 15
            $('.ch-15 span').css("color" , "" )
            $('.ch-15').css("transform" , "")

            // char character physic
            // char 1
            $(".selected .characters .charac-1").removeClass("active");

            // char 2
            $(".selected .characters .charac-2").addClass("active");

            // char 3
            $(".selected .characters .charac-3").removeClass("active");

            // char 4
            $(".selected .characters .charac-4").removeClass("active");

            // char 5
            $(".selected .characters .charac-5").removeClass("active");

            // char 6
            $(".selected .characters .charac-6").removeClass("active");

            // char 7
            $(".selected .characters .charac-7").removeClass("active");

            // char 8
            $(".selected .characters .charac-8").removeClass("active");

            // char 9
            $(".selected .characters .charac-9").removeClass("active");

            // char 10
            $(".selected .characters .charac-10").removeClass("active");

            // char 11
            $(".selected .characters .charac-11").removeClass("active");

            // char 12
            $(".selected .characters .charac-12").removeClass("active");

            // char 13
            $(".selected .characters .charac-13").removeClass("active");

            // char 14
            $(".selected .characters .charac-14").removeClass("active");

            // char 15
            $(".selected .characters .charac-15").removeClass("active");
            
            // bio and type
            // char 1
            $(".content-baground .selected .type1").css("display" , "");

            // char 2
            $(".content-baground .selected .type2").css("display" , "block");

            // char 3
            $(".content-baground .selected .type3").css("display" , "");

            // char 4
            $(".content-baground .selected .type4").css("display" , "");

            // char 5
            $(".content-baground .selected .type5").css("display" , "");

            // char 6
            $(".content-baground .selected .type6").css("display" , "");

            // char 7
            $(".content-baground .selected .type7").css("display" , "");

            // char 8
            $(".content-baground .selected .type8").css("display" , "");

            // char 9
            $(".content-baground .selected .type9").css("display" , "");

            // char 10
            $(".content-baground .selected .type10").css("display" , "");

            // char 11
            $(".content-baground .selected .type11").css("display" , "");

            // char 12
            $(".content-baground .selected .type12").css("display" , "");

            // char 13
            $(".content-baground .selected .type13").css("display" , "");

            // char 14
            $(".content-baground .selected .type14").css("display" , "");

            // char 15
            $(".content-baground .selected .type15").css("display" , "");
        }));
        if($('.ch-3').on('click' , () =>
        {
            // char text name
            // char 1
            $('.ch-1 span').css("color" , "");
            $('.ch-1').css("transform" , "")

            // char 2
            $('.ch-2 span').css("color" , "" )
            $('.ch-2').css("transform" , "")

            // char 3
            $('.ch-3 span').css("color" , "red" )
            $('.ch-3').css("transform" , "translateX(-23px)")
            $('.content-sliderformobile .ch-3').css("transform" , "scale(1.1)")

            // char 4
            $('.ch-4 span').css("color" , "" )
            $('.ch-4').css("transform" , "")

             // char 5
             $('.ch-5 span').css("color" , "" )
             $('.ch-5').css("transform" , "")
 
             // char 6
             $('.ch-6 span').css("color" , "" )
             $('.ch-6').css("transform" , "")
 
             // char 7
             $('.ch-7 span').css("color" , "" )
             $('.ch-7').css("transform" , "")
 
             // char 8
             $('.ch-8 span').css("color" , "" )
             $('.ch-8').css("transform" , "")
 
             // char 9
             $('.ch-9 span').css("color" , "" )
             $('.ch-9').css("transform" , "")
 
             // char 10
             $('.ch-10 span').css("color" , "" )
             $('.ch-10').css("transform" , "")
 
             // char 11
             $('.ch-11 span').css("color" , "" )
             $('.ch-11').css("transform" , "")
 
             // char 12
             $('.ch-12 span').css("color" , "" )
             $('.ch-12').css("transform" , "")
 
             // char 13
             $('.ch-13 span').css("color" , "" )
             $('.ch-13').css("transform" , "")
 
             // char 14
             $('.ch-14 span').css("color" , "" )
             $('.ch-14').css("transform" , "")
 
             // char 15
             $('.ch-15 span').css("color" , "" )
             $('.ch-15').css("transform" , "")

            // char haracter physic
            // char 1
            $(".selected .characters .charac-1").removeClass("active");

            // char 2
            $(".selected .characters .charac-2").removeClass("active");

            // char 3
            $(".selected .characters .charac-3").addClass("active");

            // char 4
            $(".selected .characters .charac-4").removeClass("active");

            // char 5
            $(".selected .characters .charac-5").removeClass("active");

            // char 6
            $(".selected .characters .charac-6").removeClass("active");

            // char 7
            $(".selected .characters .charac-7").removeClass("active");

            // char 8
            $(".selected .characters .charac-8").removeClass("active");

            // char 9
            $(".selected .characters .charac-9").removeClass("active");

            // char 10
            $(".selected .characters .charac-10").removeClass("active");

            // char 11
            $(".selected .characters .charac-11").removeClass("active");

            // char 12
            $(".selected .characters .charac-12").removeClass("active");

            // char 13
            $(".selected .characters .charac-13").removeClass("active");

            // char 14
            $(".selected .characters .charac-14").removeClass("active");

            // char 15
            $(".selected .characters .charac-15").removeClass("active");

            // bio and type
            // char 1
            $(".content-baground .selected .type1").css("display" , "");

            // char 2
            $(".content-baground .selected .type2").css("display" , "");

            // char 3
            $(".content-baground .selected .type3").css("display" , "block");

            // char 4
            $(".content-baground .selected .type4").css("display" , "");

            // char 5
            $(".content-baground .selected .type5").css("display" , "");

            // char 6
            $(".content-baground .selected .type6").css("display" , "");

            // char 7
            $(".content-baground .selected .type7").css("display" , "");

            // char 8
            $(".content-baground .selected .type8").css("display" , "");

            // char 9
            $(".content-baground .selected .type9").css("display" , "");

            // char 10
            $(".content-baground .selected .type10").css("display" , "");

            // char 11
            $(".content-baground .selected .type11").css("display" , "");

            // char 12
            $(".content-baground .selected .type12").css("display" , "");

            // char 13
            $(".content-baground .selected .type13").css("display" , "");

            // char 14
            $(".content-baground .selected .type14").css("display" , "");

            // char 15
            $(".content-baground .selected .type15").css("display" , "");
        }));
        if($('.ch-4').on('click' , () =>
        {
            // char text name
            // char 1
            $('.ch-1 span').css("color" , "");
            $('.ch-1').css("transform" , "")

            // char 2
            $('.ch-2 span').css("color" , "" )
            $('.ch-2').css("transform" , "")

            // char 3
            $('.ch-3 span').css("color" , "" )
            $('.ch-3').css("transform" , "")

            // char 4
            $('.ch-4 span').css("color" , "red" )
            $('.ch-4').css("transform" , "translateX(-30px)")
            $('.content-sliderformobile .ch-4').css("transform" , "scale(1.1)")
            // char 5
            $('.ch-5 span').css("color" , "" )
            $('.ch-5').css("transform" , "")

            // char 6
            $('.ch-6 span').css("color" , "" )
            $('.ch-6').css("transform" , "")

            // char 7
            $('.ch-7 span').css("color" , "" )
            $('.ch-7').css("transform" , "")

            // char 8
            $('.ch-8 span').css("color" , "" )
            $('.ch-8').css("transform" , "")

            // char 9
            $('.ch-9 span').css("color" , "" )
            $('.ch-9').css("transform" , "")

            // char 10
            $('.ch-10 span').css("color" , "" )
            $('.ch-10').css("transform" , "")

            // char 11
            $('.ch-11 span').css("color" , "" )
            $('.ch-11').css("transform" , "")

            // char 12
            $('.ch-12 span').css("color" , "" )
            $('.ch-12').css("transform" , "")

            // char 13
            $('.ch-13 span').css("color" , "" )
            $('.ch-13').css("transform" , "")

            // char 14
            $('.ch-14 span').css("color" , "" )
            $('.ch-14').css("transform" , "")

            // char 15
            $('.ch-15 span').css("color" , "" )
            $('.ch-15').css("transform" , "")

            // char haracter physic
            // char 1
            $(".selected .characters .charac-1").removeClass("active");

            // char 2
            $(".selected .characters .charac-2").removeClass("active");

            // char 3
            $(".selected .characters .charac-3").removeClass("active");

            // char 4
            $(".selected .characters .charac-4").addClass("active");

            // char 5
            $(".selected .characters .charac-5").removeClass("active");

            // char 6
            $(".selected .characters .charac-6").removeClass("active");

            // char 7
            $(".selected .characters .charac-7").removeClass("active");

            // char 8
            $(".selected .characters .charac-8").removeClass("active");

            // char 9
            $(".selected .characters .charac-9").removeClass("active");

            // char 10
            $(".selected .characters .charac-10").removeClass("active");

            // char 11
            $(".selected .characters .charac-11").removeClass("active");

            // char 12
            $(".selected .characters .charac-12").removeClass("active");

            // char 13
            $(".selected .characters .charac-13").removeClass("active");

            // char 14
            $(".selected .characters .charac-14").removeClass("active");

            // char 15
            $(".selected .characters .charac-15").removeClass("active");

            //  bio
            // char 1
            $(".content-baground .selected .type1").css("display" , "");

            // char 2
            $(".content-baground .selected .type2").css("display" , "");

            // char 3
            $(".content-baground .selected .type3").css("display" , "");

            // char 4
            $(".content-baground .selected .type4").css("display" , "block");

            // char 5
            $(".content-baground .selected .type5").css("display" , "");

            // char 6
            $(".content-baground .selected .type6").css("display" , "");

            // char 7
            $(".content-baground .selected .type7").css("display" , "");

            // char 8
            $(".content-baground .selected .type8").css("display" , "");

            // char 9
            $(".content-baground .selected .type9").css("display" , "");

            // char 10
            $(".content-baground .selected .type10").css("display" , "");

            // char 11
            $(".content-baground .selected .type11").css("display" , "");

            // char 12
            $(".content-baground .selected .type12").css("display" , "");

            // char 13
            $(".content-baground .selected .type13").css("display" , "");

            // char 14
            $(".content-baground .selected .type14").css("display" , "");

            // char 15
            $(".content-baground .selected .type15").css("display" , "");
        }));
        if($('.ch-5').on('click' , () =>
        {
            // char text name
            // char 1
            $('.ch-1 span').css("color" , "");
            $('.ch-1').css("transform" , "")

            // char 2
            $('.ch-2 span').css("color" , "" )
            $('.ch-2').css("transform" , "")

            // char 3
            $('.ch-3 span').css("color" , "" )
            $('.ch-3').css("transform" , "")

            // char 4
            $('.ch-4 span').css("color","")
            $('.ch-4').css("transform","")

            // char 5
            $('.ch-5 span').css("color" , "red" )
            $('.ch-5').css("transform" , "translateX(-30px)")
            $('.content-sliderformobile .ch-5').css("transform" , "scale(1.1)")

            // char 6
            $('.ch-6 span').css("color" , "" )
            $('.ch-6').css("transform" , "")

            // char 7
            $('.ch-7 span').css("color" , "" )
            $('.ch-7').css("transform" , "")

            // char 8
            $('.ch-8 span').css("color" , "" )
            $('.ch-8').css("transform" , "")

            // char 9
            $('.ch-9 span').css("color" , "" )
            $('.ch-9').css("transform" , "")

            // char 10
            $('.ch-10 span').css("color" , "" )
            $('.ch-10').css("transform" , "")

            // char 11
            $('.ch-11 span').css("color" , "" )
            $('.ch-11').css("transform" , "")

            // char 12
            $('.ch-12 span').css("color" , "" )
            $('.ch-12').css("transform" , "")

            // char 13
            $('.ch-13 span').css("color" , "" )
            $('.ch-13').css("transform" , "")

            // char 14
            $('.ch-14 span').css("color" , "" )
            $('.ch-14').css("transform" , "")

            // char 15
            $('.ch-15 span').css("color" , "" )
            $('.ch-15').css("transform" , "")

            // char haracter physic
            // char 1
            $(".selected .characters .charac-1").removeClass("active");

            // char 2
            $(".selected .characters .charac-2").removeClass("active");

            // char 3
            $(".selected .characters .charac-3").removeClass("active");

            // char 4
            $(".selected .characters .charac-4").removeClass("active");

            // char 5
            $(".selected .characters .charac-5").addClass("active");

            // char 6
            $(".selected .characters .charac-6").removeClass("active");

            // char 7
            $(".selected .characters .charac-7").removeClass("active");

            // char 8
            $(".selected .characters .charac-8").removeClass("active");

            // char 9
            $(".selected .characters .charac-9").removeClass("active");

            // char 10
            $(".selected .characters .charac-10").removeClass("active");

            // char 11
            $(".selected .characters .charac-11").removeClass("active");

            // char 12
            $(".selected .characters .charac-12").removeClass("active");

            // char 13
            $(".selected .characters .charac-13").removeClass("active");

            // char 14
            $(".selected .characters .charac-14").removeClass("active");

            // char 15
            $(".selected .characters .charac-15").removeClass("active");

            // bio and type
            // char 1
            $(".content-baground .selected .type1").css("display" , "");

            // char 2
            $(".content-baground .selected .type2").css("display" , "");

            // char 3
            $(".content-baground .selected .type3").css("display" , "");

            // char 4
            $(".content-baground .selected .type4").css("display" , "");

            // char 5
            $(".content-baground .selected .type5").css("display" , "block");

            // char 6
            $(".content-baground .selected .type6").css("display" , "");

            // char 7
            $(".content-baground .selected .type7").css("display" , "");

            // char 8
            $(".content-baground .selected .type8").css("display" , "");

            // char 9
            $(".content-baground .selected .type9").css("display" , "");

            // char 10
            $(".content-baground .selected .type10").css("display" , "");

            // char 11
            $(".content-baground .selected .type11").css("display" , "");

            // char 12
            $(".content-baground .selected .type12").css("display" , "");

            // char 13
            $(".content-baground .selected .type13").css("display" , "");

            // char 14
            $(".content-baground .selected .type14").css("display" , "");

            // char 15
            $(".content-baground .selected .type15").css("display" , "");
        }));
        if($('.ch-6').on('click' , () =>
        {
            // char text name
            // char 1
            $('.ch-1 span').css("color" , "");
            $('.ch-1').css("transform" , "")

            // char 2
            $('.ch-2 span').css("color" , "" )
            $('.ch-2').css("transform" , "")

            // char 3
            $('.ch-3 span').css("color" , "" )
            $('.ch-3').css("transform" , "")

            // char 4
            $('.ch-4 span').css("color","")
            $('.ch-4').css("transform","")

            // char 5
            $('.ch-5 span').css("color" , "" )
            $('.ch-5').css("transform", "")

            // char 6
            $('.ch-6 span').css("color" , "red" )
            $('.ch-6').css("transform" , "translateX(-30px)")
            $('.content-sliderformobile .ch-6').css("transform" , "scale(1.1)")

            // char 7
            $('.ch-7 span').css("color" , "" )
            $('.ch-7').css("transform" , "")

            // char 8
            $('.ch-8 span').css("color" , "" )
            $('.ch-8').css("transform" , "")

            // char 9
            $('.ch-9 span').css("color" , "" )
            $('.ch-9').css("transform" , "")

            // char 10
            $('.ch-10 span').css("color" , "" )
            $('.ch-10').css("transform" , "")

            // char 11
            $('.ch-11 span').css("color" , "" )
            $('.ch-11').css("transform" , "")

            // char 12
            $('.ch-12 span').css("color" , "" )
            $('.ch-12').css("transform" , "")

            // char 13
            $('.ch-13 span').css("color" , "" )
            $('.ch-13').css("transform" , "")

            // char 14
            $('.ch-14 span').css("color" , "" )
            $('.ch-14').css("transform" , "")

            // char 15
            $('.ch-15 span').css("color" , "" )
            $('.ch-15').css("transform" , "")

            // char haracter physic
            // char 1
            $(".selected .characters .charac-1").removeClass("active");

            // char 2
            $(".selected .characters .charac-2").removeClass("active");

            // char 3
            $(".selected .characters .charac-3").removeClass("active");

            // char 4
            $(".selected .characters .charac-4").removeClass("active");

            // char 5
            $(".selected .characters .charac-5").removeClass("active");

            // char 6
            $(".selected .characters .charac-6").addClass("active");

            // char 7
            $(".selected .characters .charac-7").removeClass("active");

            // char 8
            $(".selected .characters .charac-8").removeClass("active");

            // char 9
            $(".selected .characters .charac-9").removeClass("active");

            // char 10
            $(".selected .characters .charac-10").removeClass("active");

            // char 11
            $(".selected .characters .charac-11").removeClass("active");

            // char 12
            $(".selected .characters .charac-12").removeClass("active");

            // char 13
            $(".selected .characters .charac-13").removeClass("active");

            // char 14
            $(".selected .characters .charac-14").removeClass("active");

            // char 15
            $(".selected .characters .charac-15").removeClass("active");

            // bio and type
            // char 1
            $(".content-baground .selected .type1").css("display" , "");

            // char 2
            $(".content-baground .selected .type2").css("display" , "");

            // char 3
            $(".content-baground .selected .type3").css("display" , "");

            // char 4
            $(".content-baground .selected .type4").css("display" , "");

            // char 5
            $(".content-baground .selected .type5").css("display" , "");

            // char 6
            $(".content-baground .selected .type6").css("display" , "block");

            // char 7
            $(".content-baground .selected .type7").css("display" , "");

            // char 8
            $(".content-baground .selected .type8").css("display" , "");

            // char 9
            $(".content-baground .selected .type9").css("display" , "");

            // char 10
            $(".content-baground .selected .type10").css("display" , "");

            // char 11
            $(".content-baground .selected .type11").css("display" , "");

            // char 12
            $(".content-baground .selected .type12").css("display" , "");

            // char 13
            $(".content-baground .selected .type13").css("display" , "");

            // char 14
            $(".content-baground .selected .type14").css("display" , "");

            // char 15
            $(".content-baground .selected .type15").css("display" , "");
        }));
        if($('.ch-7').on('click' , () =>
        {
            // char text name
            // char 1
            $('.ch-1 span').css("color" , "");
            $('.ch-1').css("transform" , "")

            // char 2
            $('.ch-2 span').css("color" , "" )
            $('.ch-2').css("transform" , "")

            // char 3
            $('.ch-3 span').css("color" , "" )
            $('.ch-3').css("transform" , "")

            // char 4
            $('.ch-4 span').css("color","")
            $('.ch-4').css("transform","")

            // char 5
            $('.ch-5 span').css("color" , "" )
            $('.ch-5').css("transform", "")

            // char 6
            $('.ch-6 span').css("color" , "" )
            $('.ch-6').css("transform" , "")

            // char 7
            $('.ch-7 span').css("color" , "red" )
            $('.ch-7').css("transform" , "translateX(-30px)")
            $('.content-sliderformobile .ch-7').css("transform" , "scale(1.1)")

            // char 8
            $('.ch-8 span').css("color" , "" )
            $('.ch-8').css("transform" , "")

            // char 9
            $('.ch-9 span').css("color" , "" )
            $('.ch-9').css("transform" , "")

            // char 10
            $('.ch-10 span').css("color" , "" )
            $('.ch-10').css("transform" , "")

            // char 11
            $('.ch-11 span').css("color" , "" )
            $('.ch-11').css("transform" , "")

            // char 12
            $('.ch-12 span').css("color" , "" )
            $('.ch-12').css("transform" , "")

            // char 13
            $('.ch-13 span').css("color" , "" )
            $('.ch-13').css("transform" , "")

            // char 14
            $('.ch-14 span').css("color" , "" )
            $('.ch-14').css("transform" , "")

            // char 15
            $('.ch-15 span').css("color" , "" )
            $('.ch-15').css("transform" , "")

            // char haracter physic
            // char 1
            $(".selected .characters .charac-1").removeClass("active");

            // char 2
            $(".selected .characters .charac-2").removeClass("active");

            // char 3
            $(".selected .characters .charac-3").removeClass("active");

            // char 4
            $(".selected .characters .charac-4").removeClass("active");

            // char 5
            $(".selected .characters .charac-5").removeClass("active");

            // char 6
            $(".selected .characters .charac-6").removeClass("active");

            // char 7
            $(".selected .characters .charac-7").addClass("active");

            // char 8
            $(".selected .characters .charac-8").removeClass("active");

            // char 9
            $(".selected .characters .charac-9").removeClass("active");

            // char 10
            $(".selected .characters .charac-10").removeClass("active");

            // char 11
            $(".selected .characters .charac-11").removeClass("active");

            // char 12
            $(".selected .characters .charac-12").removeClass("active");

            // char 13
            $(".selected .characters .charac-13").removeClass("active");

            // char 14
            $(".selected .characters .charac-14").removeClass("active");

            // char 15
            $(".selected .characters .charac-15").removeClass("active");

            // bio and type
            // char 1
            $(".content-baground .selected .type1").css("display" , "");

            // char 2
            $(".content-baground .selected .type2").css("display" , "");

            // char 3
            $(".content-baground .selected .type3").css("display" , "");

            // char 4
            $(".content-baground .selected .type4").css("display" , "");

            // char 5
            $(".content-baground .selected .type5").css("display" , "");

            // char 6
            $(".content-baground .selected .type6").css("display" , "");

            // char 7
            $(".content-baground .selected .type7").css("display" , "block");

            // char 8
            $(".content-baground .selected .type8").css("display" , "");

            // char 9
            $(".content-baground .selected .type9").css("display" , "");

            // char 10
            $(".content-baground .selected .type10").css("display" , "");

            // char 11
            $(".content-baground .selected .type11").css("display" , "");

            // char 12
            $(".content-baground .selected .type12").css("display" , "");

            // char 13
            $(".content-baground .selected .type13").css("display" , "");

            // char 14
            $(".content-baground .selected .type14").css("display" , "");

            // char 15
            $(".content-baground .selected .type15").css("display" , "");
        }));
        if($('.ch-8').on('click' , () =>
        {
            // char text name
            // char 1
            $('.ch-1 span').css("color" , "");
            $('.ch-1').css("transform" , "")

            // char 2
            $('.ch-2 span').css("color" , "" )
            $('.ch-2').css("transform" , "")

            // char 3
            $('.ch-3 span').css("color" , "" )
            $('.ch-3').css("transform" , "")

            // char 4
            $('.ch-4 span').css("color","")
            $('.ch-4').css("transform","")

            // char 5
            $('.ch-5 span').css("color" , "" )
            $('.ch-5').css("transform", "")

            // char 6
            $('.ch-6 span').css("color" , "" )
            $('.ch-6').css("transform" , "")

            // char 7
            $('.ch-7 span').css("color" , "" )
            $('.ch-7').css("transform" , "")

            // char 8
            $('.ch-8 span').css("color" , "red" )
            $('.ch-8').css("transform" , "translateX(-30px)")
            $('.content-sliderformobile .ch-8').css("transform" , "scale(1.1)")

            // char 9
            $('.ch-9 span').css("color" , "" )
            $('.ch-9').css("transform" , "")

            // char 10
            $('.ch-10 span').css("color" , "" )
            $('.ch-10').css("transform" , "")

            // char 11
            $('.ch-11 span').css("color" , "" )
            $('.ch-11').css("transform" , "")

            // char 12
            $('.ch-12 span').css("color" , "" )
            $('.ch-12').css("transform" , "")

            // char 13
            $('.ch-13 span').css("color" , "" )
            $('.ch-13').css("transform" , "")

            // char 14
            $('.ch-14 span').css("color" , "" )
            $('.ch-14').css("transform" , "")

            // char 15
            $('.ch-15 span').css("color" , "" )
            $('.ch-15').css("transform" , "")

            // char haracter physic
            // char 1
            $(".selected .characters .charac-1").removeClass("active");

            // char 2
            $(".selected .characters .charac-2").removeClass("active");

            // char 3
            $(".selected .characters .charac-3").removeClass("active");

            // char 4
            $(".selected .characters .charac-4").removeClass("active");

            // char 5
            $(".selected .characters .charac-5").removeClass("active");

            // char 6
            $(".selected .characters .charac-6").removeClass("active");

            // char 7
            $(".selected .characters .charac-7").removeClass("active");

            // char 8
            $(".selected .characters .charac-8").addClass("active");

            // char 9
            $(".selected .characters .charac-9").removeClass("active");

            // char 10
            $(".selected .characters .charac-10").removeClass("active");

            // char 11
            $(".selected .characters .charac-11").removeClass("active");

            // char 12
            $(".selected .characters .charac-12").removeClass("active");

            // char 13
            $(".selected .characters .charac-13").removeClass("active");

            // char 14
            $(".selected .characters .charac-14").removeClass("active");

            // char 15
            $(".selected .characters .charac-15").removeClass("active");

            // bio and type
            // char 1
            $(".content-baground .selected .type1").css("display" , "");

            // char 2
            $(".content-baground .selected .type2").css("display" , "");

            // char 3
            $(".content-baground .selected .type3").css("display" , "");

            // char 4
            $(".content-baground .selected .type4").css("display" , "");

            // char 5
            $(".content-baground .selected .type5").css("display" , "");

            // char 6
            $(".content-baground .selected .type6").css("display" , "");

            // char 7
            $(".content-baground .selected .type7").css("display" , "");

            // char 8
            $(".content-baground .selected .type8").css("display" , "block");

            // char 9
            $(".content-baground .selected .type9").css("display" , "");

            // char 10
            $(".content-baground .selected .type10").css("display" , "");

            // char 11
            $(".content-baground .selected .type11").css("display" , "");

            // char 12
            $(".content-baground .selected .type12").css("display" , "");

            // char 13
            $(".content-baground .selected .type13").css("display" , "");

            // char 14
            $(".content-baground .selected .type14").css("display" , "");

            // char 15
            $(".content-baground .selected .type15").css("display" , "");
        }));
        if($('.ch-9').on('click' , () =>
        {
            // char text name
            // char 1
            $('.ch-1 span').css("color" , "");
            $('.ch-1').css("transform" , "")

            // char 2
            $('.ch-2 span').css("color" , "" )
            $('.ch-2').css("transform" , "")

            // char 3
            $('.ch-3 span').css("color" , "" )
            $('.ch-3').css("transform" , "")

            // char 4
            $('.ch-4 span').css("color","")
            $('.ch-4').css("transform","")

            // char 5
            $('.ch-5 span').css("color" , "" )
            $('.ch-5').css("transform", "")

            // char 6
            $('.ch-6 span').css("color" , "" )
            $('.ch-6').css("transform" , "")

            // char 7
            $('.ch-7 span').css("color" , "" )
            $('.ch-7').css("transform" , "")

            // char 8
            $('.ch-8 span').css("color" , "" )
            $('.ch-8').css("transform" , "")

            // char 9
            $('.ch-9 span').css("color" , "red" )
            $('.ch-9').css("transform" , "translateX(-30px)")
            $('.content-sliderformobile .ch-9').css("transform" , "scale(1.1)")

            // char 10
            $('.ch-10 span').css("color" , "" )
            $('.ch-10').css("transform" , "")

            // char 11
            $('.ch-11 span').css("color" , "" )
            $('.ch-11').css("transform" , "")

            // char 12
            $('.ch-12 span').css("color" , "" )
            $('.ch-12').css("transform" , "")

            // char 13
            $('.ch-13 span').css("color" , "" )
            $('.ch-13').css("transform" , "")

            // char 14
            $('.ch-14 span').css("color" , "" )
            $('.ch-14').css("transform" , "")

            // char 15
            $('.ch-15 span').css("color" , "" )
            $('.ch-15').css("transform" , "")

            // char haracter physic
            // char 1
            $(".selected .characters .charac-1").removeClass("active");

            // char 2
            $(".selected .characters .charac-2").removeClass("active");

            // char 3
            $(".selected .characters .charac-3").removeClass("active");

            // char 4
            $(".selected .characters .charac-4").removeClass("active");

            // char 5
            $(".selected .characters .charac-5").removeClass("active");

            // char 6
            $(".selected .characters .charac-6").removeClass("active");

            // char 7
            $(".selected .characters .charac-7").removeClass("active");

            // char 8
            $(".selected .characters .charac-8").removeClass("active");

            // char 9
            $(".selected .characters .charac-9").addClass("active");

            // char 10
            $(".selected .characters .charac-10").removeClass("active");

            // char 11
            $(".selected .characters .charac-11").removeClass("active");

            // char 12
            $(".selected .characters .charac-12").removeClass("active");

            // char 13
            $(".selected .characters .charac-13").removeClass("active");

            // char 14
            $(".selected .characters .charac-14").removeClass("active");

            // char 15
            $(".selected .characters .charac-15").removeClass("active");

            // bio and type
            // char 1
            $(".content-baground .selected .type1").css("display" , "");

            // char 2
            $(".content-baground .selected .type2").css("display" , "");

            // char 3
            $(".content-baground .selected .type3").css("display" , "");

            // char 4
            $(".content-baground .selected .type4").css("display" , "");

            // char 5
            $(".content-baground .selected .type5").css("display" , "");

            // char 6
            $(".content-baground .selected .type6").css("display" , "");

            // char 7
            $(".content-baground .selected .type7").css("display" , "");

            // char 8
            $(".content-baground .selected .type8").css("display" , "");

            // char 9
            $(".content-baground .selected .type9").css("display" , "block");

            // char 10
            $(".content-baground .selected .type10").css("display" , "");

            // char 11
            $(".content-baground .selected .type11").css("display" , "");

            // char 12
            $(".content-baground .selected .type12").css("display" , "");

            // char 13
            $(".content-baground .selected .type13").css("display" , "");

            // char 14
            $(".content-baground .selected .type14").css("display" , "");

            // char 15
            $(".content-baground .selected .type15").css("display" , "");
        }));
        if($('.ch-10').on('click' , () =>
        {
            // char text name
            // char 1
            $('.ch-1 span').css("color" , "");
            $('.ch-1').css("transform" , "")

            // char 2
            $('.ch-2 span').css("color" , "" )
            $('.ch-2').css("transform" , "")

            // char 3
            $('.ch-3 span').css("color" , "" )
            $('.ch-3').css("transform" , "")

            // char 4
            $('.ch-4 span').css("color","")
            $('.ch-4').css("transform","")

            // char 5
            $('.ch-5 span').css("color" , "" )
            $('.ch-5').css("transform", "")

            // char 6
            $('.ch-6 span').css("color" , "" )
            $('.ch-6').css("transform" , "")

            // char 7
            $('.ch-7 span').css("color" , "" )
            $('.ch-7').css("transform" , "")

            // char 8
            $('.ch-8 span').css("color" , "" )
            $('.ch-8').css("transform" , "")

            // char 9
            $('.ch-9 span').css("color" , "" )
            $('.ch-9').css("transform" , "")

            // char 10
            $('.ch-10 span').css("color" , "red" )
            $('.ch-10').css("transform" , "translateX(-30px)")
            $('.content-sliderformobile .ch-10').css("transform" , "scale(1.1)")
            // char 11
            $('.ch-11 span').css("color" , "" )
            $('.ch-11').css("transform" , "")

            // char 12
            $('.ch-12 span').css("color" , "" )
            $('.ch-12').css("transform" , "")

            // char 13
            $('.ch-13 span').css("color" , "" )
            $('.ch-13').css("transform" , "")

            // char 14
            $('.ch-14 span').css("color" , "" )
            $('.ch-14').css("transform" , "")

            // char 15
            $('.ch-15 span').css("color" , "" )
            $('.ch-15').css("transform" , "")

            // char haracter physic
            // char 1
            $(".selected .characters .charac-1").removeClass("active");

            // char 2
            $(".selected .characters .charac-2").removeClass("active");

            // char 3
            $(".selected .characters .charac-3").removeClass("active");

            // char 4
            $(".selected .characters .charac-4").removeClass("active");

            // char 5
            $(".selected .characters .charac-5").removeClass("active");

            // char 6
            $(".selected .characters .charac-6").removeClass("active");

            // char 7
            $(".selected .characters .charac-7").removeClass("active");

            // char 8
            $(".selected .characters .charac-8").removeClass("active");

            // char 9
            $(".selected .characters .charac-9").removeClass("active");

            // char 10
            $(".selected .characters .charac-10").addClass("active");

            // char 11
            $(".selected .characters .charac-11").removeClass("active");

            // char 12
            $(".selected .characters .charac-12").removeClass("active");

            // char 13
            $(".selected .characters .charac-13").removeClass("active");

            // char 14
            $(".selected .characters .charac-14").removeClass("active");

            // char 15
            $(".selected .characters .charac-15").removeClass("active");

            // bio and type
            // char 1
            $(".content-baground .selected .type1").css("display" , "");

            // char 2
            $(".content-baground .selected .type2").css("display" , "");

            // char 3
            $(".content-baground .selected .type3").css("display" , "");

            // char 4
            $(".content-baground .selected .type4").css("display" , "");

            // char 5
            $(".content-baground .selected .type5").css("display" , "");

            // char 6
            $(".content-baground .selected .type6").css("display" , "");

            // char 7
            $(".content-baground .selected .type7").css("display" , "");

            // char 8
            $(".content-baground .selected .type8").css("display" , "");

            // char 9
            $(".content-baground .selected .type9").css("display" , "");

            // char 10
            $(".content-baground .selected .type10").css("display" , "block");

            // char 11
            $(".content-baground .selected .type11").css("display" , "");

            // char 12
            $(".content-baground .selected .type12").css("display" , "");

            // char 13
            $(".content-baground .selected .type13").css("display" , "");

            // char 14
            $(".content-baground .selected .type14").css("display" , "");

            // char 15
            $(".content-baground .selected .type15").css("display" , "");
        }));
        if($('.ch-11').on('click' , () =>
        {
            // char text name
            // char 1
            $('.ch-1 span').css("color" , "");
            $('.ch-1').css("transform" , "")

            // char 2
            $('.ch-2 span').css("color" , "" )
            $('.ch-2').css("transform" , "")

            // char 3
            $('.ch-3 span').css("color" , "" )
            $('.ch-3').css("transform" , "")

            // char 4
            $('.ch-4 span').css("color","")
            $('.ch-4').css("transform","")

            // char 5
            $('.ch-5 span').css("color" , "" )
            $('.ch-5').css("transform", "")

            // char 6
            $('.ch-6 span').css("color" , "" )
            $('.ch-6').css("transform" , "")

            // char 7
            $('.ch-7 span').css("color" , "" )
            $('.ch-7').css("transform" , "")

            // char 8
            $('.ch-8 span').css("color" , "" )
            $('.ch-8').css("transform" , "")

            // char 9
            $('.ch-9 span').css("color" , "" )
            $('.ch-9').css("transform" , "")

            // char 10
            $('.ch-10 span').css("color" , "" )
            $('.ch-10').css("transform" , "")

            // char 11
            $('.ch-11 span').css("color" , "red" )
            $('.ch-11').css("transform" , "translateX(-30px)")
            $('.content-sliderformobile .ch-11').css("transform" , "scale(1.1)")

            // char 12
            $('.ch-12 span').css("color" , "" )
            $('.ch-12').css("transform" , "")

            // char 13
            $('.ch-13 span').css("color" , "" )
            $('.ch-13').css("transform" , "")

            // char 14
            $('.ch-14 span').css("color" , "" )
            $('.ch-14').css("transform" , "")

            // char 15
            $('.ch-15 span').css("color" , "" )
            $('.ch-15').css("transform" , "")

            // char haracter physic
            // char 1
            $(".selected .characters .charac-1").removeClass("active");

            // char 2
            $(".selected .characters .charac-2").removeClass("active");

            // char 3
            $(".selected .characters .charac-3").removeClass("active");

            // char 4
            $(".selected .characters .charac-4").removeClass("active");

            // char 5
            $(".selected .characters .charac-5").removeClass("active");

            // char 6
            $(".selected .characters .charac-6").removeClass("active");

            // char 7
            $(".selected .characters .charac-7").removeClass("active");

            // char 8
            $(".selected .characters .charac-8").removeClass("active");

            // char 9
            $(".selected .characters .charac-9").removeClass("active");

            // char 10
            $(".selected .characters .charac-10").removeClass("active");

            // char 11
            $(".selected .characters .charac-11").addClass("active");

            // char 12
            $(".selected .characters .charac-12").removeClass("active");

            // char 13
            $(".selected .characters .charac-13").removeClass("active");

            // char 14
            $(".selected .characters .charac-14").removeClass("active");

            // char 15
            $(".selected .characters .charac-15").removeClass("active");

            // bio and type
            // char 1
            $(".content-baground .selected .type1").css("display" , "");

            // char 2
            $(".content-baground .selected .type2").css("display" , "");

            // char 3
            $(".content-baground .selected .type3").css("display" , "");

            // char 4
            $(".content-baground .selected .type4").css("display" , "");

            // char 5
            $(".content-baground .selected .type5").css("display" , "");

            // char 6
            $(".content-baground .selected .type6").css("display" , "");

            // char 7
            $(".content-baground .selected .type7").css("display" , "");

            // char 8
            $(".content-baground .selected .type8").css("display" , "");

            // char 9
            $(".content-baground .selected .type9").css("display" , "");

            // char 10
            $(".content-baground .selected .type10").css("display" , "");

            // char 11
            $(".content-baground .selected .type11").css("display" , "block");

            // char 12
            $(".content-baground .selected .type12").css("display" , "");

            // char 13
            $(".content-baground .selected .type13").css("display" , "");

            // char 14
            $(".content-baground .selected .type14").css("display" , "");

            // char 15
            $(".content-baground .selected .type15").css("display" , "");
        }));
        if($('.ch-12').on('click' , () =>
        {
            // char text name
            // char 1
            $('.ch-1 span').css("color" , "");
            $('.ch-1').css("transform" , "")

            // char 2
            $('.ch-2 span').css("color" , "" )
            $('.ch-2').css("transform" , "")

            // char 3
            $('.ch-3 span').css("color" , "" )
            $('.ch-3').css("transform" , "")

            // char 4
            $('.ch-4 span').css("color","")
            $('.ch-4').css("transform","")

            // char 5
            $('.ch-5 span').css("color" , "" )
            $('.ch-5').css("transform", "")

            // char 6
            $('.ch-6 span').css("color" , "" )
            $('.ch-6').css("transform" , "")

            // char 7
            $('.ch-7 span').css("color" , "" )
            $('.ch-7').css("transform" , "")

            // char 8
            $('.ch-8 span').css("color" , "" )
            $('.ch-8').css("transform" , "")

            // char 9
            $('.ch-9 span').css("color" , "" )
            $('.ch-9').css("transform" , "")

            // char 10
            $('.ch-10 span').css("color" , "" )
            $('.ch-10').css("transform" , "")

            // char 11
            $('.ch-11 span').css("color" , "" )
            $('.ch-11').css("transform" , "")

            // char 12
            $('.ch-12 span').css("color" , "red" )
            $('.ch-12').css("transform" , "translateX(-30px)")
            $('.content-sliderformobile .ch-12').css("transform" , "scale(1.1)")

            // char 13
            $('.ch-13 span').css("color" , "" )
            $('.ch-13').css("transform" , "")

            // char 14
            $('.ch-14 span').css("color" , "" )
            $('.ch-14').css("transform" , "")

            // char 15
            $('.ch-15 span').css("color" , "" )
            $('.ch-15').css("transform" , "")

            // char haracter physic
            // char 1
            $(".selected .characters .charac-1").removeClass("active");

            // char 2
            $(".selected .characters .charac-2").removeClass("active");

            // char 3
            $(".selected .characters .charac-3").removeClass("active");

            // char 4
            $(".selected .characters .charac-4").removeClass("active");

            // char 5
            $(".selected .characters .charac-5").removeClass("active");

            // char 6
            $(".selected .characters .charac-6").removeClass("active");

            // char 7
            $(".selected .characters .charac-7").removeClass("active");

            // char 8
            $(".selected .characters .charac-8").removeClass("active");

            // char 9
            $(".selected .characters .charac-9").removeClass("active");

            // char 10
            $(".selected .characters .charac-10").removeClass("active");

            // char 11
            $(".selected .characters .charac-11").removeClass("active");

            // char 12
            $(".selected .characters .charac-12").addClass("active");

            // char 13
            $(".selected .characters .charac-13").removeClass("active");

            // char 14
            $(".selected .characters .charac-14").removeClass("active");

            // char 15
            $(".selected .characters .charac-15").removeClass("active");

            // bio and type
            // char 1
            $(".content-baground .selected .type1").css("display" , "");

            // char 2
            $(".content-baground .selected .type2").css("display" , "");

            // char 3
            $(".content-baground .selected .type3").css("display" , "");

            // char 4
            $(".content-baground .selected .type4").css("display" , "");

            // char 5
            $(".content-baground .selected .type5").css("display" , "");

            // char 6
            $(".content-baground .selected .type6").css("display" , "");

            // char 7
            $(".content-baground .selected .type7").css("display" , "");

            // char 8
            $(".content-baground .selected .type8").css("display" , "");

            // char 9
            $(".content-baground .selected .type9").css("display" , "");

            // char 10
            $(".content-baground .selected .type10").css("display" , "");

            // char 11
            $(".content-baground .selected .type11").css("display" , "");

            // char 12
            $(".content-baground .selected .type12").css("display" , "block");

            // char 13
            $(".content-baground .selected .type13").css("display" , "");

            // char 14
            $(".content-baground .selected .type14").css("display" , "");

            // char 15
            $(".content-baground .selected .type15").css("display" , "");
        }));
        if($('.ch-13').on('click' , () =>
        {
            // char text name
            // char 1
            $('.ch-1 span').css("color" , "");
            $('.ch-1').css("transform" , "")

            // char 2
            $('.ch-2 span').css("color" , "" )
            $('.ch-2').css("transform" , "")

            // char 3
            $('.ch-3 span').css("color" , "" )
            $('.ch-3').css("transform" , "")

            // char 4
            $('.ch-4 span').css("color","")
            $('.ch-4').css("transform","")

            // char 5
            $('.ch-5 span').css("color" , "" )
            $('.ch-5').css("transform", "")

            // char 6
            $('.ch-6 span').css("color" , "" )
            $('.ch-6').css("transform" , "")

            // char 7
            $('.ch-7 span').css("color" , "" )
            $('.ch-7').css("transform" , "")

            // char 8
            $('.ch-8 span').css("color" , "" )
            $('.ch-8').css("transform" , "")

            // char 9
            $('.ch-9 span').css("color" , "" )
            $('.ch-9').css("transform" , "")

            // char 10
            $('.ch-10 span').css("color" , "" )
            $('.ch-10').css("transform" , "")

            // char 11
            $('.ch-11 span').css("color" , "" )
            $('.ch-11').css("transform" , "")

            // char 12
            $('.ch-12 span').css("color" , "" )
            $('.ch-12').css("transform" , "")

            // char 13
            $('.ch-13 span').css("color" , "red" )
            $('.ch-13').css("transform" , "translateX(-30px)")
            $('.content-sliderformobile .ch-13').css("transform" , "scale(1.1)")

            // char 14
            $('.ch-14 span').css("color" , "" )
            $('.ch-14').css("transform" , "")

            // char 15
            $('.ch-15 span').css("color" , "" )
            $('.ch-15').css("transform" , "")

            // char haracter physic
            // char 1
            $(".selected .characters .charac-1").removeClass("active");

            // char 2
            $(".selected .characters .charac-2").removeClass("active");

            // char 3
            $(".selected .characters .charac-3").removeClass("active");

            // char 4
            $(".selected .characters .charac-4").removeClass("active");

            // char 5
            $(".selected .characters .charac-5").removeClass("active");

            // char 6
            $(".selected .characters .charac-6").removeClass("active");

            // char 7
            $(".selected .characters .charac-7").removeClass("active");

            // char 8
            $(".selected .characters .charac-8").removeClass("active");

            // char 9
            $(".selected .characters .charac-9").removeClass("active");

            // char 10
            $(".selected .characters .charac-10").removeClass("active");

            // char 11
            $(".selected .characters .charac-11").removeClass("active");

            // char 12
            $(".selected .characters .charac-12").removeClass("active");

            // char 13
            $(".selected .characters .charac-13").addClass("active");

            // char 14
            $(".selected .characters .charac-14").removeClass("active");

            // char 15
            $(".selected .characters .charac-15").removeClass("active");

            // bio and type
            // char 1
            $(".content-baground .selected .type1").css("display" , "");

            // char 2
            $(".content-baground .selected .type2").css("display" , "");

            // char 3
            $(".content-baground .selected .type3").css("display" , "");

            // char 4
            $(".content-baground .selected .type4").css("display" , "");

            // char 5
            $(".content-baground .selected .type5").css("display" , "");

            // char 6
            $(".content-baground .selected .type6").css("display" , "");

            // char 7
            $(".content-baground .selected .type7").css("display" , "");

            // char 8
            $(".content-baground .selected .type8").css("display" , "");

            // char 9
            $(".content-baground .selected .type9").css("display" , "");

            // char 10
            $(".content-baground .selected .type10").css("display" , "");

            // char 11
            $(".content-baground .selected .type11").css("display" , "");

            // char 12
            $(".content-baground .selected .type12").css("display" , "");

            // char 13
            $(".content-baground .selected .type13").css("display" , "block");

            // char 14
            $(".content-baground .selected .type14").css("display" , "");

            // char 15
            $(".content-baground .selected .type15").css("display" , "");
        }));
        if($('.ch-14').on('click' , () =>
        {
            // char text name
            // char 1
            $('.ch-1 span').css("color" , "");
            $('.ch-1').css("transform" , "")

            // char 2
            $('.ch-2 span').css("color" , "" )
            $('.ch-2').css("transform" , "")

            // char 3
            $('.ch-3 span').css("color" , "" )
            $('.ch-3').css("transform" , "")

            // char 4
            $('.ch-4 span').css("color","")
            $('.ch-4').css("transform","")

            // char 5
            $('.ch-5 span').css("color" , "" )
            $('.ch-5').css("transform", "")

            // char 6
            $('.ch-6 span').css("color" , "" )
            $('.ch-6').css("transform" , "")

            // char 7
            $('.ch-7 span').css("color" , "" )
            $('.ch-7').css("transform" , "")

            // char 8
            $('.ch-8 span').css("color" , "" )
            $('.ch-8').css("transform" , "")

            // char 9
            $('.ch-9 span').css("color" , "" )
            $('.ch-9').css("transform" , "")

            // char 10
            $('.ch-10 span').css("color" , "" )
            $('.ch-10').css("transform" , "")

            // char 11
            $('.ch-11 span').css("color" , "" )
            $('.ch-11').css("transform" , "")

            // char 12
            $('.ch-12 span').css("color" , "" )
            $('.ch-12').css("transform" , "")

            // char 13
            $('.ch-13 span').css("color" , "" )
            $('.ch-13').css("transform" , "")

            // char 14
            $('.ch-14 span').css("color" , "red" )
            $('.ch-14').css("transform" , "translateX(-30px)")
            $('.content-sliderformobile .ch-14').css("transform" , "scale(1.1)")

            // char 15
            $('.ch-15 span').css("color" , "" )
            $('.ch-15').css("transform" , "")

            // char haracter physic
            // char 1
            $(".selected .characters .charac-1").removeClass("active");

            // char 2
            $(".selected .characters .charac-2").removeClass("active");

            // char 3
            $(".selected .characters .charac-3").removeClass("active");

            // char 4
            $(".selected .characters .charac-4").removeClass("active");

            // char 5
            $(".selected .characters .charac-5").removeClass("active");

            // char 6
            $(".selected .characters .charac-6").removeClass("active");

            // char 7
            $(".selected .characters .charac-7").removeClass("active");

            // char 8
            $(".selected .characters .charac-8").removeClass("active");

            // char 9
            $(".selected .characters .charac-9").removeClass("active");

            // char 10
            $(".selected .characters .charac-10").removeClass("active");

            // char 11
            $(".selected .characters .charac-11").removeClass("active");

            // char 12
            $(".selected .characters .charac-12").removeClass("active");

            // char 13
            $(".selected .characters .charac-13").removeClass("active");
            // char 14
            $(".selected .characters .charac-14").addClass("active");

            // char 15
            $(".selected .characters .charac-15").removeClass("active");

            // bio and type
            // char 1
            $(".content-baground .selected .type1").css("display" , "");

            // char 2
            $(".content-baground .selected .type2").css("display" , "");

            // char 3
            $(".content-baground .selected .type3").css("display" , "");

            // char 4
            $(".content-baground .selected .type4").css("display" , "");

            // char 5
            $(".content-baground .selected .type5").css("display" , "");

            // char 6
            $(".content-baground .selected .type6").css("display" , "");

            // char 7
            $(".content-baground .selected .type7").css("display" , "");

            // char 8
            $(".content-baground .selected .type8").css("display" , "");

            // char 9
            $(".content-baground .selected .type9").css("display" , "");

            // char 10
            $(".content-baground .selected .type10").css("display" , "");

            // char 11
            $(".content-baground .selected .type11").css("display" , "");

            // char 12
            $(".content-baground .selected .type12").css("display" , "");

            // char 13
            $(".content-baground .selected .type13").css("display" , "");

            // char 14
            $(".content-baground .selected .type14").css("display" , "block");

            // char 15
            $(".content-baground .selected .type15").css("display" , "");
        }));
        if($('.ch-15').on('click' , () =>
        {
            // char text name
            // char 1
            $('.ch-1 span').css("color" , "");
            $('.ch-1').css("transform" , "")

            // char 2
            $('.ch-2 span').css("color" , "" )
            $('.ch-2').css("transform" , "")

            // char 3
            $('.ch-3 span').css("color" , "" )
            $('.ch-3').css("transform" , "")

            // char 4
            $('.ch-4 span').css("color","")
            $('.ch-4').css("transform","")

            // char 5
            $('.ch-5 span').css("color" , "" )
            $('.ch-5').css("transform", "")

            // char 6
            $('.ch-6 span').css("color" , "" )
            $('.ch-6').css("transform" , "")

            // char 7
            $('.ch-7 span').css("color" , "" )
            $('.ch-7').css("transform" , "")

            // char 8
            $('.ch-8 span').css("color" , "" )
            $('.ch-8').css("transform" , "")

            // char 9
            $('.ch-9 span').css("color" , "" )
            $('.ch-9').css("transform" , "")

            // char 10
            $('.ch-10 span').css("color" , "" )
            $('.ch-10').css("transform" , "")

            // char 11
            $('.ch-11 span').css("color" , "" )
            $('.ch-11').css("transform" , "")

            // char 12
            $('.ch-12 span').css("color" , "" )
            $('.ch-12').css("transform" , "")

            // char 13
            $('.ch-13 span').css("color" , "" )
            $('.ch-13').css("transform" , "")

            // char 14
            $('.ch-14 span').css("color" , "" )
            $('.ch-14').css("transform" , "")

            // char 15
            $('.ch-15 span').css("color" , "red" )
            $('.ch-15').css("transform" , "translateX(-30px)")
            $('.content-sliderformobile .ch-15').css("transform" , "scale(1.1)")

            // char haracter physic
            // char 1
            $(".selected .characters .charac-1").removeClass("active");

            // char 2
            $(".selected .characters .charac-2").removeClass("active");

            // char 3
            $(".selected .characters .charac-3").removeClass("active");

            // char 4
            $(".selected .characters .charac-4").removeClass("active");

            // char 5
            $(".selected .characters .charac-5").removeClass("active");

            // char 6
            $(".selected .characters .charac-6").removeClass("active");

            // char 7
            $(".selected .characters .charac-7").removeClass("active");

            // char 8
            $(".selected .characters .charac-8").removeClass("active");

            // char 9
            $(".selected .characters .charac-9").removeClass("active");

            // char 10
            $(".selected .characters .charac-10").removeClass("active");

            // char 11
            $(".selected .characters .charac-11").removeClass("active");

            // char 12
            $(".selected .characters .charac-12").removeClass("active");

            // char 13
            $(".selected .characters .charac-13").removeClass("active");

            // char 14
            $(".selected .characters .charac-14").removeClass("active");

            // char 15
            $(".selected .characters .charac-15").addClass("active");

            // bio and type
            // char 1
            $(".content-baground .selected .type1").css("display" , "");

            // char 2
            $(".content-baground .selected .type2").css("display" , "");

            // char 3
            $(".content-baground .selected .type3").css("display" , "");

            // char 4
            $(".content-baground .selected .type4").css("display" , "");

            // char 5
            $(".content-baground .selected .type5").css("display" , "");

            // char 6
            $(".content-baground .selected .type6").css("display" , "");

            // char 7
            $(".content-baground .selected .type7").css("display" , "");

            // char 8
            $(".content-baground .selected .type8").css("display" , "");

            // char 9
            $(".content-baground .selected .type9").css("display" , "");

            // char 10
            $(".content-baground .selected .type10").css("display" , "");

            // char 11
            $(".content-baground .selected .type11").css("display" , "");

            // char 12
            $(".content-baground .selected .type12").css("display" , "");

            // char 13
            $(".content-baground .selected .type13").css("display" , "");

            // char 14
            $(".content-baground .selected .type14").css("display" , "");

            // char 15
            $(".content-baground .selected .type15").css("display" , "block");
        }));
    }

    const mouseWheel = document.querySelector('.content-slider');
    const mouseWheelHor = document.querySelector('.content-sliderformobile');

    // for vertical
    mouseWheel.addEventListener('wheel', function(event) 
    {
        const speed = Math.abs(55); 
        // Scroll down
        if (event.deltaY > 0) 
        {
            mouseWheel.scrollTop += speed;
        }
        else // Scroll top
        {
            mouseWheel.scrollTop -= speed;	
        }

        event.preventDefault();
    });

    // for horizontal
    mouseWheelHor.addEventListener('wheel', function(event) 
    {
        const speed = Math.abs(55); 
        // Scroll down
        if (event.deltaY > 0) 
        {
            mouseWheelHor.scrollLeft += speed;
        }
        else // Scroll top
        {
            mouseWheelHor.scrollLeft -= speed;	
        }

        event.preventDefault();
    });

});




