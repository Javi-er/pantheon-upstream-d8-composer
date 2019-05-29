(function ($, settings) {

	"use strict";


	/**
	 * initialize accordions and handle roll-up / roll-down.
	 */
	Drupal.behaviors.accordion = {
		attach: function (context, settings) {
			var accordionSelector = '.paragraphType-accordion';

			if ( $(accordionSelector, context).length > 0 ) {
				var $accordionContainers = $(accordionSelector, context);

				$accordionContainers
					.find('.trigger-toggleAccordion')
					.unbind('click')
					.click(function(evt) {
						evt.preventDefault();

						var $this = $(this);
						var $thisAccordionContainer = $this.parent();
						var $thisAccordionContent = $this.next('.fieldName-field-content');
						var $thisAccordionToggleLabel = $thisAccordionContainer.find('.accordion-toggleIcon-label');

						if ( $thisAccordionContainer.hasClass('accordion-isCollapsed') ) {
							// expand it.
							$thisAccordionContainer.removeClass('accordion-isCollapsed');
							$thisAccordionToggleLabel.html('collapse and hide content')
							$thisAccordionContent.slideDown(750);
						}
						else {
							// collapse it.
							$thisAccordionContainer.addClass('accordion-isCollapsed');
							$thisAccordionToggleLabel.html('expand and show content')
							$thisAccordionContent.slideUp(750);
						}
					})
			}
		}
	};

})(jQuery, drupalSettings);
