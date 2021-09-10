import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRockets,
  reserveRocket,
  cancelReservation,
}
  from '../redux/rockets/rocketsReducer';
import styles from './rockets.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsList = useSelector((state) => state.rockets);
  console.log('Rocket1');
  const reserveRocketHandler = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelReservationHandler = (id) => {
    dispatch(cancelReservation(id));
  };

  useEffect(() => {
    if (rocketsList.length === 0) {
      console.log('rocketEffect');
      dispatch(getRockets());
    }
  }, []);

  let reserved = null;

  return (
    <div id={styles.container}>
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
              {rocket.reserved && (<span className={styles.reserved}>Reserved</span>)}
              {rocket.description}
            </li>

            <button
              className={!rocket.reserved === true ? styles.button : styles.cancel}
              type="button"
              onClick={() => {
                reserved = rocket.reserved;
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
