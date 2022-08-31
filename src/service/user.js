import axios from "axios";

const baseURL = process.env.REACT_APP_MOTI_SERVER_BASE_URL;

export default class UserService {
  async editUser(username, introduce, user) {
    let data;
    await axios
      .patch(
        `${baseURL}/users/${user.id}`,
        {
          name: username,
          introduce,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        alert("변경되었습니다.");
        let editedUser = {
          ...user,
          username,
          introduce,
        };
        data = editedUser;
      })
      .catch(err => {
        console.error(err);
        alert("다시 시도해주세요.");
        data = user;
      });
    return data;
  }
}
