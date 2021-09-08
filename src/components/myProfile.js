import React from 'react';
import { useSelector } from 'react-redux';
import './myProfile.css';

const MyProfile = () => {
  const rocketsList = useSelector((state) => state.rockets);
  const reservedRockets = rocketsList.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-container">

      <div className="reserved">
        <h2>My Rockets</h2>
        <ul className="unit-list">
          {reservedRockets.map((rocket) => (
            <li className="reserved-li" key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
