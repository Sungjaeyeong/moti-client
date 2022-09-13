import React, { useState } from "react";

const EditCommentForm = ({ comment, onUpdate, onClose }) => {
  const [text, setText] = useState(comment.content);

  const onSubmit = async event => {
    event.preventDefault();
    onUpdate(comment.contentId, text);
    onClose();
  };

  const onChange = event => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="수정할 댓글" value={text} required autoFocus onChange={onChange} />
      <div>
        <button type="submit">수정하기</button>
        <button type="button" onClick={onClose}>
          취소
        </button>
      </div>
    </form>
  );
};

export default EditCommentForm;
