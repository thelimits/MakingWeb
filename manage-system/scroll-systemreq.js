window.addEventListener('scroll' , (event) =>
{
    event.preventDefault();
    const scroll = $(window).scrollTop();
    // console.log(scroll);

    if (scroll > 400 && scroll < 500)
    {
        $(".content-system .spesification-text svg").css("transform","translate(5% , -14rem)")
    }
    else if (scroll > 501 && scroll < 600)
    {
        $(".content-system .spesification-text svg").css("transform","translate(5% , -9rem)")
    }
    else if (scroll > 601 && scroll < 700)
    {
        $(".content-system .spesification-text svg").css("transform","translate(5% , -4rem)")
    }
    else if (scroll > 701 && scroll < 800)
    {
        $(".content-system .spesification-text svg").css("transform","translate(5% , 1rem)")
    }
    else if (scroll > 801 && scroll < 900)
    {
        $(".content-system .spesification-text svg").css("transform","translate(5% , 6rem)")
    }
    else if (scroll > 901 && scroll < 1000)
    {
        $(".content-system .spesification-text svg").css("transform","translate(5% , 11rem)")
    }
    else if (scroll > 1001 && scroll < 1100)
    {
        $(".content-system .spesification-text svg").css("transform","translate(5% , 16rem)")
    }
    else if (scroll > 1101 && scroll < 1200)
    {
        $(".content-system .spesification-text svg").css("transform","translate(5% , 21rem)")
    }
    else if (scroll > 1201)
    {
        $(".content-system .spesification-text svg").css("transform","translate(5% , 26rem)")
    }

});