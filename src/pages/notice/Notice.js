import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NoticeContainer from '../styled/NoticeContainer';
import { getPost } from '../../api/constant';
import { postPost } from '../../api/constant';
import { format } from 'date-fns';

const NoticeBox = styled.div`
  position: relatvie;
  display: flex;
  width: 940px;
  height: 50px;
  .title {
    position: relative;
    padding-left: 10px;
    width: 650px;
    height: 50px;
    text-align: left;
    border: 1px solid #f2f2f2;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 50px;
  }
  .date {
    position: relative;
    padding-left: 10px;
    width: 290px;
    height: 50px;
    text-align: left;
    border: 1px solid #f2f2f2;
    font-family: 'Cafe24';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 50px;
  }
`;

const WriteList = () => {
  const [notice, setNotice] = useState([{ id: null, title: '', date: '' }]);

  useEffect(() => {
    getPost().then(res => {
      if (res) {
        setNotice(
          res.map(v => {
            return {
              id: v.id,
              title: v.title,
              date: v.updated_at,
            };
          }),
        );
      }
    });
  }, []);

  const noticeList = notice.map(v => (
    <NoticeBox>
      <div className='title'>
        <Link to={`/notice/content?id=${v.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          {v.title}
        </Link>
      </div>
      <div className='date'>{format(new Date(v.date || 0), 'yyyy년 MM월 dd일')}</div>
    </NoticeBox>
  ));

  return noticeList;
};

const Notice = () => {
  const [hover, setHover] = useState('#CCD9D9');

  return (
    <NoticeContainer>
      {postPost}
      <section>
        <p>공지사항</p>
        <div className='writeTh'>
          <div className='hr'>
            <div className='title'>제목</div>
            <div className='date'>날짜</div>
          </div>
          <WriteList />
        </div>
        <div
          className='writing'
          style={{ background: hover }}
          onMouseOver={() => setHover('#4EA6A6')}
          onMouseLeave={() => setHover('#CCD9D9')}
        >
          <Link
            to='/notice/noticeWrite'
            className='writeBtn'
            style={{ textDecoration: 'none', color: '#F2F2F2' }}
          >
            글쓰기
          </Link>
        </div>
      </section>
    </NoticeContainer>
  );
};

export default Notice;
