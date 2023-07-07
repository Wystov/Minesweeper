import state from './state';

const changeTheme = () => {
  const { body } = document;
  body.classList.toggle('page--theme-dark');
  state.theme = body.className.split(' ');
  state.save();
};

export default changeTheme;
