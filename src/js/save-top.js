import state from './state';
import loadTop from './load-top';

const saveTop = (data) => {
  fetch('https://646474f7043c103502b9efc9.mockapi.io/top', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

const checkTop = async (turns, time, date) => {
  const data = await loadTop();
  const newResult = {
    name: state.name,
    difficulty: state.mode,
    turns,
    time,
    date,
  };
  const prevResult = data.some((el) => el.name === state.name
    && el.difficulty === state.mode && el.turns <= turns);
  if (!prevResult) {
    saveTop(newResult);
  }
};

export default checkTop;
