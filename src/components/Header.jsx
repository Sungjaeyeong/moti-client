import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import * as Routes from "../routes";
import { useAuth } from "../context/AuthContext";

const Header = memo(({ username }) => {
  const history = useHistory();
  const { logout } = useAuth();

  const goPosts = () => {
    history.push(Routes.pathConst.ROOT);
  };

  const goChats = () => {
    history.push(Routes.pathConst.CHATS);
  };

  const goTeams = () => {
    history.push(Routes.pathConst.TEAM_LIST);
  };

  const goMyPage = () => {
    history.push(Routes.pathConst.MYPAGE);
  };

  const goLogin = () => {
    history.push(Routes.pathConst.LOGIN);
  };

  const onLogout = () => {
    logout();
    history.push(Routes.pathConst.ROOT);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1 onClick={goPosts}>Moti</h1>
        {username && <span>{username}님, 반갑습니다!</span>}
      </div>
      {username ? (
        <nav className="menu">
          <button onClick={goPosts}>포스트</button>
          <button onClick={goChats}>채팅</button>
          <button onClick={goTeams}>팀</button>
          <button onClick={goMyPage}>마이페이지</button>
          <button onClick={onLogout}>로그아웃</button>
        </nav>
      ) : (
        <button onClick={goLogin}>로그인</button>
      )}
    </header>
  );
});

export default Header;
