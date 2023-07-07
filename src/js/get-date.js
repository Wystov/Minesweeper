const getDate = (strDate) => {
  const fullDate = new Date(strDate);
  const date = fullDate.toLocaleDateString({ weekday: '', month: 'long' });
  const time = fullDate.toLocaleTimeString();
  return [time, date];
};

export default getDate;
