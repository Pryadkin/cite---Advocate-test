$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop:true,
    margin:10,
    smartSpeed: 700,
    dots: true,
    // dotText: ["<img src='img/point.png'"],
    nav: true,
    navText: ["<img src='img/left-arrow.png'>", "<img src='img/right-arrow.png'>"]
  });

  $("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display','flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 2000);
		});
		return false;
	});

  $("form.form-send").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Телефон отправлен на почту")
			setTimeout(function() {
				// $(th).find('.success').removeClass('active').fadeOut();
				// th.trigger("reset");
        // $.white-popup.close();
        $.magnificPopup.close();
			}, 1000);
		});
		return false;
	});



  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(this).parent().parent().next().next().slideToggle();
    return false;
  });

// arrow to top
  $('body').append('<div class="top"><i class="fa fa-angle-double-up">');

  $(".top").click(function() {
    $("html, body").animate({scrollTop: 0}, "slow");
  })

  $(window).scroll(function() {
    if($(this).scrollTop() > $(this).height()) {
      $(".top").addClass("active");
    } else {
      $(".top").removeClass("active");
    }
  })
// ----------------------------------------

  $('.open-popup-link').magnificPopup({
    // delegate: 'a',
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });


// ---anchor links in the menu------------
 	$(".row-menu li:not(.menu-anchor-not), .row-menu-hidden li:not(.menu-anchor-not)").on("click","a", function(event) {
 		event.preventDefault();
 		var id  = $(this).attr('href'),
 			top = $(id).offset().top;
 		  $('body,html').animate({scrollTop: top}, 1200);
 	});


});
