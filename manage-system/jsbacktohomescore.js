

$("body").on('click' , () =>
{
    alert("please wait");
    setTimeout( () =>
    {
        window.location.href = 'index.html';
    },1000);
});