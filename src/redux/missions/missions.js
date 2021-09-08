const url = 'https://api.spacexdata.com/v3/missions';

// actions
const SET_MISSION = 'missionsStore/missions/SET_BOOK';
const initialState = {
  missions: [],
};
export const missionArray = (response) => {
  response.map((mission) => (
    initialState.missions.push({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    })));
  return initialState;
};

// actions creator
export const setMission = () => async (dispatch) => {
  fetch(url)
    .then((rawResponse) => rawResponse.json())
    .then((response) => dispatch({
      type: SET_MISSION,
      payload: missionArray(response),
    }));
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MISSION: {
      return { ...action.payload }; }
    default:
      return state;
  }
};

export default reducer;
