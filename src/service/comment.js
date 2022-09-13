import axios from "axios";

const baseURL = process.env.REACT_APP_MOTI_SERVER_BASE_URL;

export default class CommentService {
  // 댓글 등록
  async writeComment(content, postId, userId) {
    return await axios.post(
      `${baseURL}/comments`,
      {
        content,
        postId,
        userId,
      },
      {
        withCredentials: true,
      }
    );
  }

  // 댓글 조회
  async getComments(postId, page) {
    return await axios.get(`${baseURL}/comments?postId=${postId}&page=${page}`);
  }

  // 댓글 수정
  async updateComment(comment, userId, commentId) {
    return await axios.patch(
      `${baseURL}/comments/${commentId}`,
      {
        comment,
        userId,
      },
      {
        withCredentials: true,
      }
    );
  }

  // 댓글 삭제
  async deleteComment(commentId) {
    return await axios.delete(`${baseURL}/comments/${commentId}`, {
      withCredentials: true,
    });
  }
}
