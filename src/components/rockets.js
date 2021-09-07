import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRockets, reserveRocket, cancelReservation } from '../redux/rockets/rocketsReducer';

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
      {console.log(rocketsList)}
      {/* {rocketsList.map((rocket) => (
        <div>
          <h2>Hello</h2>
        </div>
      ))} */}
    </div>
  )
}

export default Rockets;