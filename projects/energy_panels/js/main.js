$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
                loop:false
            }
        }
    })
});


    // $(".owl-carousel").owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         768:{
    //             items:2
    //         },
    //         992:{
    //             items:2
    //         },
    //         1200:{
    //             items:3
    //         }
    //     }
    // });