// $(document).ready(function() {
//     // nav menu mobile
//     let btnMenu = $('.btnmenu'),
//     nav = $('.nav');

//     btnMenu.on('click', function() {
//         $(this).toggleClass('active');
//         nav.toggleClass('active');
//     })

//     function hideNav() {
//         btnMenu.removeClass('active');
//         nav.removeClass('active');
//     }
    
//     $(window).resize(function(){
//         let reWindow = window.innerWidth;
//         if (reWindow > 992) {
//             hideNav();
//         }
//     })

//     //chane background header when scroll
//     let header = $('.header');
//     let slider = $('.slider');
//     let heightSlider = slider.innerHeight();
//     let heightHeader = header.innerHeight();
//     let scrollY = $('.header');

//     $(window).on('scroll', function() {
//         scrollY = $(window).scrollTop();
//         if(scrollY > heightSlider - heightHeader) {
//             header.addClass('active');
//         } else {
//             header.removeClass('active');
//         }
//     })
    
//     //back to top
//     let backtotop = $('.backtop')

//     backtotop.on('click',function(e) {
//         e.preventDefault();
//         $("html, body").animate({scrollTop: 0}, 1000);
//         // $(window).scrollTop({
//         //     behavior: 'smooth'
//         // })
//     })


//     //lang

//     let lang = $('.lang');
//     let langCurrent = $('.lang .lang__current span');
//     let langItems = $('.lang .lang__list ul a');

//     lang.on('click', function(e) {
//         e.stopPropagation();
//         $(this).toggleClass('active');
//     })

//     langItems.on('click',function(e) {
//         e.preventDefault();
//         let textList = $(this).text();
//         let textCurrent = langCurrent.text();

//         langCurrent.text(textList);
//         $(this).text(textCurrent);
//     })

//     $(document).on('click', function() {
//         lang.removeClass('active');
//     })

//     //popup video quality
//     // let btnVideos = $('.quality .thumb');
//     // let playVideo = $('.popupvideo');
//     // let iframe = $('.popupvideo iframe');

//     // btnVideos.on('click', function() {
//     //     let idVideo = $(this).attr('data-video');
//     //     iframe.attr('src','https://www.youtube.com/embed/' + idVideo);
//     //     playVideo.css('position','flex');
//     //     console.log(playVideo)
//     // })

//         /**close video */

//         // let closeVideo = $('.btnclose');
//         // closeVideo.on('click', function() {
//         //     iframe.attr('src', '');
//         //     playVideo.css('display', 'none');
//         // })

//     //active scroll menu

//     let navMenu = $('.header .header__nav ul li a')
//     let heightHd = $('header').offsetHeight();
//     let sections = [];

//     function removeActiveMenu() {
//         navMenu.each(function(){
//             $(this).removeClass('active');
//         })
//     }
    
//     navMenu.each(function() {
//         // let href = element.attr('href');
//         let className = $(this).attr('href').replace("#", '');
//         let section = $('.' + className);
//         sections.push(section);
    
//         $(this).on('click', function(e) {
//             e.preventDefault();
//             window.scrollTo({
//                 top: section.offset().top - heightHd + 1,
//                 behavior: 'smooth'
//             });
    
//             removeActiveMenu();
//             $(this).addClass('active');
      
//         })
//     })


//     //btn prev next news
//     // let btnTag = $('.news .btnNew .new');
//     // let listNew = $('.news .news__list');

//     // btnTag.on('click',function (item, index) {
//     //     let  idNew = index + 1;
//     //     btnTag.on('click',function(tag) {
//     //         $(tag).removeClass('active');
//     //     });
//     //     listNew.on('click',function(tag) {
//     //         $(tag).removeClass('active');
//     //     });
//     //     $(item).addClass('active');
//     //     $('.news__list' + idNew).addClass('active');
//     // })

//     // btnTag.each(function(item, index) {
//     //     $(this).on('click', function() {
//     //         let  idNew = index + 1;
//     //     btnTag.on('click',function(tag) {
//     //         $(tag).removeClass('active');
//     //     });
//     //     listNew.on('click',function(tag) {
//     //         $(tag).removeClass('active');
//     //     });
//     //     $(item).addClass('active');
//     //     $('.news__list') + $(idNew).addClass('active');
        
//     //     })  
//     // })

    
    




//     //question
//     // let ques = $('.question .question__list .accordion');
//     // let panel = $('.question .question__list .panel');

//     // for (let i = 0; i < ques.length; i++) {
//     //     $(ques[i]).on('click', function() {
//     //         $(this).toggleClass('active');
//     //         let panel = $(this).next();
//     //         if (panel.css('display', 'block')) {
//     //             panel.slideUp();  
//     //         } else {
//     //             panel.slideDown();  
//     //         }
//     //     })
//     // }



// }) 

