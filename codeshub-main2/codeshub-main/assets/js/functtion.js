var swiper = new Swiper('.recent-container', {
    navigation: {
      nextEl: '.right-btn',
      prevEl: '.left-btn',
    },
  });

  var buttonTarget = document.getElementsByClassName("counter")[0];
  var counter = 2;
  
  
  function incrementer(){
    buttonTarget.innerHTML  = counter.toString();
    counter++;
    return counter;
  }
  function detriment(){
    buttonTarget.innerHTML  = counter.toString();
    counter--;
    return nocounter;
  }
  // texteditor area
 
  
function others() {
  var product = document.getElementById('product_design');
  var graphics = document.getElementById('graphics_design');
  var webds = document.getElementById('web_desig');
  var webdv = document.getElementById('web_development');
  var cms = document.getElementById('cms_solution');
  var social = document.getElementById('social_media');
  var advance = document.getElementById('advance_seo');
  var advertising = document.getElementById('advertising');
  var campaign = document.getElementById('campaign');
  var event = document.getElementById('event');
  var Competition = document.getElementById('Competition');
  var other = document.getElementById('Other');
  var checkBox = other;
  
  var checktext = document.getElementById('checktext');
  var choose = document.getElementById('choose');
  var requirement = document.getElementById('requirement');
  if (Competition.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
    choose.classList.remove('choose-block');
    choose.classList.add('choose-none');
    requirement.classList.add('requirement-block');
    requirement.classList.remove('requirement-none');
  }
  else {
    checktext.classList.add('check-text-open');
    checktext.classList.remove('check-text');
  }
  if (event.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }
  if (campaign.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }
  if (advertising.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }
  if (advance.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }
  if (social.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }
  if (cms.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }if (webdv.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }if (webds.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }if (graphics.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }if (product.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }if (product.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }if (product.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }if (product.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }if (product.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }if (product.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }if (checkBox.checked == true){
    window.alert('yes');
    checktext.classList.remove('check-text-open');
    checktext.classList.add('check-text');
  }
}


  // juery js 
  (function($){
    'use strict';
    	// mobile menu responsive
      $(document).on('click','.menu-bar',function(){
        $(".list-menu").toggleClass("open");
            // $(".main-menu").toggleClass("open");
            $(".overlay").addClass("active");
            $("body").addClass("overflow");
        });

        // overlay remove
        $('.overlay').on('click', function(){
          $('body').removeClass('overflow');
          $('.list-menu').removeClass('open');
          $('body,.overlay').removeClass('active');
          $('body').removeClass('overflow');
        });
      
      // scroll up start here
            $(function(){
              // $(window).scroll(function(){
              //   if ($(this).scrollTop() > 300) {
              //     $('.scrollToTop').css({'bottom':'2%', 'opacity':'1','transition':'all .5s ease'});
              //   } else {
              //     $('.scrollToTop').css({'bottom':'-30%', 'opacity':'0','transition':'all .5s ease'});
              //   }
              // });
              //Click event to scroll to top
              $('.scrollToTop').on('click', function(){
                $('html, body').animate({scrollTop : 0},500);
                return false;
              });
            });

        // progress bar
        $('.process').on('click', function(){
          $('.area-active').addClass('open');
        });
      


        
    })(jQuery);