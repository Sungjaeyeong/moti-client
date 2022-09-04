import React, { useState } from "react";

const PostCard = ({ post, owner, onClick, onDelete, onUpdate }) => {
  const { id, title, userName } = post;

  return (
    <div>
      <span onClick={() => onClick(id)}>제목: {title}</span> /{" "}
      <span>작성자: {userName}</span>
      {owner && (
        <span>
          <button onClick={() => onUpdate(id)}>수정</button>
          <button onClick={() => onDelete(id)}>삭제</button>
        </span>
      )}
    </div>
  );
};

export default PostCard;
