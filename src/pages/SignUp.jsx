import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
  const { user, signUp } = useAuth();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [job, setJob] = useState('DEV');
  const [introduce, setIntroduce] = useState('');

  const emptyField = () => {
    setEmail('');
    setPassword('');
    setUsername('');
    setJob('');
    setIntroduce('');
  };

  const onSubmit = event => {
    event.preventDefault();
    signUp(email, password, username, job, introduce).finally(emptyField);
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
      case 'username':
        return setUsername(value);
      case 'job':
        return setJob(value);
      case 'introduce':
        return setIntroduce(value);
      default:
    }
  };

  return (
    <>
      <h2>회원가입 페이지</h2>
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
        <input
          name='username'
          type='text'
          placeholder='이름'
          value={username}
          onChange={onChange}
          required
        />
        직업:
        <input name='job' type='radio' value={'PM'} onChange={onChange} />
        PM
        <input
          name='job'
          type='radio'
          value={'DEV'}
          onChange={onChange}
          checked
        />
        DEV
        <input
          name='introduce'
          type='text'
          placeholder='자기소개'
          value={introduce}
          onChange={onChange}
        />
        <button type='submit'>회원가입</button>
      </form>
    </>
  );
};

export default SignUp;
