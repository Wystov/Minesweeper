const destroyPopup = (el, event) => {
  const clickOnEl = el.contains(event.target);
  if (!clickOnEl) el.remove();
};

export default destroyPopup;
