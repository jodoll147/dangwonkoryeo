import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPost } from '../../api/constant';
import NoticeContainer from '../styled/NoticeContainer';
import { format } from 'date-fns';

const NoticeContent = props => {
  const [searchParams] = useSearchParams();
  const [noticeContent, setNoticeContent] = useState({ title: '', date: '', content: '' });
  const id = +searchParams.get('id');

  useEffect(() => {
    getPost()
      .then(res => {
        if (res) {
          const targetNotice = res.find(v => {
            return v.id == id;
          });
          if (targetNotice) {
            setNoticeContent({
              id: targetNotice.id,
              title: targetNotice.title,
              date: targetNotice.updated_at,
              content: targetNotice.content,
            });
          }
        }
      })
      .catch();
  }, []);

  return (
    <NoticeContainer>
      <section>
        <div className='contentBox'>
          <p>공지사항</p>
          <div className='titleBox'>
            <div className='title'>{noticeContent.title}</div>
            <div className='date'>
              {format(new Date(noticeContent.date || 0), 'yyyy년 MM월 dd일')}
            </div>
          </div>
          <div className='content'>
            <pre>{noticeContent.content}</pre>
          </div>
        </div>
      </section>
    </NoticeContainer>
  );
};

export default NoticeContent;
