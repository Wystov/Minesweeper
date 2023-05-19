const loadTop = async () => {
  try {
    const response = await fetch('https://646474f7043c103502b9efc9.mockapi.io/top', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    if (!response.ok) throw new Error();
    const data = await response.json();
    const filtered = data
      .sort((a, b) => {
        if (a.turns === b.turns) {
          return a.time - b.time;
        }
        return a.turns - b.turns;
      });
    return filtered;
  } catch {
    return false;
  }
};

export default loadTop;
