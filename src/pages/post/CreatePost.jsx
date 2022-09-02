import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import * as Routes from "../../routes";

const CreatePost = ({ postService }) => {
  const history = useHistory();
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [attachFiles, setAttachFiles] = useState(null);

  const goPosts = () => {
    history.push(Routes.pathConst.ROOT);
  };

  const onSubmit = event => {
    event.preventDefault();
    postService.createPost(title, content, user.id, attachFiles, goPosts);
  };

  const onChange = event => {
    const {
      target: { name, value, files },
    } = event;
    switch (name) {
      case "title":
        return setTitle(value);
      case "content":
        return setContent(value);
      case "attachFile":
        return setAttachFiles(files);
      default:
    }
  };

  return (
    <>
      <h2>포스트 생성 페이지</h2>
      <form onSubmit={onSubmit}>
        <input name="title" type="text" placeholder="제목" value={title} onChange={onChange} required />
        <br />
        <textarea name="content" type="text" placeholder="내용" value={content} onChange={onChange} required />
        <br />
        첨부파일
        <input type="file" name="attachFile" multiple="multiple" onChange={onChange} />
        <br />
        <button type="submit">작성완료</button>
      </form>
    </>
  );
};

export default CreatePost;
