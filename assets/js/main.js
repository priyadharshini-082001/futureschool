


(function ($) {
  "use strict";
var windowOn = $(window);
  /*-----------------------------------
            MagnificPopup  view    
    -----------------------------------*/

  $(".popup-video").magnificPopup({
    type: "iframe",
    removalDelay: 260,
    mainClass: "mfp-zoom-in",
  });


	// loader js
	windowOn.on("load", function () {
		$(".sb-page-loader").fadeOut("slow", function () {
			$(this).remove(1000);
		});
	});

  
  function mousecursor() {
    if ($("body")) {
      const e = document.querySelector(".sb-cursor-inner"),
        t = document.querySelector(".sb-cursor-outer");
      let n,
        i = 0,
        o = !1;
      (window.onmousemove = function (s) {
        o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      }),
        $("body").on("mouseenter", "a, .cursor-pointer", function () {
          e.classList.add("cursor-hover");
          t.classList.add("cursor-hover");
        }),
        $("body").on("mouseleave", "a, .cursor-pointer", function () {
          ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
            (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
        }),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  }
  $(function () {
    mousecursor();
  });




  

  function loader() {
    $(window).on("load", function () {
      // Animate loader off screen
      $(".preloader").addClass("loaded");
      $(".preloader").delay(1000).fadeOut();
    });
  }
  loader();

  // // Mouse Cursor    











  /*-----------------------------------
         Set Background Image  
  //     -----------------------------------*/
  if ($("[data-bg-src]").length > 0) {
    $("[data-bg-src]").each(function () {
      var src = $(this).attr("data-bg-src");
      $(this).css("background-image", "url(" + src + ")");
      $(this).removeAttr("data-bg-src").addClass("background-image");
    });
  }
  if ($("[data-mask-src]").length > 0) {
    $("[data-mask-src]").each(function () {
      var mask = $(this).attr("data-mask-src");
      $(this).css({
        "mask-image": "url(" + mask + ")",
        "-webkit-mask-image": "url(" + mask + ")",
      });
      $(this).addClass("bg-mask");
      $(this).removeAttr("data-mask-src");
    });
  }






  // // // // Scroll to top when button is clicked

  windowOn.on('scroll', function () {

    let scroll = windowOn.scrollTop();
    if (scroll > 100) {
      $('.sb-backToTop').addClass('visible'); // Add class when scrolling down
    } else {
      $('.sb-backToTop').removeClass('visible'); // Remove class when at top
    }
  });

  $('#backToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;


  });


  var swiper3 = new Swiper(".sb-brand-active", {
    loop: true,
    freemode: false,
    slidesPerView: "auto",
    spaceBetween: 0,

    centeredSlides: true,
    speed: 2000,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },

  });


  /*-----------------------------------
         service active 
         -----------------------------------*/
  var swiper5 = new Swiper(".sb-testi-active", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 30,

    grabCurser: true,

    navigation: {
      nextEl: ".sb-testi-button-next",
      prevEl: ".sb-testi-button-prev",
    },

    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 1,
      },

      // when window width is >= 720px
      992: {
        slidesPerView: 2,
      },
      // when window width is >= 1250PX
      1200: {
        slidesPerView: 2,
      },
    },

  });



  // /*-----------------------------------
  //           mpbile menu open  view    
  //   -----------------------------------*/


  $('.sb-header-top-menu').on('click', function () {

    $('.mobile-offcanvas').addClass('mobile-offcanvas-open');
    $('.mobile-offcanvas-overlay').addClass('mobile-offcanvas-overlay-open');
    console.log('first')
  })
  $('.mobile-offcanvas-close button, .mobile-offcanvas-overlay').on('click', function () {

    $('.mobile-offcanvas').removeClass('mobile-offcanvas-open');
    $('.mobile-offcanvas-overlay').removeClass('mobile-offcanvas-overlay-open');

  })




  // // mobile menu 
  // // Clone menu and append to offcanvas menu
  var abMenuWrap = $('.mobile-menu-active > ul').clone();
  var abSideMenu = $('.mobile-offcanvas-menu nav');
  abSideMenu.append(abMenuWrap);

  // Hide all submenus initially
  abSideMenu.find('.sub-menu').hide();

  // Add toggle buttons to menu items with submenus
  if (abSideMenu.find('.sub-menu').length != 0) {
    abSideMenu.find('.sub-menu').parent().append('<button class="menu-close"><i class="fas fa-chevron-right"></i></button>');
  }

  var sideMenuList = $('.mobile-offcanvas-menu nav > ul > li > a, .mobile-offcanvas-menu nav > ul > li > button');

  // Toggle submenu on click
  $(sideMenuList).on('click', function (e) {
    var $submenu = $(this).siblings('.sub-menu');

    // Only proceed if submenu exists
    if ($submenu.length) {
      e.preventDefault(); // Prevent default link behavior

      if (!$(this).parent().hasClass('active')) {
        $(this).parent().addClass('active');
        $submenu.slideDown();
      } else {
        $submenu.slideUp();
        $(this).parent().removeClass('active');
      }
    }
  });


  //  sticky menu




  windowOn.on('scroll', function () {
    let scroll = windowOn.scrollTop();


    if (scroll > 100) {
      $('#header-area').addClass('header-sticky')
      $('#header-area-top').addClass('header-sticky-top')
    }
    else {
      $('#header-area').removeClass('header-sticky')
      $('#header-area-top').removeClass('header-sticky-top')

    }
  })






  /*-----------------------------------
     Counterup 
  //  -----------------------------------*/

  if ($.fn.counterUp && $('.sb-fact-item').length) {
    $('.fact-num').counterUp({
      delay: 10,
      time: 1000
    });
  }





  // // tp search bar


  // $('.search-menu').on('click', function () {

  //   $('.ab-search-bar').addClass('ab-search-bar-open');
  //   $('.mobile-offcanvas-overlay').addClass('mobile-offcanvas-overlay-open');
  // })

  // $('.ab-search-close, .mobile-offcanvas-overlay').on('click', function () {

  //   $('.ab-search-bar').removeClass('ab-search-bar-open');
  //   $('.mobile-offcanvas-overlay').removeClass('mobile-offcanvas-overlay-open');
  //   console.log('first')

  // })










  // // Set initial content
  // const initialSlide = $('.swiper-slide').eq(swiper.activeIndex);

  // $('#slide-image').attr("src", initialSlide.data("img"));

  // /*-----------------------------------
  //   testimonial active 2
  //   -----------------------------------*/








  // document.querySelectorAll('.ab-service-card').forEach(card => {
  //   // 3D tilt effect
  //   card.addEventListener('mousemove', (e) => {
  //     const x = e.clientX - card.getBoundingClientRect().left;
  //     const y = e.clientY - card.getBoundingClientRect().top;

  //     const centerX = card.offsetWidth / 2;
  //     const centerY = card.offsetHeight / 2;

  //     const rotateX = (y - centerY) / 35;
  //     const rotateY = (centerX - x) / 25;

  //     gsap.to(card, {
  //       rotationX: rotateX,
  //       rotationY: rotateY,
  //       transformPerspective: 1000,
  //       ease: "power2.out",

  //     });
  //   });

  //   // Reset on mouse leave
  //   card.addEventListener('mouseleave', () => {
  //     gsap.to(card, {
  //       rotationX: 0,
  //       rotationY: 0,
  //       duration: 0.8,
  //       ease: "elastic.out(1, 0.5)"
  //     });
  //   });
  // });


  document.addEventListener("DOMContentLoaded", function () {




    // Split text animation
    if ($(".split-text").length > 0) {
      let st = $(".split-text");
      if (st.length == 0) return;
      gsap.registerPlugin(SplitText);
      st.each(function (index, el) {
        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "tp-split-line"
        });
        gsap.set(el, {
          perspective: 400
        });
        if ($(el).hasClass('right')) {
          gsap.set(el.split.chars, {
            opacity: 0,
            x: "50",
            ease: "Back.easeOut",
          });
        }
        if ($(el).hasClass('left')) {
          gsap.set(el.split.chars, {
            opacity: 0,
            x: "-50",
            ease: "circ.out",
          });
        }
        if ($(el).hasClass('up')) {
          gsap.set(el.split.chars, {
            opacity: 0,
            y: "80",
            ease: "circ.out",
          });
        }
        if ($(el).hasClass('down')) {
          gsap.set(el.split.chars, {
            opacity: 0,
            y: "-80",
            ease: "circ.out",
          });
        }
        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
          },
          x: "0",
          y: "0",
          rotateX: "0",
          scale: 1,
          opacity: 1,
          duration: 0.7,
          stagger: 0.03,
        });
      });
    }


    // Image reveal js

    gsap.registerPlugin(ScrollTrigger);

    let revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });

      tl.set(container, {
        autoAlpha: 1
      });

      if (container.classList.contains('zoom-out')) {
        // Zoom-out effect
        tl.from(image, 1.5, {
          scale: 1.4,
          ease: Power2.out
        });
      } else if (container.classList.contains('left') || container.classList.contains('right')) {
        let xPercent = container.classList.contains('left') ? -100 : 100;
        tl.from(container, 1.5, {
          xPercent,
          ease: Power2.out
        });
        tl.from(image, 1.5, {
          xPercent: -xPercent,
          scale: 1,
          delay: -1.5,
          ease: Power2.out
        });
      } else if (container.classList.contains('up') || container.classList.contains('down')) {
        let yPercent = container.classList.contains('up') ? 100 : -100;
        tl.from(container, 1.5, {
          yPercent,
          ease: Power2.out
        });
        tl.from(image, 1.5, {
          yPercent: -yPercent,
          scale: 1,
          delay: -1.5,
          ease: Power2.out
        });
      }
    });



    // Fade-up effect animation
    $(".content").each(function (i) {
      let target = $(this).find(".fade-up");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: 'top 70%',
          toggleActions: 'play none none none',
          markers: false,
        }
      });

      if (target.length) {
        tl.from(target, {
          opacity: 0,
          y: 60,
          duration: 0.7,
          stagger: 0.2,
        });
      }
    });
    $(".content").each(function (i) {
      let target = $(this).find(".fade-left, .fade-right");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: 'top 100%',
          toggleActions: 'play none none none',
          markers: false,
        }
      });

      if (target.length) {
        target.each(function () {
          let animProps = {
            opacity: 0,
            duration: 1.1,
            stagger: 0.2,
          };
          if ($(this).hasClass("fade-left")) {
            animProps.x = -90; // fade from left
          } else if ($(this).hasClass("fade-right")) {
            animProps.x = 90; // fade from right
          }

          tl.from(this, animProps); // apply per element
        });
      }
    });



  });

  $('grid').imagesLoaded(function () {
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    });


    $('.sb-gallery__btn__item').on('click', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    $('.sb-gallery__btn__item').on('click', function (event) {


      $(this).siblings('.active-gallery-btn').removeClass('active-gallery-btn')
      $(this).addClass('active-gallery-btn');
      event.preventDefault();
    });

  });







})(jQuery);










