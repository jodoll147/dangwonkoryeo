import { useState } from 'react';
import LoginContainer from '../styled/LoginContainer';
import { Link, useNavigate } from 'react-router-dom';
import { PostLogin } from '../../api/constant';
import styled from 'styled-components';

const Error = styled.div`
  position: relative;
  margin-top: 30px;
  font-family: 'Cafe24';
  font-size: 14px;
  color: red;
`;

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [loginBtnHover, setLoginBtnHover] = useState('#4ea6a6');
  const [error, setError] = useState('');

  return (
    <LoginContainer>
      <section>
        <div className='title'>LOGIN</div>
        <div className='id'>
          <p>아이디</p>
          <input type={'text'} name={'id'} maxlength={'20'} onChange={e => setId(e.target.value)} />
        </div>
        <div className='pwd'>
          <p>비밀번호</p>
          <input
            type={'password'}
            name={'pwd'}
            maxlength={'10'}
            onChange={e => setPwd(e.target.value)}
          />
        </div>
        <button
          className='login_btn'
          onClick={e => {
            PostLogin(id, pwd)
              .then(res => {
                if (localStorage.getItem('token')) {
                  navigate('/dangwonkeoyeo');
                  window.location.reload();
                }
              })
              .catch(
                e => console.log('login error', e),
                setError('존재하지 않는 아이디나 비밀번호 입니다.'),
              );
          }}
          onMouseOver={() => setLoginBtnHover('#306666')}
          onMouseLeave={() => setLoginBtnHover('#4ea6a6')}
          style={{ background: loginBtnHover }}
        >
          LOGIN
        </button>
        <Error>{error}</Error>
        <div className='find'>
          <Link to={'/find'} style={{ textDecoration: 'none', color: 'black' }}>
            아이디/비밀번호 찾기
          </Link>
        </div>
        <div className='join'>
          <Link to={'/join'} style={{ textDecoration: 'none', color: 'black' }}>
            회원가입
          </Link>
        </div>
      </section>
    </LoginContainer>
  );
};

export default Login;
