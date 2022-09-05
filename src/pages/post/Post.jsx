import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Comments from "../../components/Comments";

const Post = ({ postService, commentService }) => {
  const location = useLocation();
  const postId = location.state.postId;
  const [post, setPost] = useState({ files: [] });

  useEffect(() => {
    postService
      .getPost(postId)
      .then(post => setPost(post))
      .catch(err => {
        console.error(err);
      });
  }, [postId]);

  const downloadFile = fileId => {
    postService.downloadFile(fileId).catch(console.error);
  };

  return (
    <>
      <h2>포스트 페이지</h2>
      <div>제목: {post.title}</div>
      <div>내용: {post.content}</div>
      <div>
        첨부파일:
        {post.files.length !== 0 &&
          post.files.map(file => {
            return (
              <div key={file.id}>
                {file.uploadFileName.split(".")[0]}
                <button onClick={() => downloadFile(file.id)}>저장</button>
              </div>
            );
          })}
      </div>
      <div>
        <Comments postId={postId} commentService={commentService} />
      </div>
    </>
  );
};

export default Post;
