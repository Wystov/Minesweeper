const getDate = () => {
  const newDate = new Date();
  const date = newDate.toLocaleDateString({ weekday: '', month: 'long' });
  const time = newDate.toLocaleTimeString();
  return `&#128337;${time} &#128197;${date}`;
};

export default getDate;
