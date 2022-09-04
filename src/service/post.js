import axios from "axios";

const baseURL = process.env.REACT_APP_MOTI_SERVER_BASE_URL;

export default class PostService {
  // 포스트 생성
  async createPost(title, content, userId, fileList) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("userId", userId);
    if (fileList) {
      [...fileList].map(file => formData.append("multipartFiles", file));
    }

    return await axios.post(`${baseURL}/posts`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
  }

  // 포스트 수정
  async editPost(postId, title, content) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    return await axios.patch(`${baseURL}/posts/${postId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
  }

  // 포스트 조회
  async getPost(postId) {
    return await axios.get(`${baseURL}/posts/${postId}`).then(res => res.data);
  }

  // 포스트 리스트 조회
  async getPosts(searchWord) {
    if (searchWord) {
      return await axios
        .get(`${baseURL}/posts?search=${searchWord}`)
        .then(res => res.data);
    }
    return await axios.get(`${baseURL}/posts`).then(res => res.data);
  }

  // 포스트 삭제
  async deletePost(postId) {
    return await axios.delete(`${baseURL}/posts/${postId}`, {
      withCredentials: true,
    });
  }

  // 첨부파일 다운
  async downdloadFile(fileId) {
    window.open(`${baseURL}/posts/attach/${fileId}`);
  }
}
