import React, { useState } from 'react';
import FindContainer from '../styled/FindContainer';
import { findId, findPwd } from '../../api/constant';
import { useNavigate } from 'react-router-dom';
import PwdReset from './PwdReset';

const Find = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(['', '', '']);
  const [id2, setId2] = useState('');
  const [name2, setName2] = useState('');
  const [phone2, setPhone2] = useState(['', '', '']);
  const navigate = useNavigate();

  return (
    <FindContainer>
      <section>
        <div className='id_find'>
          <p>아이디 찾기</p>
          <div className='name'>
            <p>이름</p>
            <input type={'text'} onChange={e => setName(e.target.value)} />
          </div>
          <div className='phone'>
            <p>전화번호</p>
            <input
              type={'text'}
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
              value={phone[2]}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setPhone(p => {
                  p[2] = value;
                  return [...p];
                });
              }}
            />
          </div>
          <div
            className='find'
            onClick={e => {
              findId(name, phone.join(''))
                .then(res => {
                  if (res) {
                    alert(`아이디는 ${res.username}입니다.`);
                  } else {
                    alert('입력한 정보에 해당하는 유저가 없습니다.');
                  }
                })
                .catch();
            }}
          >
            <p>찾기</p>
          </div>
        </div>
        <div className='pwd_find'>
          <p>비밀번호 찾기</p>
          <div className='name'>
            <p>이름</p>
            <input type={'text'} onChange={e => setName2(e.target.value)} />
          </div>
          <div className='id'>
            <p>아이디</p>
            <input type={'text'} onChange={e => setId2(e.target.value)} />
          </div>
          <div className='phone'>
            <p>전화번호</p>
            <input
              type={'text'}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setPhone2(p => {
                  p[0] = value;
                  return [...p];
                });
              }}
            />
            <input
              type={'text'}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setPhone2(p => {
                  p[1] = value;
                  return [...p];
                });
              }}
            />
            <input
              type={'text'}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setPhone2(p => {
                  p[2] = value;
                  return [...p];
                });
              }}
            />
          </div>
          <div
            className='find'
            onClick={e => {
              findPwd(name2, phone2.join(''), id2)
                .then(res => {
                  if (res == 'True') {
                    navigate(`/pwdreset?id=${btoa(id2)}`);
                  } else {
                    alert('입력한 정보에 해당하는 유저가 없습니다.');
                  }
                })
                .catch();
            }}
          >
            <p>찾기</p>
          </div>
        </div>
      </section>
    </FindContainer>
  );
};

export default Find;
