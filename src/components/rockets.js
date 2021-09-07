import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRockets,
  reserveRocket, //eslint-disable-line
  cancelReservation //eslint-disable-line
}
  from '../redux/rockets/rocketsReducer';
import styles from './rockets.module.css';

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
        <ul key={rocket.id}>
          <li>
            <img className={styles.images} alt="rocket img" src={rocket.flickr_images} />
          </li>
          <div className={styles.info}>
            <li>{rocket.name}</li>
            <li className={styles.description}>{rocket.description}</li>
            <button type="button">Reserve Rocket</button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Rockets;
