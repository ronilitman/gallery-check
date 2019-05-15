//pics Reducer

const picsReducer = [];

export default (state = picsReducer, action) => {

  switch (action.type) {
    case 'SET_PICS':
      return action.pics;
    default:
      return state;
  }
};
