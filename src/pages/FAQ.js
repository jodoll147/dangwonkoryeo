import React from 'react';
import { Link } from 'react-router-dom';
import NoticeContainer from './styled/NoticeContainer';

const FAQ = () => {
  return (
    <NoticeContainer>
      <section>
        <div className='notice_title'>
          <p>고객센터(1:1상담)</p>
        </div>

        <div className='write_table'>
          <table>
            <tr>
              <td>
                <p>제목</p>
              </td>
              <td>
                <p>날짜</p>
              </td>
            </tr>
          </table>
        </div>
        <div className='writing'>
          <Link to='/notice/notice_write' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
            글쓰기
          </Link>
        </div>
      </section>
    </NoticeContainer>
  );
};

export default FAQ;
