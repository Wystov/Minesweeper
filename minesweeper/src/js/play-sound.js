const playSound = (audio) => {
  const sound = new Audio(audio);
  sound.play();
};

export default playSound;
