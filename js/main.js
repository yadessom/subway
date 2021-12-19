$(function(){

    // ************************************************************

        const swiper = new Swiper('.main_slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      // ************************************************************

      $('.popup_close').click(function(){
        $('.popup').hide();
      });
      
      $('.m_menu_list>li').click(function(){
        $(this).toggleClass('on');
        $(this).siblings().removeClass('on');
        $(this).find('.depth2').slideToggle();
        $(this).siblings().find('.depth2').slideUp();
      });

      // ************************************************************

      $('.h_left').click(function(){
        $('.m_menu_wrap').animate({'left':0},300);
        $('.blackout').stop().fadeIn(300);
        $('body').addClass('on');
      });
      $('.m_menu_close').click(function(){
        $('.m_menu_wrap').animate({'left':'-100%'},300);
        $('.blackout').stop().fadeOut(300);
        $('body').removeClass('on');
      });
      $('.blackout').click(function(){
        $('.m_menu_wrap').animate({'left':'-100%'},300);
        $('.blackout').stop().fadeOut(300);
        $('body').removeClass('on');
      });

      // ************************************************************

      const product = new Swiper('.sec_01_product_slide', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // autoHeight:true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });

      // ************************************************************

      $('.sec_01_product_slide:gt(0)').hide();

      $('.sec_02_tab li').click(function(e){
        e.preventDefault();

        let num = $(this).index();
        console.log(num);

        $(this).addClass('on').siblings().removeClass('on');

        $('.sec_01_product_slide').eq(num).show().siblings().hide();

      });




});