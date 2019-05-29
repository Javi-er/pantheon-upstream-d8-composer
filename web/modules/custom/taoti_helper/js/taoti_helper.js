(function ($) {

  "use strict";

  Drupal.behaviors.taoti_helper = {

    attach: function(context, settings) {

      this.showSummary(context, settings);
      this.ckEditorTweaks(context, settings);

    },

    /**
     * Expands body summary field by default.
     */
    showSummary: function (context, settings) {

      var $summaryLink = $('.field--type-text-with-summary .field-edit-link', context);
      if ($summaryLink.length) {
        $summaryLink.click();
      }

    },

    /**
     * Improves default attributes for CKEditor dialogs.
     */
    ckEditorTweaks: function (context, settings) {

      if (!CKEDITOR) {
        return;
      }

      CKEDITOR.on('dialogDefinition', function( ev ) {

        var diagName = ev.data.name;
        var diagDefn = ev.data.definition;

        if (diagName === 'table') {
          var infoTab = diagDefn.getContents('info');

          var width = infoTab.get('txtWidth');
          width['default'] = '';

          var spacing = infoTab.get('txtCellSpace');
          spacing['default'] = '';

          var padding = infoTab.get('txtCellPad');
          padding['default'] = '';

          var border = infoTab.get('txtBorder');
          border['default'] = '';

          var headers = infoTab.get('selHeaders');
          headers['default'] = 'row';
        }

      });

    }

  }

})(jQuery);
