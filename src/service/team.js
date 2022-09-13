import axios from "axios";

const baseURL = process.env.REACT_APP_MOTI_SERVER_BASE_URL;

export default class TeamService {
  // 팀 생성
  async createTeam(userId, teamName) {
    return await axios.post(
      `${baseURL}/teams`,
      {
        userId,
        teamName,
      },
      {
        withCredentials: true,
      }
    );
  }

  // 팀 가입
  async joinTeam(teamId, userId) {
    return await axios.post(
      `${baseURL}/teams/${teamId}`,
      {
        userId,
      },
      {
        withCredentials: true,
      }
    );
  }

  // 팀 리스트 조회
  async getTeamList() {
    return await axios.get(`${baseURL}/teams`);
  }

  // 유저의 팀 리스트 조회
  async getTeamListByUser(userId) {
    return await axios.get(`${baseURL}/teams?userId=${userId}`);
  }

  // 팀 상태 변경
  async changeTeamStatus(teamId, teamStatus) {
    return await axios.patch(
      `${baseURL}/teams/${teamId}`,
      {
        teamStatus,
      },
      {
        withCredentials: true,
      }
    );
  }

  // 팀 탈퇴
  async exitTeam(teamId, userId) {
    return await axios.delete(`${baseURL}/teams/${teamId}/users/${userId}`, { withCredentials: true });
  }
}
