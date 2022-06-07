import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllUser, getUserInfo, changeUserPost } from '../../api/constant';
import AccountModifyContainer from '../styled/AccountModifyContainer';

const AccountModify = () => {
  const info = getUserInfo();
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(['010', '', '']);
  const [birth, setBirth] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getAllUser().then(res => {
      if (res) {
        const tempUser = res.find(v => {
          return v.id == info.user_id;
        });
        setUser(tempUser);
      }
    });
  }, []);

  return (
    <AccountModifyContainer>
      <section>
        <div className='title'>내 정보 수정</div>
        <div className='box'>
          <div className='nameBox'>
            <p>이름</p>
            <div className='name'>{user.first_name}</div>
          </div>
          <div className='idBox'>
            <p>아이디</p>
            <div className='id'>{user.username}</div>
          </div>
          <div className='pwdBox'>
            <p>비밀번호</p>
            <div className='pwd' onClick={() => navigate(`/pwdreset?id=${btoa(info.username)}`)}>
              재설정
            </div>
          </div>
          <div className='emailBox'>
            <p>이메일</p>
            <input type={'text'} onChange={e => setEmail(e.target.value)} />
            <div
              className='emailBtn'
              onClick={e => {
                changeUserPost(info.username, '', email, '')
                  .then(res => {
                    alert('이메일 수정이 완료되었습니다.');
                  })
                  .catch(e => {
                    alert('오류가 발생했습니다.', e);
                  });
              }}
            >
              변경
            </div>
          </div>
          <div className='phoneBox'>
            <p>전화번호</p>
            <input
              type={'text'}
              maxLength={3}
              value={phone[0]}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setPhone(p => {
                  p[0] = value;
                  return [...p];
                });
              }}
            />
            <input
              type={'text'}
              maxLength={4}
              value={phone[1]}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setPhone(p => {
                  p[1] = value;
                  return [...p];
                });
              }}
            />
            <input
              type={'text'}
              maxLength={4}
              value={phone[2]}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setPhone(p => {
                  p[2] = value;
                  return [...p];
                });
              }}
            />
            <div
              className='phoneBtn'
              onClick={e => {
                changeUserPost(info.username, '', email, phone.join(''))
                  .then(res => {
                    alert('번호 수정이 완료되었습니다.');
                  })
                  .catch(e => {
                    alert('오류가 발생했습니다.', e);
                  });
              }}
            >
              변경
            </div>
          </div>
          <div className='birthBox'>
            <p>생년월일</p>
            <input
              type={'date'}
              onChange={e => {
                setBirth(e.target.value);
              }}
            />
            <div
              className='birthBtn'
              onClick={e => {
                changeUserPost(info.username, birth, '', '')
                  .then(res => {
                    alert('생년월일 수정이 완료되었습니다.');
                  })
                  .catch(e => {
                    alert('오류가 발생했습니다.', e);
                  });
              }}
            >
              변경
            </div>
            <Link to={`/dangwonkeoyeo`}>돌아가기</Link>
          </div>
        </div>
      </section>
    </AccountModifyContainer>
  );
};

export default AccountModify;
