import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NoticeContainer from '../styled/NoticeContainer';

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
  const [notice, setNotice] = useState([
    { title: '이거시거늘', date: '22/05/14' },
    { title: '촉촉슬림화장솜', date: '22/05/14' },
    { title: '이 가게 저 가게 다니면서 라면을 보았네', date: '22/05/14' },
    { title: '와 라면', date: '22/05/14' },
  ]);

  const noticeList = notice.map(temp => (
    <NoticeBox>
      <div className='title'>{temp.title}</div>
      <div className='date'>{temp.date}</div>
    </NoticeBox>
  ));

  return noticeList;
};

const Notice = () => {
  return (
    <NoticeContainer>
      <section>
        <p>공지사항</p>
        <div className='writeTh'>
          <div className='hr'>
            <div className='title'>제목</div>
            <div className='date'>날짜</div>
          </div>
          <WriteList />
        </div>
        <div className='writing'>
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
