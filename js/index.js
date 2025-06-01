
$(function(){
    $(".first").click(function () {
        $(".one").show();
        $(".two").hide();
    });

    $(".second").click(function () {
        $(".two").show();
        $(".one").hide();
    });


    $(window).scroll(function(){
        let scroll = $(this).scrollTop();

        if(scroll > 450){
            $("header").slideDown();
        }else {
            $("header").slideUp();
        }
    })

    $(".accord-item .one").css("display", "block");

    $(".accord-item h4").click(function () {
        $(this).next().slideToggle();
        $(".accord-item p").not($(this).next()).slideUp();
    })

    $(window).scroll(function () {
        let theTop = $(".study").offset().top - window.innerHeight;

        if ($(window).scrollTop() > theTop){
            $(".timer").countTo(); 
        }
    })
    
    // $('.all-images').mixItUp();
    var mixer = mixitup('.all-images');

})



