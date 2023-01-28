import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import EditCommentForm from "./EditCommentForm";

const CommentCard = ({ comment, onUpdate, onDelete, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <span>댓글: {comment.content} / </span>
      <span>작성자: {comment.userName} / </span>
      {user?.id === comment.userId && (
        <span>
          <button onClick={() => setIsOpen(true)}>수정</button> /{" "}
          <button onClick={() => onDelete(comment.contentId)}>삭제</button>
        </span>
      )}
      {isOpen && (
        <EditCommentForm //
          comment={comment}
          onUpdate={onUpdate}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default CommentCard;
