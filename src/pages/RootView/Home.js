import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import HomeContainer from '../styled/HomeContainer';

// 가장 먼저 보여지는 페이지
const Home = () => {
  const [isMouseOver, setMouseOver] = useState(false);
  const [isMouseLive, setMouseLeave] = useState(false);

  /*
      const [who, setWho] = useState("모이야이야");

  async function 구리구리() {
      //                          백엔드 서버 주소 + 내가 원하는 리소스
      const result = await fetch("https://api.trendition.kr/graphql/", {
          method: "POST", // 사전 약속
          headers: {
              "Content-Type": "application/json",
              // 내가 누군지 알려주기(서버한테)
              "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJpYXQiOjE2NTEwNjQwODUsImV4cCI6MTY1MTY2ODg4NX0.4H56mkrhJEMb2qkFM2Q9ugzabdJwD67MWBo0Ovbvcys"
          },
          //  method : GET 아닌거면 (혹은 뭐 약속에 따라) 요청에 필요한 상세 데이터
          // 내 정보 수정 : 수정할 정보 
          body: JSON.stringify({ query: "query { selectUsersByAdmin(take:5){id loginId} }" })
      }).then(res => res.json())
      console.log(result)
      setWho(JSON.stringify(result.data))
  }
  */

  return (
    <HomeContainer>
      <header>
        <section align='center'>
          <div className='main'>
            <div>
              {/*
            {who}
            <button onClick={구리구리}>누군지 알아보기</button>
                */}
            </div>
            <div className='login'>
              <Link to='/login' style={{ textDecoration: 'none', color: '#4EA6A6' }}>
                login
              </Link>
            </div>
            <div className='join'>
              <Link to='/join' style={{ textDecoration: 'none', color: '#4EA6A6' }}>
                join
              </Link>
            </div>
            <div className='home'>
              <Link to='/' style={{ textDecoration: 'none', color: '#4EA6A6' }}>
                당원커여
              </Link>
            </div>
            <div className='search_box'>
              <input type={'text'} />
            </div>
            <div className='search_btn'>
              <input type={'button'} value={'검색'} />
            </div>
            <ul>
              <li>
                <Link to='/intro' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                  당원커여 소개
                </Link>
              </li>
              <li>
                <Link to='/coffeeTI' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                  커피티아이
                </Link>
              </li>
              <li>
                <div
                  className='notice'
                  onMouseOver={() => {
                    setMouseOver(true);
                  }}
                  onMouseLeave={() => {
                    setMouseOver(false);
                  }}
                >
                  <Link to='/notice' style={{ textDecoration: 'none', color: '#F2F2F2' }}>
                    공지사항
                  </Link>
                  {isMouseOver && (
                    <div className='sub'>
                      <ul>
                        <li>
                          <Link to='/notice' style={{ textDecoration: 'none', color: '#594031' }}>
                            공지사항
                          </Link>
                        </li>
                        <li>
                          <Link to='/FAQ' style={{ textDecoration: 'none', color: '#594031' }}>
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/service_center'
                            style={{ textDecoration: 'none', color: '#594031' }}
                          >
                            고객센터
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </section>
      </header>
      <main>
        <Outlet />
      </main>
    </HomeContainer>
  );
};

export default Home;
