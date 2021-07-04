
$( ".maps-wappers .choose-type .container-choose .choose-maps .blind" ).click( function(e) 
{
    e.preventDefault();
    $('.maps-wappers .img-wrap .image1').css('transform',"translate(0,0)");
    $('.maps-wappers .img-wrap .image2').css('transform',"translate(0,0)");
    $('.maps-wappers .img-wrap .image3').css('transform',"translate(0,0)");
    $('.maps-wappers .img-wrap .image4').css('transform',"translate(0,0)");
    $('.maps-wappers .img-wrap .image5').css('transform',"translate(0,0)");
    $('.maps-wappers .readmaps .blind-mps').css('display',"block");
    $('.maps-wappers .readmaps .pirate').css('display',"none");
    $('.maps-wappers .readmaps .temple').css('display',"none");
    $('.maps-wappers .readmaps .Towns').css('display',"none");
    $('.maps-wappers .readmaps .skys').css('display',"none");
});

$( ".maps-wappers .choose-type .container-choose .choose-maps .Ice" ).click( function(e) 
{
    e.preventDefault();
    $('.maps-wappers .img-wrap .image1').css('transform',"translate(-50% , 0)");
    $('.maps-wappers .img-wrap .image2').css('transform',"translate(-100% , 0)");
    $('.maps-wappers .img-wrap .image3').css('transform',"translate(-100% , 0)");
    $('.maps-wappers .img-wrap .image4').css('transform',"translate(-100% , 0)");
    $('.maps-wappers .img-wrap .image5').css('transform',"translate(-100%,0)");
    $('.maps-wappers .readmaps .blind-mps').css('display',"none");
    $('.maps-wappers .readmaps .pirate').css('display',"block");
    $('.maps-wappers .readmaps .temple').css('display',"none");
    $('.maps-wappers .readmaps .Towns').css('display',"none");
    $('.maps-wappers .readmaps .skys').css('display',"none");
});

$( ".maps-wappers .choose-type .container-choose .choose-maps .temple" ).click( function(e) 
{
    e.preventDefault();
    $('.maps-wappers .img-wrap .image1').css('transform',"translate(-100% , 0)");
    $('.maps-wappers .img-wrap .image2').css('transform',"translate(-150% , 0)");
    $('.maps-wappers .img-wrap .image3').css('transform',"translate(-200% , 0)");
    $('.maps-wappers .img-wrap .image4').css('transform',"translate(-200% , 0)");
    $('.maps-wappers .img-wrap .image5').css('transform',"translate(-200%, 0)");
    $('.maps-wappers .readmaps .temple').css('display',"block");
    $('.maps-wappers .readmaps .pirate').css('display',"none");
    $('.maps-wappers .readmaps .blind-mps').css('display',"none");
    $('.maps-wappers .readmaps .Towns').css('display',"none");
    $('.maps-wappers .readmaps .skys').css('display',"none");
});

$( ".maps-wappers .choose-type .container-choose .choose-maps .Town" ).click( function(e) 
{
    e.preventDefault();
    $('.maps-wappers .img-wrap .image1').css('transform',"translate(-100% , 0)");
    $('.maps-wappers .img-wrap .image2').css('transform',"translate(-150% , 0)");
    $('.maps-wappers .img-wrap .image3').css('transform',"translate(-250% , 0)");
    $('.maps-wappers .img-wrap .image4').css('transform',"translate(-300% , 0)");
    $('.maps-wappers .img-wrap .image5').css('transform',"translate(-300% ,0)");
    $('.maps-wappers .readmaps .temple').css('display',"none");
    $('.maps-wappers .readmaps .pirate').css('display',"none");
    $('.maps-wappers .readmaps .blind-mps').css('display',"none");
    $('.maps-wappers .readmaps .Towns').css('display',"block");
    $('.maps-wappers .readmaps .skys').css('display',"none");
});

$( ".maps-wappers .choose-type .container-choose .choose-maps .Sky" ).click( function(e) 
{
    e.preventDefault();
    $('.maps-wappers .img-wrap .image1').css('transform',"translate(-100% , 0)");
    $('.maps-wappers .img-wrap .image2').css('transform',"translate(-150% , 0)");
    $('.maps-wappers .img-wrap .image3').css('transform',"translate(-250% , 0)");
    $('.maps-wappers .img-wrap .image4').css('transform',"translate(-350% , 0)");
    $('.maps-wappers .img-wrap .image5').css('transform',"translate(-400% ,0)");
    $('.maps-wappers .readmaps .temple').css('display',"none");
    $('.maps-wappers .readmaps .pirate').css('display',"none");
    $('.maps-wappers .readmaps .blind-mps').css('display',"none");
    $('.maps-wappers .readmaps .Towns').css('display',"none");
    $('.maps-wappers .readmaps .skys').css('display',"block");
});

$( ".maps-wappers .choose-type .container-choose .choose-maps .Magic" ).click( function(e) 
{
    e.preventDefault();
    $('.maps-wappers .img-wrap2 .Magic-img').css('transform',"translate(0,0)");
    $('.maps-wappers .img-wrap2 .castle').css('transform',"translate(0,0)");
    $('.maps-wappers .readmaps .calstle').css('display',"none");
    $('.maps-wappers .readmaps .Magics').css('display',"block");
});

$( ".maps-wappers .choose-type .container-choose .choose-maps .cast" ).click( function(e) 
{
    e.preventDefault();
    $('.maps-wappers .img-wrap2 .Magic-img').css('transform',"translate(-50%,0)");
    $('.maps-wappers .img-wrap2 .castle').css('transform',"translate(-100%,0)");
    $('.maps-wappers .readmaps .calstle').css('display',"block");
    $('.maps-wappers .readmaps .Magics').css('display',"none");
});