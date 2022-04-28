import LoginContainer from './styled/LoginContainer';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <LoginContainer>
      <section>
        <div className='temp'></div>
        <div className='home'>
          <Link to='/' style={{ textDecoration: 'none', color: '#4EA6A6' }}>
            당원커여
          </Link>
        </div>
        <div className='id'>
          <p>아이디</p>
          <input type={'text'} name={'id'} maxlength={'10'} />
        </div>
        <div className='pwd'>
          <p>비밀번호</p>
          <input type={'password'} name={'pwd'} maxlength={'10'} />
        </div>
        <div className='login_btn'>
          <input type={'button'} value='로그인' />
        </div>
        <div className='id_find'>
          <Link to={'/find'} style={{ textDecoration: 'none', color: '#A68C76' }}>
            아이디/비밀번호 찾기
          </Link>
        </div>
        <div className='join'>
          <Link to={'/join'} style={{ textDecoration: 'none', color: '#A68C76' }}>
            회원가입
          </Link>
        </div>
      </section>
    </LoginContainer>
  );
};

export default Login;
