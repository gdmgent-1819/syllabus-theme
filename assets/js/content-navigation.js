function ready(cb) {
  /in/.test(document.readyState)
  ? setTimeout(ready.bind(null, cb), 90)
  : cb();
};

ready(_ => {
  const ContentNavigation = {
      init() {
          this._$contentNavigation = document.querySelector('.content-navigation');
          this.generateContentNavigation();
      },
      generateContentNavigation() {
          const $headingElements = document.querySelectorAll('.content__body > * > * > * > h2, .content__body > * > * > * > h3, .content__body > * > * > * > h4');
          if ($headingElements != null && $headingElements.length > 0) {
              let tempStr = '<ul class="navigation__list">';
              let previousLevel = null;
              $headingElements.forEach(($element, index) => {
                const id = $element.getAttribute('id');
                const html = $element.innerHTML.replace(/<\/?(a|code)[^>]+(>|$)/g, '');
                const htmlTitle = $element.textContent;
                const currentLevel = parseInt($element.tagName.substring(1));
                if(index > 0 && index < $headingElements.length - 1) {
                  if(currentLevel > previousLevel) {
                    tempStr += `<ul>`;
                  } else if(currentLevel < previousLevel) {
                    for(let n=0;n<previousLevel-currentLevel;n++) {
                      tempStr += `</li></ul>`;
                    }
                  } else {
                    tempStr += `</li>`;
                  }
                }
                tempStr += `<li class="navigation__item"><a class="pagemap__link" href="#${id}" title="${htmlTitle}">${html}</a>`;
                if(index === $headingElements.length - 1) {
                  for(let n=0;n<previousLevel-currentLevel;n++) {
                    tempStr += `</li></ul>`;
                  }
                } else {
                  previousLevel = currentLevel;
                }
              });
              tempStr += '</ul>';
              this._$contentNavigation.innerHTML = tempStr;
          }
      }
  };
  ContentNavigation.init();
});