import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import * as Routes from "../../routes";

const EditPost = ({ postService }) => {
  const history = useHistory();
  const location = useLocation();
  const postId = location.state.postId;
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    postService
      .getPost(postId)
      .then(post => {
        setTitle(post.title);
        setContent(post.content);
      })
      .catch(err => {
        console.error(err);
      });
  }, [postId]);

  const onSubmit = event => {
    event.preventDefault();
    postService
      .editPost(postId, title, content)
      .then(() => {
        alert("수정되었습니다.");
        history.push({
          pathname: Routes.pathConst.POST,
          state: { postId },
        });
      })
      .catch(err => {
        console.error(err);
        alert("다시 시도해주세요.");
      });
  };

  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case "title":
        return setTitle(value);
      case "content":
        return setContent(value);
      default:
    }
  };

  return (
    <>
      <h2>포스트 수정 페이지</h2>
      <form onSubmit={onSubmit}>
        <input
          name="title"
          type="text"
          placeholder="제목"
          value={title}
          onChange={onChange}
          required
        />
        <br />
        <textarea
          name="content"
          type="text"
          placeholder="내용"
          value={content}
          onChange={onChange}
          required
        />
        <br />
        <button type="submit">작성완료</button>
      </form>
    </>
  );
};

export default EditPost;
