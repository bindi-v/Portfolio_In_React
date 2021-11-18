document.getElementById(document).ready(function(){
    document.getElementById(window).scroll(function(){
        if (this.scrollY > 20){
            document.getElementById('.navbar').addClass("sticky");
        }else {
            document.getElementsByClassName('.navbar').removeClass("sticky");
        }
    });

    document.getElementsByClassName('.menu-btn').click(function(){
        document.getElementsByClassName('.navbar .menu').toggleClass("active");
        document.getElementsByClassName('.menu-btn i').toggleClass("active");
    });

    document.getElementsByClassName('.carousel').owlCarousel({
        margin: 20,
        loop : true,
        autoplayTimeout : 2000,
        autoplayHoverPause : true,
        responsive : {
            0 : {
                items : 1,
                nav : false,
            },
             600 : {
                items : 2,
                nav : false,
            },
            1000 : {
                items : 3,
                nav : false,
            }
        }
    })
});