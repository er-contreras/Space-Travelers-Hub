const url = 'https://api.spacexdata.com/v3/missions';

// ACTIONS
const SET_MISSION = 'missionsStore/missions/SET_MISSION';
const RESERVE_MISSION = 'missionsStore/missions/RESERVE_MISSION';
const CANCEL_MISSION = 'missionsStore/missions/CANCEL_MISSION';

const initialState = {
  missions: [],
};

// ACTIONS CREATORS

export const missionArray = (response) => {
  response.map((mission) => (
    initialState.missions.push({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    })));
  return initialState;
};

export const missionReserve = (payload) => ({
  type: RESERVE_MISSION,
  payload,
});

export const missionCancel = (payload) => ({
  type: CANCEL_MISSION,
  payload,
});

export const setMission = () => async (dispatch) => {
  fetch(url)
    .then((rawResponse) => rawResponse.json())
    .then((response) => dispatch({
      type: SET_MISSION,
      payload: missionArray(response),
    }));
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MISSION: {
      return { ...action.payload };
    }
    case RESERVE_MISSION: {
      const newState = state.missions.map((mission) => (mission.id !== action.payload
        ? mission : { ...mission, reserved: !mission.reserved }));
      return { ...state, missions: newState };
    }
    default:
      return state;
  }
};

export default reducer;
