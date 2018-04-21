(function ($) {
    'use strict';
    $(document).ready(whenReady);

    function whenReady($) {
        var $highlights = $('.highlight > pre > code');
        $highlights.each(function () {
            $(this).parents('.highlight').addClass('language-' + $(this).data('lang'));
        });
    }
})(jQuery);