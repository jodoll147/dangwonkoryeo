import { useState } from 'react';
import LoginContainer from '../styled/LoginContainer';
import { Link } from 'react-router-dom';
import { PostLogin } from '../../api/constant';

const Login = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  // console.log(id, pwd);
  return (
    <LoginContainer>
      <section>
        <p>LOGIN</p>
        <div className='id'>
          <p>아이디</p>
          <input type={'text'} name={'id'} maxlength={'10'} onChange={e => setId(e.target.value)} />
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
        <div
          className='login_btn'
          onClick={e => {
            PostLogin(id, pwd).then().catch(console.log(e));
          }}
        >
          <p>LOGIN</p>
        </div>
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
