(function(){
  moduleScripts.swiperHero = function() {
    console.log('swiper-hero initiated')

    var laptopScreenWidth = 1300
    var tabletScreenWidth =  768

    function matchTitleHeightToSwiper() {
      var title = $('.SwiperHero .Title')
      var height = $('.SwiperHero .Swiper img').height()
      
      if(height > 1 && title.length) {
        if (window.matchMedia("(min-width: "+laptopScreenWidth+"px)").matches) {
          title.css({
            'height': height+'px'
          })
        } else if (window.matchMedia("(max-width: "+laptopScreenWidth+"px)").matches) {
          title.css({
            'height': 'auto'
          })
        }  
      } else if($('.SwiperHero .Swiper img').length) {
        setTimeout(function() {
          matchTitleHeightToSwiper()
        }, 500)
      }
    }
    
    matchTitleHeightToSwiper()

    $(window).bind('resize', function(e) {
      window.resizeEvt
      $(window).resize(function() {
        clearTimeout(window.resizeEvt)
        window.resizeEvt = setTimeout(function() {
          matchTitleHeightToSwiper()
        }, 250)
      })
    })

  }
})();
