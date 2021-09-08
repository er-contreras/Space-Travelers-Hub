/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { setMission } from '../redux/missions/missions';
import '../assets/styles/missions.css';

const Missions = () => {
  const missionsList = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (!missionsList.length) {
      await dispatch(setMission());
    }
  }, []);

  const arrayCheck = () => {
    if (missionsList.length > 0) {
      return (missionsList.map((mission) => (

        <tr key={mission.id} id={mission.id}>
          <td className="mission_name">{mission.name}</td>
          <td className="description">{mission.description}</td>
          <td><span>NOT A MEMBER</span></td>
          <td><button type="button">Join Mission</button></td>
        </tr>
      )));
    }
    return <p>teste erro</p>;
  };

  return (
    <div>
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th colSpan="2">Status</th>
        </tr>
        {arrayCheck()}
      </table>
    </div>
  );
};

export default Missions;
