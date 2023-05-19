import createElement from './create-element';
import state from './state';
import page from './data';

const askName = () => {
  const popup = createElement({ classes: ['popup'], parent: page.elements.container });
  const container = createElement({
    classes: ['popup__container', 'popup__message', 'popup__history'], parent: popup,
  });
  createElement({
    tag: 'p', textContent: 'What\'s your name?', parent: container,
  });
  const input = createElement({
    classes: ['name-input'], tag: 'input', type: 'text', parent: container,
  });
  input.focus();
  input.addEventListener('input', () => {
    if (input.value.length > 3) {
      if (!page.elements.applyBtn) {
        createElement({
          classes: ['settings__apply'],
          parent: popup,
          link: 'applyBtn',
          onClick: () => {
            if (input.value) {
              state.name = input.value;
              state.save();
              popup.remove();
            }
          },
        });
      }
    } else if (page.elements.applyBtn) {
      page.elements.applyBtn.remove();
      page.elements.applyBtn = null;
    }
  });
};

export default askName;
