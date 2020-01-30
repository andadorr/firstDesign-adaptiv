$(document).ready(function() {
	$('.fullpage').fullpage({
		scrollOverflow: true,
		scrollOvelflowOptions: {click: false},
		afterRender: function() {
			$('.projects_last').html($('.projects_slides').length);
		},
		afterSlideLoad: function(s, o, d) {
			$('.projects_first').html(++d.index);
		}
	});

	$(document).on('click', '.projects_mini a', changeImg);

	function changeImg (e) {
		e.preventDefault();
		$('.projects_big img').attr('src', $(this).attr('data-src'));
	}
});