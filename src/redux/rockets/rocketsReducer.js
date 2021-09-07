import spaceXAPI from '../../components/apiManager';

const GET_ROCKETS = 'spaceX/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'spaceX/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'spaceX/rockets/CANCEL_RESERVATION';

const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => (rocket.id !== action.payload
        ? rocket
        : { ...rocket, reserved: true }));
      // if (rocket.id !== action.payload) {
      //   return rocket;
      // }
      // return {
      //   ...rocket,
      //   reserved: true,
      // };

      return newState;
    }
    case CANCEL_RESERVATION: {
      const newState = state.map((rocket) => (rocket.id !== action.payload
        ? rocket
        : { ...rocket, reserved: false }));
        // if (rocket.id !== action.payload) {
        //   return rocket;
        // }
        // return {
        //   ...rocket,
        //   reserved: false,
        // };

      return newState;
    }
    default:
      return state;
  }
};

const getRocketsAction = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const getRockets = () => (dispatch) => {
  spaceXAPI.getRockets().then((res) => {
    dispatch(getRocketsAction(
      res.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        flickr_images: rocket.flickr_images[0],
      })),
    ));
  });
};

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelReservation = (payload) => ({
  type: CANCEL_RESERVATION,
  payload,
});

export default rocketsReducer;
