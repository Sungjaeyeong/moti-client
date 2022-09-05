import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import CommentCard from "./CommentCard";
import EditCommentForm from "./EditCommentForm";

const Comments = ({ commentService, postId }) => {
  const { user } = useAuth();
  const [commentList, setCommentList] = useState([]);
  const [content, setContent] = useState("");

  const fetchComments = () => {
    commentService
      .getComments(postId)
      .then(res => {
        setCommentList(res.data.comments);
      })
      .catch(err => {
        console.error(err);
        alert("다시 시도해주세요.");
      });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    commentService
      .writeComment(content, postId, user.id)
      .then(() => {
        fetchComments();
        setContent("");
      })
      .catch(err => {
        console.error(err);
        alert("다시 시도해주세요.");
      });
  };

  const onChange = event => {
    setContent(event.target.value);
  };

  const renderWriteComment = () => {
    return (
      <div>
        <form onSubmit={onSubmit}>
          <textarea name="content" type="text" placeholder="댓글 입력" value={content} onChange={onChange} required />
          <br />
          <button type="submit">등록</button>
        </form>
      </div>
    );
  };

  const onUpdate = (commentId, comment) => {
    commentService
      .updateComment(comment, user.id, commentId) //
      .then(fetchComments)
      .catch(err => {
        console.error(err);
        alert("다시 시도해주세요.");
      });
  };

  const onDelete = commentId => {
    commentService
      .deleteComment(commentId) //
      .then(() => setCommentList(comments => comments.filter(comment => comment.contentId !== commentId)))
      .catch(err => {
        console.error(err);
        alert("다시 시도해주세요.");
      });
  };

  const renderCommentList = () => {
    return (
      <div>
        {commentList.map(comment => {
          return <CommentCard key={comment.contentId} comment={comment} onDelete={onDelete} onUpdate={onUpdate} user={user} />;
        })}
      </div>
    );
  };

  return (
    <div>
      <div>{renderWriteComment()}</div>
      <div>{renderCommentList()}</div>
    </div>
  );
};

export default Comments;
