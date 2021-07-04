const btn = document.getElementById("video-wrapper");
const video = document.getElementById("video");
const closea = document.getElementById("closes");
const head = document.getElementById("head");
// jquery
$('#video-wrapper , .sentence ~ .linkss').click(function(event)
{
    event.preventDefault();
    document.body.style.overflow = "hidden";
    video.style.visibility = "visible";
    closea.style.visibility = "visible";
    head.style.zIndex = "-1";
});

// jquery
$('iframe[src*="https://www.youtube.com/embed/eU1l7eBy2_Y?start=3&end=157&version=3&showinfo=0&rel=0&enablejsapi=1&loop=1&playlist=eU1l7eBy2_Y&modestbranding=1&autohide=1"]').addClass("stopVideo");
$(".fa-window-close").click(function() 
{
    // to stop video
    $('.stopVideo').each(function() 
    {
    //  $(this).attr('src', $(this).attr('src'));
     $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');

    });
     //   click functions
    head.style.zIndex = "";
    video.style.visibility = "hidden";
    closea.style.visibility = "hidden";
    document.body.style.overflow = "";
    return false;

});

