import React, { useEffect, useState } from 'react';
import { getShopList, getAllFavor, getUserInfo } from '../../api/constant';
import CafeListContainer from '../styled/CafeListContainer';
import HashTag from '../tag/HashTag';
import fullHeart from '../img/fullHeart.png';
import heart from '../img/heart.png';
import cafeImg from '../img/cafeImg.png';

const CafeList = () => {
  const [cafe, setCafe] = useState([
    { id: '', img: '', name: '', add: '', shop_call: '', favor: 0 },
  ]);
  const [favorCafe, setFavorCafe] = useState([{ user: '', shop: '' }]);
  const [onClickIndex, setOnClickIndex] = useState(null);
  const [onClickHeart, setOnClickHeart] = useState('');
  const [heartImg, setHeartImg] = useState(heart);

  // cafe.id heart 클릭시, 로그인 O하면 하트 올라가고 아니면 로그인 하라는 altr 화면 출력
  const mouseClickEvent = id => {
    if (localStorage.getItem('token')) {
    }
  };

  useEffect(() => {
    getShopList().then(res => {
      if (res) {
        console.log(res);
        setCafe(
          res.map(v => {
            return {
              id: v.id,
              img: v.head_image
                ? v.head_image.replace(/^http:\/\/((localhost)|(127.0.0.1)):8000\/media\//, 'img/')
                : cafeImg,
              name: v.shop_name,
              add: v.shop_add,
              call: v.shop_call,
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
  }, []);

  const cafeList = cafe.map(cafe => {
    return (
      <CafeListContainer key={cafe.id}>
        <section>
          <div className='box'>
            <img src={cafe.img} alt='cafe_img' />
            <div className='subBox'>
              <div className='cafeNameBox'>
                <div className='cafeName'>{cafe.name}</div>
                <div className='heart'>
                  <img src={heartImg} alt='heart' onClick={() => mouseClickEvent(cafe.id)} />
                  <p>{favorCafe.filter(f => f.shop === cafe.id).length}</p>
                </div>
              </div>
              <div className='cafeAdd'>{cafe.add}</div>
              <div className='cafeCall'>{cafe.call}</div>
              <HashTag value={cafe.id} />
            </div>
          </div>
        </section>
      </CafeListContainer>
    );
  });

  return cafeList;
};

export default CafeList;
