import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { setMission, missionReserve, missionCancel } from '../redux/missions/missions';
import '../assets/styles/missions.css';

const Missions = () => {
  const missionsList = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (!missionsList.length) {
      await dispatch(setMission());
    }
  }, []);

  const reserveHandler = (e) => {
    const payload = e.target.parentNode.parentNode.id;
    dispatch(missionReserve(payload));
  };

  const cancelHandler = (e) => {
    const payload = e.target.parentNode.parentNode.id;
    dispatch(missionCancel(payload));
  };

  return (
    <div>
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th colSpan="2">Status</th>
        </tr>
        {(missionsList.map((mission) => (
          <tr key={mission.id} id={mission.id}>
            <td className="mission_name">{mission.name}</td>
            <td className="description">{mission.description}</td>
            <td className="member_cnt">
              {
                mission.reserved
                  ? <span className="active_member">Active member</span>
                  : <span className="inactive_member">NOT A MEMBER</span>
              }

            </td>
            <td className="btn_ctn">
              {
                mission.reserved
                  ? <button type="button" className="cancel_btn" onClick={cancelHandler}>Leave Mission</button>
                  : <button type="button" className="reserve_btn" onClick={reserveHandler}>Join Mission</button>
              }
            </td>
          </tr>
        )))}
      </table>
    </div>
  );
};

export default Missions;
