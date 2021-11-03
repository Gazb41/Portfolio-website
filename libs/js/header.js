// Add black background on scroll
// $(document).ready(() => {

//     $('.nav-bar-main').on('mouseenter', () => {
//         $('.nav-bar-main').toggleClass('active');
//     }).on('mouseleave', () => {
//         $('.nav-bar-main').toggleClass('active');
//     })

// })


$(document).ready(() => {

    $(window).scroll(function(){

        //  scrollTop = position of the scroll
        var scroll = $(this).scrollTop();

        // if distance from top is > 100 make black
        if (scroll > 100) {
            // make nav bar black
            $('.nav-bar-main').addClass('active');
        } else {
            // remove nav bar black
            $('.nav-bar-main').removeClass('active');
        }
    })

    // increase the size of the W on hover
    $('.main-name-title').on('mouseenter', () => {
        $('.main-name-title span').toggleClass('active-name');
    }).on('mouseleave', () => {
        $('.main-name-title span').toggleClass('active-name');
    })

})
