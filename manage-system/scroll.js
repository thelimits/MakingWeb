
const Layer_1 = document.querySelector('#Layer_1');
const Layer_2 = document.querySelector('.particle');
const char = document.querySelector('.char');
const textt = document.querySelector('.textt');
const video_wrappers = document.querySelector('.video-wrapper');
const particle2 = document.querySelector(".particle2");
const bg = document.querySelector(".tri-content .agents-text-bg");
const char_contents2 = document.querySelector(".tri-content .namas .char");
const txt_anim = document.querySelector(".textt .intro");

window.addEventListener('scroll' , (event) =>
{
    event.preventDefault();
    const scroll = $(window).scrollTop();
    // console.log(scroll);

    // slideup scroll
    if(scroll > 689 && scroll < 1256 )
    {
        Layer_1.style.transform = "translate(435% ,9%)";
        Layer_2.style.transform = "translate(-100px ,150px)";
        Layer_2.style.transform = "scale(1.5125)";
    }
    else
    {
        Layer_1.style.transform = "";
        Layer_2.style.transform = "";
    }
    
    if(scroll > 689)
    {
        char.className = "slideup-char";
        textt.className ="slideup-textt";

        // for video
        video_wrappers.style = "visibility : visible";
        video_wrappers.style.animation = " video-wrapper-slide 3s";
    }

    // tri content
    if(scroll > 1300 && scroll < 2000)
    {
        particle2.style.transform = "scale(1.77)";
    }
    else
    {
        particle2.style.transform = "";
    }

    if(scroll > 1300 )
    {
        event.preventDefault();
        char_contents2.style.display = "initial";
        txt_anim.style.display = "flex";
        bg.style.display = "flex";

        // jquary
        $('.textt .sentence').css("display" , "block");
        $('.tri-content .containers .textt .wrap').css("display" , "flex");
        $('.tri-content .containers .gambars').css("display" , "block");
    }
    


    // tulisan agents scrolled
    if (scroll > 1350 && scroll < 1400)
    {
        bg.style.transform = "translate(0rem , 12rem)";
        $('.tri-content .containers .gambars').css("transform" , "translateY(-40%)")
    }
    else if (scroll > 1401 && scroll < 1500)
    {
        bg.style.transform = "translate(0rem , 15rem)";
        $('.tri-content .containers .gambars').css("transform" , "translateY(-41%)")
    }
    else if (scroll > 1501 && scroll < 1600)
    {
        bg.style.transform = "translate(0rem , 17rem)";
        $('.tri-content .containers .gambars').css("transform" , "translateY(-42%)")
    }
    else if (scroll > 1601 && scroll < 1700)
    {
        bg.style.transform = "translate(0rem , 20rem)";
        $('.tri-content .containers .gambars').css("transform" , "translateY(-43%)")
    }
    else if (scroll > 1701 && scroll < 1800)
    {
        bg.style.transform = "translate(0rem , 25rem)";
        $('.tri-content .containers .gambars').css("transform" , "translateY(-44%)")
    }
    else if (scroll > 1801 && scroll < 1900)
    {
        bg.style.transform = "translate(0rem , 30rem)";
        $('.tri-content .containers .gambars').css("transform" , "translateY(-45%)")
    }
    else if (scroll > 1901 )
    {
        bg.style.transform = "translate(0rem , 38rem)";
        $('.tri-content .containers .gambars').css("transform" , "translateY(-46%)")
    }

    // forth content
    if(scroll > 2000)
    {
        $('.forth-content .map .namess .namas .char').css("display" , "block");
        $('.forth-content .map .textt .intro').css("display" , "block");
        $('.forth-content .map .textt .sentence1').css("display" , "block");
        $('.forth-content .map  .textt .wrap').css("display" , "flex");
    }



});

