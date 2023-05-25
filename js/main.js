$('.count').counterUp({
    delay:10,
    time:5000
});

mybutton=document.getElementById("mybtn");

window.onscroll=function(){scrollFunction()};

function scrollFunction()
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop>20)
    {
        mybutton.style.display="block";
    }
    else
    {
        mybutton.style.display="none";
    }
}

// user click on button than scroll to top of page
function topFunction()
{
    document.body.scrollTop=0;  //for safari
    document.documentElement.scrollTop=0; //for chrome,firefox other
}