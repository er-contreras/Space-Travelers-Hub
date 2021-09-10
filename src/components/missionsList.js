import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { setMission, missionReserve } from '../redux/missions/missions';
import '../assets/styles/missions.css';

const Missions = () => {
  console.log('Body1');
  const dispatch = useDispatch();
  const missionsList = useSelector((state) => state.missionsReducer);

  useEffect(() => {
    if (!missionsList.missions.length) {
      dispatch(setMission());
    }
  }, []);

  const reserveHandler = (payload) => {
    dispatch(missionReserve(payload));
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th colSpan="2">Status</th>
          </tr>
          {(missionsList.missions.map((mission) => (
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
                    ? <button type="button" className="cancel_btn" onClick={() => { reserveHandler(mission.id); }}>Leave Mission</button>
                    : <button type="button" className="reserve_btn" onClick={() => { reserveHandler(mission.id); }}>Join Mission</button>
                }
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
