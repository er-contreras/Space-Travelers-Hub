import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRockets,
  reserveRocket, //eslint-disable-line
  cancelReservation //eslint-disable-line
}
  from '../redux/rockets/rocketsReducer';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsList = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rocketsList.length === 0) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <div>
      {rocketsList.map((rocket) => (
        console.log(rocket.id)
        // <div key={rocket.id}>
        //   <li>{rocket}</li>
        // </div>
      ))}
    </div>
  );
};

export default Rockets;
