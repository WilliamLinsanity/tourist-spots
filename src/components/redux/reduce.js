const ADD_SPOTSLIST = 'ADD_SPOTSLIST';

const initState = {
  spotsList: [],
};

const reduce = (state = initState, action) => {
  switch (action.type) {
    case ADD_SPOTSLIST: {   
      return {
        spotsList: action.payload.spotsList,
      };
    }
    default:
      return state;
  }
};
export default reduce;