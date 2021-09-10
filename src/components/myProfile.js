import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/styles/myProfile.css';

const MyProfile = () => {
  const rocketsList = useSelector((state) => state.rockets);
  const missionsList = useSelector((state) => state.missionsReducer.missions);
  const reservedRockets = rocketsList.filter((rocket) => rocket.reserved);
  const reservedMissions = missionsList.filter((mission) => mission.reserved);

  return (
    <div className="profile-container">
      <div className="reserved">
        <h2>My Missions</h2>
        <ul className="unit-list">
          {reservedMissions.map((mission) => (
            <li className="reserved-li" key={mission.id}>{mission.name}</li>
          ))}
        </ul>
      </div>
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
