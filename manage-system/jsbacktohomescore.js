

$("body").on('click' , () =>
{
    alert("please wait");
    setTimeout( () =>
    {
        window.location.href = 'index.php';
    },1000);
});