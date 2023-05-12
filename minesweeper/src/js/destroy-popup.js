const destroyPopup = (el, event) => {
  const clickOnEl = el.contains(event.target);
  // console.log(target)
  if (!clickOnEl) el.remove();
};

export default destroyPopup;
