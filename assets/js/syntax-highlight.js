(function (window) {
    'use strict';
    const $highlights = window.document.querySelectorAll('.highlight > pre > code');
    if ($highlights && $highlights.length > 0) {
        $highlights.forEach( ($highlight, index) => {
            $highlight.parentElement.parentElement.classList.add('language-' + $highlight.dataset.lang);
        });
    }
})(window);