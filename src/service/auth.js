import axios from 'axios';

const baseURL = process.env.REACT_APP_MOTI_SERVER_BASE_URL;

export default class AuthService {
  async signup(email, password, name, job, introduce) {
    return axios
      .post(`${baseURL}/users`, {
        email,
        password,
        name,
        job,
        introduce,
      })
      .then(() => {
        alert('회원가입이 완료되었습니다.');
      })
      .catch(err => {
        console.error(err);
        alert('다시 시도해주세요.');
      });
  }

  async login(email, password) {
    let data;
    await axios
      .post(
        `${baseURL}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then(res => {
        data = res.data;
      })
      .catch(console.error);

    return data;
  }

  async me(userId) {
    let data;
    axios
      .get(`${baseURL}/users/${userId}`, {
        withCredentials: true,
      })
      .then(res => {
        data = res.data;
      })
      .catch(console.error);

    return data;
  }

  async logout() {
    axios
      .post(
        `${baseURL}/users/logout`,
        {},
        {
          withCredentials: true,
        }
      )
      .catch(console.error);
  }
}
