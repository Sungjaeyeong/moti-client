import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import * as Routes from "../../routes";

const TeamList = ({ teamService }) => {
  const history = useHistory();
  const { user } = useAuth();
  const [teamList, setTeamList] = useState([]);
  const [myTeamList, setMyTeamList] = useState([]);

  const fetchTeamList = () => {
    teamService
      .getTeamList()
      .then(res => {
        setTeamList(res.data.responseTeamDtoList);
      })
      .catch(err => {
        console.error(err);
        alert("다시 시도해주세요.");
      });
  };

  const fetchMyTeamList = () => {
    teamService
      .getTeamListByUser(user.id)
      .then(res => {
        setMyTeamList(res.data.responseTeamDtoList);
      })
      .catch(err => {
        console.error(err);
        alert("다시 시도해주세요.");
      });
  };

  useEffect(() => {
    fetchTeamList();
    if (user) fetchMyTeamList();
  }, [teamService]);

  const goCreateTeam = () => {
    history.push(Routes.pathConst.CREATE_TEAM);
  };

  const onUpdate = (teamId, teamStatus) => {
    alert("팀 상태를 변경합니다.");
    if (teamStatus === "READY") {
      teamStatus = "COMP";
    } else {
      teamStatus = "READY";
    }
    teamService
      .changeTeamStatus(teamId, teamStatus)
      .then(() => {
        fetchMyTeamList();
      })
      .catch(err => {
        console.error(err);
        alert("다시 시도해주세요.");
      });
  };

  const onExit = teamId => {
    teamService
      .exitTeam(teamId, user.id)
      .then(() => {
        fetchMyTeamList();
        fetchTeamList();
      })
      .catch(err => {
        console.error(err);
        alert("다시 시도해주세요.");
      });
  };

  const onJoin = teamId => {
    teamService
      .joinTeam(teamId, user.id)
      .then(() => {
        fetchMyTeamList();
      })
      .catch(err => {
        console.log(err);
        if (err.response.data.message === "이미 포함된 유저입니다.") {
          alert("이미 가입한 팀입니다.");
          return;
        }
        alert("다시 시도해주세요.");
      });
  };

  return (
    <>
      <h2>팀리스트 페이지</h2>
      <button onClick={goCreateTeam}>팀 생성하기</button>
      <div>나의 팀들: </div>
      <div>
        {myTeamList.map(team => (
          <div key={team.teamId}>
            <span>팀이름: {team.teamName} / </span>
            <span>팀인원: {team.teamUsers.length}명 / </span>
            <span>팀상태: {team.teamStatus} / </span>
            <button onClick={() => onUpdate(team.teamId, team.teamStatus)}>수정</button>
            <button onClick={() => onExit(team.teamId)}>탈퇴</button>
          </div>
        ))}
      </div>
      <div>모든 팀들: </div>
      <div>
        {teamList.map(team => (
          <div key={team.teamId}>
            <span>팀이름: {team.teamName} / </span>
            <span>팀인원: {team.teamUsers.length}명 / </span>
            <span>팀상태: {team.teamStatus}</span>
            <button onClick={() => onJoin(team.teamId)}>가입</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamList;
