/**
* Template Name: Groovin - v4.3.0
* Template URL: https://bootstrapmade.com/groovin-free-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})()
/**
   * Testimonials slider
   */
 new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    1200: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});

// -------------------------------------validation



function validate(){

if(namevalidate()==true && emailvalidate()==true && phvalidate()==true){
    
$.ajax({
    url:"https://script.google.com/macros/s/AKfycbxV9OLKQUCMT-IOawtFwJXIEGWgJL11hHKRhR272jhhMXNuwnjxGMzsISM9SizjdX6jBw/exec",
    data:$("#submit-form").serialize(),
    method:"post",

    success:function (response){
        alert("Form submitted successfully")
        window.location.reload()
        //window.location.href="https://google.com"
    },
    error:function (err){
        alert("Something Error")

    }
})

}

}




function namevalidate(){
var name = $('#Name').val();
var latterpat=/^[A-Za-z]+$/

if(name==""){
    $('#err1').html("Enter the Name");
        return false
    }else if(name.match(latterpat)){
        if(name.length<3){
        
            $('#err1').html("Enter atleast Three latter");
                return false
            }else{
    $('#err1').html("");
        return true
            }
    }
    else{
    $('#namefield').html("Enter Correct Name");
        return false
    }
}


function emailvalidate(){
    var email = $('#email').val();
    var pattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    if(email==""){
        $('#err2').html("Enter the Email");
            return false
        }else if(email.match(pattern)){
        $('#err2').html("");
            return true
        }else{
        $('#err2').html("Enter Correct Email");
            return false
        }
    }


function phvalidate(){
var no = $('#phone').val();
var latterpat=/^[0-9]+$/

if(no==""){
    $('#err3').html("Enter the Mobile No");
        return false
    }else if(no.match(latterpat)){
        if(no.length<10 || no.length>10 ){
        
            $('#err3').html("Enter 10 mobile No");
                return false
            }
            else{
    $('#err3').html("");
        return true
            }
    }
    else{
    $('#err3').html("Enter Correct phone No");
        return false
    }
}


function testname(event) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/^[A-Z a-z]+$/);
    return pattern.test(value);
    
 }
 $('#Name').bind('keypress', testname);



 function testPh(event) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/^[0-9]+$/);
    return pattern.test(value);
 }
 
 $('#phone').bind('keypress', testPh);

 function testemail(event) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/^[a-z@.\.w{2,3}]+$/);
    return pattern.test(value);
 }
 
 $('#email').bind('keypress', testemail);

  
 