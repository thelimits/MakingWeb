

const navslide = () => 
{
    //    jquery
    $('#menu-checkbar-hamburger').on('click', (e) =>
    {
        e.preventDefault();
        // console.log("aktif");
        $(".hidden-box").toggleClass("hidden-box-normal");

        // animation cross
        $('#menu-checkbar-hamburger').toggleClass('toggle');
        
    });

    // for js
    // const hamburger = document.querySelector('#menu-checkbar-hamburger');
    // const nav = document.querySelector('.hidden-box');
    // hamburger.addEventListener('click', () =>
    // {
    //     // console.log("aktif");/
    //      nav.classList.toggle('hidden-box-normal');

    //     // animation cross
    //     hamburger.classList.toggle('toggle');
        
    // });
}

navslide();