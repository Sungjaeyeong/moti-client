import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

const Header = memo(({ username }) => {
  const history = useHistory();

  const goPosts = () => {
    history.push('/');
  };

  const goChats = () => {
    history.push('/chats');
  };

  const goMyPage = () => {
    history.push('/mypage');
  };

  const goLogin = () => {
    history.push('/login');
  };

  const onLogout = () => {};

  return (
    <header className='header'>
      <div className='logo'>
        <h1>Moti</h1>
        {username && <span>{username}님, 반갑습니다!</span>}
      </div>
      {username ? (
        <nav className='menu'>
          <button onClick={goPosts}>포스트</button>
          <button onClick={goChats}>채팅</button>
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
