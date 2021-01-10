$(function(){

  $(".menu__list-link, .logo, .footer__copyright a").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.menu__btn, .menu__list-link').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active'),
    $('.menu__btn').toggleClass('menu__btn-cross')
  })

  $('.blog__slider').slick({
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 485,
        settings: {
          dots: false
        }
      }
    ]
  });

  $("[data-fancybox]").fancybox({
    loop: true
  });

  var mixer = mixitup('.gallery__content', {
    animation: {
      duration: 938,
      nudge: true,
      reverseOut: false,
      effects: "fade translateZ(-15px) rotateX(-90deg) rotateY(-90deg)"
    }
  });

})