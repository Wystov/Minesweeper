import createElement from './create-element';
import state from './state';
import page from './data';

const askName = () => {
  const popup = createElement({ classes: ['popup', 'popup--animation'], parent: page.elements.container });
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
  const settingsName = document.querySelector('.settings__name');
  const updateApplyBtn = () => {
    if (input.value.length > 3 && !page.elements.applyBtn) {
      createElement({
        classes: ['settings__apply'],
        parent: popup,
        link: 'applyBtn',
        onClick: () => {
          if (input.value) {
            state.name = input.value;
            if (settingsName) settingsName.textContent = state.name;
            state.save();
            popup.classList.remove('popup--animation');
            setTimeout(() => popup.remove(), 500);
          }
        },
      });
    } else if (input.value.length <= 3 && page.elements.applyBtn) {
      page.elements.applyBtn.remove();
      page.elements.applyBtn = null;
    }
  };
  input.addEventListener('input', updateApplyBtn);
};

export default askName;
