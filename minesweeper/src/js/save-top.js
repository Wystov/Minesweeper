import state from './state';
import loadTop from './load-top';

const saveTop = async (data, method) => {
  console.log('saving new best', data, JSON.stringify(data));
  fetch('https://646474f7043c103502b9efc9.mockapi.io/top', {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

const checkTop = async (turns, time, date) => {
  const data = await loadTop();
  console.log('loaded', data);
  if (data) {
    const newResult = {
      name: state.name,
      difficulty: state.mode,
      turns,
      time,
      date,
    };
    if (data.length === 0) {
      console.log('post')
      return saveTop(newResult, 'POST');
    }
    const resultIndex = data.findIndex((el) => {
      console.log(el.name, state.name, el.difficulty, state.mode, el.turns, turns, el.time, time);
      return el.name === state.name && el.difficulty === state.mode && el.turns >= turns;
    });
    console.log(resultIndex)
    if (resultIndex !== -1) {
      console.log('put')
      console.log(data)
      data.splice(resultIndex, 1, newResult);
      console.log(data)
      saveTop(data, 'PATCH');
    }
  }
};

export default checkTop;
