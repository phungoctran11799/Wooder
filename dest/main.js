//nav menu mobile
const btnMenu = document.querySelector('.btnmenu'),
    nav = document.querySelector('.nav')
btnMenu.addEventListener('click', function() {
    this.classList.toggle('active')
    nav.classList.toggle('active')
})

function hideNav() {
    btnMenu.classList.remove('active');
    nav.classList.remove('active');
}

window.addEventListener('resize', function() {
    let reWindow = window.innerWidth
    if (reWindow > 992){
        hideNav();
    }
})

//chane background header when scroll
const header = document.querySelector('.header'),
    slider = document.querySelector('.slider'),
    heightSlider = slider.clientHeight;

let heightHeader = header.clientHeight;
let scrollY = document.querySelector('.header');
window.addEventListener('scroll',function(){
    let scrollY = window.pageYOffset;
    if(scrollY > heightSlider - heightHeader) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

//backtotop
let backtotop = document.querySelector('.backtop');

backtotop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo ({
        top: 0,
        behavior: 'smooth'
    }
    );
})

//lang

let lang = document.querySelector('.lang')
let langCurrent = document.querySelector('.lang .lang__current span')
let langList = document.querySelector('.lang .lang__list')
let langItems = document.querySelectorAll('.lang .lang__list ul a')

lang.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.toggle('active');
})

// let langLength = langItems.length;

langItems.forEach(function(opt){
    opt.addEventListener('click', function(e){
        e.preventDefault();
        // console.log(this.textContent)
        let textList = this.textContent;
        let textCurrent = langCurrent.textContent;

        langCurrent.innerHTML = textList;
        this.innerHTML = textCurrent;
    })
})

document.addEventListener('click', function() {
    lang.classList.remove('active');
})

//popup video quality

let btnVideos = document.querySelectorAll('.quality .thumb')
let playVideo = document.querySelector('.popupvideo')
let iframe = document.querySelector('.popupvideo iframe')

btnVideos.forEach(function(btn) {
    btn.addEventListener('click', function() {
        let idVideo = btn.getAttribute('data-video')
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + idVideo);
        playVideo.style.display = 'flex';
        console.log(idVideo)
    })
})

//close video
let closeVideo = document.querySelector('.btnclose')
closeVideo.addEventListener('click', function(){
    iframe.setAttribute('src', '');
    playVideo.style.display = 'none';
})

//click bên ngoài close video
document.querySelector('.popupvideo').addEventListener('click', function(){
    iframe.setAttribute('src', '');
    playVideo.style.display = 'none';
})


//active scroll menu

let navMenu = document.querySelectorAll('.header .header__nav ul li a');
let heightHd = document.querySelector('header').offsetHeight;
let sections = [];


function removeActiveMenu() {
    navMenu.forEach(function(nav_element, nav_index){
        nav_element.classList.remove('active');
    })
}

navMenu.forEach(function(element, index) {
    let href = element.getAttribute('href');
    let className = href.replace("#", '');
    let section = document.querySelector('.' + className);
    sections.push(section);

    element.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: section.offsetTop - heightHd + 1,
            behavior: 'smooth'
        });

        removeActiveMenu();
        element.classList.add('active');
  
    })
})
// console.log(sections)

window.addEventListener('scroll', function(e) {
    let positionScroll = window.pageYOffset;
    sections.forEach(function(section, index) {
        if (positionScroll > section.offsetTop - heightHd && positionScroll < section.offsetTop + section.offsetHeight) {
            removeActiveMenu();
            navMenu[index].classList.add('active');
        } else {
            navMenu[index].classList.remove('active');
        }
    })
})


// Slider 

// let listSlider = document.querySelectorAll('.slider__item')
// let currentSlider = 0;
// let number = document.querySelector('.slider__bottom .slider__bottom-paging .number')
// let dot = document.querySelectorAll('.slider__bottom .slider__bottom-paging .dotted li')

// listSlider.forEach(function(itemSlider, index) {
//     if (itemSlider.classList.contains('active')) {
//         currentSlider = index;
//     }
// })

// document.querySelector('.--next').addEventListener('click', function() {
//     listSlider[currentSlider].classList.remove('active');
//     dot[currentSlider].classList.remove('selected');
//     currentSlider++;
//     if(currentSlider > listSlider.length - 1){
//         currentSlider = 0
//     }
//     listSlider[currentSlider].classList.add('active');
//     number.innerHTML = (currentSlider + 1).toString().padStart(2, '0');
//     dot[currentSlider].classList.add('selected');

