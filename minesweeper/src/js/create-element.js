import page from './data';

const createElement = ({
  tag = 'div',
  classes = [],
  parent = null,
  dataSet = null,
  textContent = null,
  onClick = null,
  link = null,
}) => {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  parent.append(element);
  if (textContent) element.innerHTML = textContent;
  if (typeof dataSet === 'number') element.dataset.cell = dataSet;
  if (typeof onClick === 'function') element.addEventListener('click', onClick);
  if (link) page.elements[link] = element;
  return element;
};

export default createElement;
