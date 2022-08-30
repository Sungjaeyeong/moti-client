import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import * as Routes from '../routes';

const Login = () => {
  const history = useHistory();
  const { user, login } = useAuth();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    login(email, password);
  };

  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
    }
  };

  const goJoin = () => {
    history.push(Routes.pathConst.SIGINUP);
  };

  return (
    <>
      <h2>로그인 페이지</h2>
      <form onSubmit={onSubmit}>
        <input
          name='email'
          type='text'
          placeholder='이메일'
          value={email}
          onChange={onChange}
          required
        />
        <input
          name='password'
          type='password'
          placeholder='비밀번호'
          value={password}
          onChange={onChange}
          required
        />
        <button type='submit'>로그인</button>
      </form>
      <div>
        아직 회원이 아니신가요?
        <button onClick={goJoin}>회원가입</button>
      </div>
    </>
  );
};

export default Login;
