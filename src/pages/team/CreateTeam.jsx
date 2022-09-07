import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import * as Route from "../../routes";

const CreateTeam = ({ teamService }) => {
  const history = useHistory();
  const { user } = useAuth();
  const [teamName, setTeamName] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    teamService
      .createTeam(user.id, teamName)
      .then(() => {
        history.push(Route.pathConst.TEAM_LIST);
      })
      .catch(err => {
        console.error(err);
        alert("다시 시도해주세요.");
      });
  };

  const onChange = event => {
    setTeamName(event.target.value);
  };

  return (
    <>
      <h2>팀 생성 페이지</h2>
      <div>
        <form onSubmit={onSubmit}>
          <input name="teamName" type="text" placeholder="팀 이름" value={teamName} onChange={onChange} required />
          <br />
          <button type="submit">등록</button>
        </form>
      </div>
    </>
  );
};

export default CreateTeam;
