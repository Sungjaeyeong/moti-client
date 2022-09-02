import axios from "axios";

const baseURL = process.env.REACT_APP_MOTI_SERVER_BASE_URL;

export default class PostService {
  async createPost(title, content, userId, fileList, goPosts) {
    console.log({
      title,
      content,
      userId,
      multipartFiles: fileList,
    });
    return await axios
      .post(
        `${baseURL}/posts`,
        {
          title,
          content,
          userId,
          multipartFiles: fileList,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        alert("저장되었습니다.");
        goPosts();
      })
      .catch(err => {
        console.error(err);
        alert("다시 시도해주세요.");
      });
  }
}
