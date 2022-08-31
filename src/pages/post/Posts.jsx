import React from "react";
import { useHistory } from "react-router-dom";
import * as Routes from "../../routes";

const Posts = () => {
  const history = useHistory();

  const goCreatePost = () => {
    history.push(Routes.pathConst.CreatePost);
  };

  return (
    <>
      <h2>포스트 리스트 페이지</h2>
      <div>
        <button onClick={goCreatePost}>포스트 생성하기</button>
      </div>
    </>
  );
};

export default Posts;
