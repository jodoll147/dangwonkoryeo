import React, { useEffect, useState, useRef } from 'react';
import { getShopList, getAllFavor, getUserFavor, getUserInfo, postLike } from '../../api/constant';
import CafeListContainer from '../styled/CafeListContainer';
import HashTag from '../tag/HashTag';
import fullHeart from '../img/fullHeart.png';
import heart from '../img/heart.png';
import cafeImg from '../img/cafeImg.png';

const Cafe = props => {
  const { cafe, favorCafe, userFavorCafe, info, loc, dis } = props;
  const [like, setLike] = useState(!!userFavorCafe.find(v => v == cafe.id));
  const isLoading = useRef(false);

  return (
    <CafeListContainer key={cafe.id}>
      <section>
        <div className='box'>
          <img src={cafe.img} alt='cafe_img' />
          <div className='subBox'>
            <div className='cafeNameBox'>
              <div className='cafeName'>{cafe.name}</div>
              <div className='heart'>
                <img
                  src={like ? fullHeart : heart}
                  alt='heart'
                  key={cafe.id}
                  onClick={() => {
                    if (isLoading.current) {
                      alert('처리중입니다.');
                      return;
                    }
                    isLoading.current = true;

                    const nextLike = !like;

                    postLike(info.user_id, cafe.id, nextLike) // API 호출
                      .then(res => {
                        setLike(p => !p);
                      })
                      .finally(() => {
                        isLoading.current = false;
                      });
                  }}
                />
                <p>
                  {favorCafe.filter(f => f.shop === cafe.id && f.user !== info?.user_id).length +
                    +like}
                </p>
              </div>
            </div>
            <div className='cafeAdd'>{cafe.add}</div>
            <div className='cafeCall'>
              <div className='title'>call</div>
              <div className='call'>{cafe.call}</div>
            </div>
            <div className='cafeLoc'>
              <div className='title'>랜드마크</div>
              <div className='loc'>
                {loc} {dis}km
              </div>
            </div>
            <HashTag value={cafe.id} />
          </div>
        </div>
      </section>
    </CafeListContainer>
  );
};

const CafeList = props => {
  const filterIds = props.filterIds;
  const [cafe, setCafe] = useState([
    { id: '', img: '', name: '', add: '', shop_call: '', favor: 0, loc: '' },
  ]);
  const [favorCafe, setFavorCafe] = useState([{ user: '', shop: '' }]);
  const [heartImg, setHeartImg] = useState(heart);
  const [userFavorCafe, setUserFavorCafe] = useState(['']); // 유저가 좋아하는 카페목록

  const info = getUserInfo();
  useEffect(() => {
    getShopList().then(res => {
      if (res) {
        setCafe(
          res
            .filter(v => (filterIds ? filterIds.includes(v.id) : true))
            .map(v => {
              return {
                id: v.id,
                img: v.head_image
                  ? v.head_image.replace(
                      /^http:\/\/((localhost)|(127.0.0.1)):8000\/media\//,
                      'img/',
                    )
                  : cafeImg,
                name: v.shop_name,
                add: v.shop_add,
                call: v.shop_call,
                loc: v.shop_loc,
              };
            }),
        );
      }
    });
    getAllFavor().then(res => {
      if (res) {
        setFavorCafe(
          res.map(v => ({
            shop: v.shop,
            user: v.user,
          })),
        );
      }
    });
    info?.user_id &&
      getUserFavor(info.user_id).then(res => {
        if (res) {
          setUserFavorCafe(
            res.map(v => {
              return v.shop;
            }),
          );
        }
      });
  }, []);

  const cafeList = cafe.map(cafe => {
    const [location, distance] = cafe.loc?.replace(/[\[\]']/g, '').split(',') ?? ['', ''];
    return (
      <Cafe
        key={cafe.id}
        cafe={cafe}
        favorCafe={favorCafe}
        userFavorCafe={userFavorCafe}
        info={info}
        loc={location}
        dis={distance}
      />
    );
  });

  return cafeList;
};

export default CafeList;
