import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRockets,
  reserveRocket,
  cancelReservation //eslint-disable-line
}
  from '../redux/rockets/rocketsReducer';
import styles from './rockets.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsList = useSelector((state) => state.rockets);

  const reserveRocketHandler = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelReservationHandler = (id) => {
    dispatch(cancelReservation(id));
  };

  useEffect(() => {
    if (rocketsList.length === 0) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <div>
      {rocketsList.map((rocket) => (
        <ul key={rocket.id}>
          <li>
            <img className={styles.images} alt="rocket img" src={rocket.flickr_images} />
          </li>
          <div className={styles.info}>
            <li>{rocket.name}</li>

            <li
              className={styles.description}
            >
              {/* {reserved && (<span className={styles.reserved}>Reserved</span>)} */}
              {rocket.description}
            </li>

            <button
              type="button"
              onClick={() => {
                const { reserved } = rocket;
                if (!reserved) {
                  reserveRocketHandler(rocket.id);
                } else {
                  cancelReservationHandler(rocket.id);
                }
              }}
            >
              Reserve Rocket
            </button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Rockets;
