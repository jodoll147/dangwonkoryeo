import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCenterContainer from './styled/ServiceCenterContainer';

const result = () => {
  <div>
    <p>답변완료</p>
  </div>;
};

const ServiceCenter = () => {
  return (
    <ServiceCenterContainer>
      <section>
        <div className='notice_title'>
          <p>고객센터(1:1상담)</p>
        </div>
        <div className='inquiry'>
          <p>문의글</p>
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
              <td>
                <p>답변</p>
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
    </ServiceCenterContainer>
  );
};

export default ServiceCenter;
