import React from 'react';
import { Link } from 'react-router-dom';
import NoticeContainer from './styled/NoticeContainer';

const Notice = () => {
  const notices = ['', '', '', '', '', '', ''];
  const noticeList = notices.map(notice => <div className='noticeList'>{notice}</div>);

  return (
    <NoticeContainer>
      <section>
        <p>공지사항</p>
        <div className='write_th'>
          <p className='title'>제목</p>
          <p className='date'>날짜</p>
        </div>
        {noticeList}
        <div className='writing'>
          <Link to='/notice/notice_write' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
            글쓰기
          </Link>
        </div>
      </section>
    </NoticeContainer>
  );
};

export default Notice;
