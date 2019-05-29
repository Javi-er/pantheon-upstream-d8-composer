(function ($, settings) {

	"use strict";


	// globals
	var viewportWidth;

  //
  // @TODO: change the name of the theme on the next line.
  //
	Drupal.behaviors.sparkle_subtheme = {
		attach: function (context, settings) {
      this.initialize(context);
		},

		// example attached behavior.
    initialize: function (context, settings) {
			// detect browser and add a browser- class
			// to the html tag
			var $html = $('html', context);
			var browserDetected = browserDetect();
			$html.addClass('browser-' + browserDetected.name)




			// detect viewport width on load and
			// update on resize, setting
			// viewportWidth global var

			setViewportWidth();
			// example of $.debounce(),
			// $.throttle() works the same.
			//
			// using debounce to prevent this from firing in
			// a non-performant way.
			//
			$(window).bind( 'resize', $.debounce( 100, false, setViewportWidth) );
    }

	}; // Drupal.behaviors


	// non-attached behaviors
	// and general functions
	function setViewportWidth() {
	  viewportWidth = $(window).innerWidth();
	}


})(jQuery, drupalSettings);
