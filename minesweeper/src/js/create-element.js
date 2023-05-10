const createElement = (tag, classes, parent, dataSet, textContent) => {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  if (parent) parent.append(element);
  if (textContent) element.innerHTML = textContent;
  if (dataSet || dataSet === 0) element.dataset.cell = dataSet;
  return element;
};

export default createElement;
