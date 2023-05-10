const createElement = (tag, classes, parent, textContent) => {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  if (parent) parent.append(element);
  if (textContent) element.innerHTML = textContent;
  return element;
};

export default createElement;
