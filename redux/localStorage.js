export const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('state', serialisedState);
  } catch (err) {
    //Ignore save errors
  }
};

export const loadState = () => {
  try {
    const serialisedState = localStorage.getItem('state');
    if (serialisedState === null) {
      return {};
    }
    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};