// })

// document.querySelector('.--prev').addEventListener('click', function() {
//     listSlider[currentSlider].classList.remove('active');
//     dot[currentSlider].classList.remove('selected');
//     dot[currentSlider - 1].classList.add('selected');
    
//     currentSlider--;
//     if(currentSlider < 0 ){
//         currentSlider = listSlider.length - 1;
//     }
//     if(dot[currentSlider]) {
//         dot[currentSlider] = dot.length - 1;
//     }
//     listSlider[currentSlider].classList.add('active');
//     number.innerHTML = (currentSlider + 1).toString().padStart(2, '0'); 
    
// })

// function showNumber(index) {
//     number.innerHTML = (index).toString().padStart(2, '0');
// }

// document.querySelector('.--next').addEventListener('click', function() {
//     if (currentSlider < listSlider.length - 1) {
//         goTo(currentSlider + 1);
//     } else {
//         goTo(0);
//     }
// })

// document.querySelector('.--prev').addEventListener('click', function() {
//     if (currentSlider > 0) {
//         goTo(currentSlider - 1);
//     } else {
//         goTo(listSlider.length - 1);
//     } 
// })

// function goTo(index) {
//     listSlider[currentSlider].classList.remove('active');
//     listSlider[index].classList.add('active');

//     dot[currentSlider].classList.remove('selected');
//     currentSlider = index;
//     dot[index].classList.add('selected');
    

//     showNumber(currentSlider + 1);
// }

// dot.forEach(function(item, index) {
//     item.addEventListener('click', function() {
//         goTo(index);
//     })
// })



// slider libs

let elem = document.querySelector('.slider__item-wrap');
let flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  prevNextButtons: false,

  on: {
    ready: function() {
        let dotted = document.querySelector('.flickity-page-dots');
        let paging = document.querySelector('.slider .slider__bottom .slider__bottom-paging .dotted');
        dotted.append(paging);
    },
    change: function( index ) {
        let number = document.querySelector('.slider__bottom .slider__bottom-paging .number');
        let indexPage = index + 1;
        number.innerHTML = (indexPage.toString().padStart(2, '0'));
    }
  }

});

  //previous

    let nextButton = document.querySelector('.slider__bottom .slider__bottom-control .--next');
        nextButton.addEventListener( 'click', function() {
        flkty.next();
    });

    let previousButton = document.querySelector('.slider__bottom .slider__bottom-control .--prev');
        previousButton.addEventListener( 'click', function() {
        flkty.previous();
    });


//btn prev next news

let btnTag = document.querySelectorAll('.news .btnNew .new');
let listNew = document.querySelectorAll('.news .news__list');
// console.log(listNew)
btnTag.forEach(function (item, index) {
    item.addEventListener('click', function() {
        let  idNew = index + 1;
        // console.log(index)
        btnTag.forEach(function(tag) {
            tag.classList.remove('active');
        });
        listNew.forEach(function(tag) {
            tag.classList.remove('active');
        });
        item.classList.add('active');
        document.querySelector('.news__list' + idNew).classList.add('active');

    })
})


//Question

let ques = document.querySelectorAll(".question .question__list .accordion");
let i;

for (i = 0; i < ques.length; i++) {
  ques[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
  });
}


// photoswipe

var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for(var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if(figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if(figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML; 
            }
            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if(!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }
            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if(index >= 0) {
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};
        if(hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }
        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
            showAnimationDuration : 0,
            hideAnimationDuration : 0
        };
        if(fromURL) {
            if(options.galleryPIDs) {
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if( isNaN(options.index) ) {
            return;
        }
        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll( gallerySelector );
    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};
    initPhotoSwipeFromDOM('.carousel-img');

// $(window).load(function () {
//     initPhotoSwipeFromDOM('.carousel-img');
// });

//slider bottom

let dragg = document.querySelector('.carousel');
let slidebtt = new Flickity( dragg, {
  // options
  cellAlign: 'left',
  contain: true,
  freeScroll: true,
  prevNextButtons: false,
  wrapAround: true,
  pageDots: false,
});

