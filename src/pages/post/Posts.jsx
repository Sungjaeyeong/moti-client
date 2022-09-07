import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as Routes from "../../routes";
import { useAuth } from "../../context/AuthContext";
import PostCard from "../../components/PostCard";

const Posts = ({ postService }) => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const { user } = useAuth();

  const goCreatePost = () => {
    history.push(Routes.pathConst.CREATE_POST);
  };

  useEffect(() => {
    postService
      .getPosts()
      .then(posts => setPosts(posts))
      .catch(err => {
        console.error(err);
      });
  }, [postService]);

  const onClick = postId => {
    history.push({
      pathname: Routes.pathConst.POST,
      state: { postId },
    });
  };

  const onDelete = postId => {
    postService
      .deletePost(postId)
      .then(() => setPosts(posts => posts.filter(post => post.id !== postId)))
      .catch(err => {
        console.error(err);
      });
  };

  const onUpdate = postId => {
    history.push({
      pathname: Routes.pathConst.EDIT_POST,
      state: { postId },
    });
  };

  const onChange = event => {
    setSearchWord(event.target.value);
    postService
      .getPosts(event.target.value)
      .then(posts => setPosts(posts))
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
      <h2>포스트 리스트 페이지</h2>
      <div>
        <form>
          <input name="searchWord" type="text" placeholder="검색" value={searchWord} onChange={onChange} required />
        </form>
        <button onClick={goCreatePost}>포스트 생성하기</button>
        <div>
          {posts.map(post => (
            <PostCard
              key={post.id}
              post={post}
              owner={user ? post.userId === user.id : false}
              onClick={onClick}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
