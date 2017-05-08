$(document).ready(function() {
	console.log('Ready for domination!');
	$('#main_wrapper').css('height', $(window).height());
	$('#date_content').html(formatDate(new Date()));

	$('.content_slide').css('height', $(window).height());

	if ($(window).width() <= 530) {
		$('#id_second_section').css('height', 2 * $(window).height());
		$('#id_third_section').css('height', 2 * $(window).height());
	}

	$('#content_wrapper aside ul li').on('click', function() {
		var nav_link = $(this).attr('id').substring(0, $(this).attr('id').indexOf('_'));
		$('html, body').animate({
        scrollTop: $("#id_" + nav_link + "_section").offset().top
    }, 500);
	});

	$('.exp_wrapper .exp_row .exp_cell').on('click', function() {
		var get_id = $(this).attr('id');
		if (get_id != "whats_next") {
			var employer_card = $('#' + get_id);
			if (employer_card.hasClass('show_desc')) {
				employer_card.removeClass('show_desc');
			} else {
				employer_card.addClass('show_desc');
			}
		} else {
			$('html, body').animate({
			  scrollTop: $("#id_fourth_section").offset().top
			}, 500);
		}
	});

	$(window).resize(function() {
		$('#main_wrapper').css('height', $(window).height());
		$('.content_slide').css('height', $(window).height());
		if ($(window).width() > 530) {
			$('#id_second_section').css('height', $(window).height());
			$('#id_third_section').css('height', $(window).height());
		} else {
			$('#id_second_section').css('height', 2 * $(window).height());
			$('#id_third_section').css('height', 2 * $(window).height());
		}
	});

	$(window).scroll(function() {
		var windowTop = $(window).scrollTop();
		// make side nav fixed when scrolled past the fold
		if (windowTop > $('#main_wrapper').height()) {
			$('#content_wrapper aside').addClass('fix-aside');
		} else {
			$('#content_wrapper aside').removeClass('fix-aside');
		}

		var content_height = $('.content_slide').height();

		// highlighting the correct menu item based on page scroll position
		if (windowTop < content_height * 1.5) {
			$('#content_wrapper aside ul li#first_link').addClass('active');
			$('#content_wrapper aside ul li#second_link').removeClass('active');
			$('#content_wrapper aside ul li#third_link').removeClass('active');
			$('#content_wrapper aside ul li#fourth_link').removeClass('active');
		} else if (windowTop >= content_height * 1.5 && windowTop < content_height * 2.5) {
			// move from About Me to Experience
			$('#content_wrapper aside ul li#first_link').removeClass('active');
			$('#content_wrapper aside ul li#second_link').addClass('active');
			$('#content_wrapper aside ul li#third_link').removeClass('active');
			$('#content_wrapper aside ul li#fourth_link').removeClass('active');
		} else if (windowTop >= content_height * 2.5 && windowTop < content_height * 3.5) {
			// move from Experience to Projects
			$('#content_wrapper aside ul li#first_link').removeClass('active');
			$('#content_wrapper aside ul li#second_link').removeClass('active');
			$('#content_wrapper aside ul li#third_link').addClass('active');
			$('#content_wrapper aside ul li#fourth_link').removeClass('active');
		} else if (windowTop >= content_height * 3.5 && windowTop < content_height * 4) {
			$('#content_wrapper aside ul li#first_link').removeClass('active');
			$('#content_wrapper aside ul li#second_link').removeClass('active');
			$('#content_wrapper aside ul li#third_link').removeClass('active');
			$('#content_wrapper aside ul li#fourth_link').addClass('active');
		}
	});
});


function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}