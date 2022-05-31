import React, { useEffect, useState } from 'react';
import { getShopList } from '../../api/constant';
import CafeListContainer from '../styled/CafeListContainer';
import HashTag from '../tag/HashTag';
import fullHeart from '../img/fullHeart.png';
import heart from '../img/heart.png';

const CafeList = () => {
  const [cafe, setCafe] = useState([{ id: '', img: '', name: '', add: '', shop_call: '' }]);
  const [onClick, setonClick] = useState(false);
  const [heartImg, setHeartImg] = useState(heart);

  const setHeart = () => {
    onClick ? setonClick(false) : setonClick(true);
    onClick ? setHeartImg(fullHeart) : setHeartImg(heart);
  };

  useEffect(() => {
    getShopList().then(res => {
      if (res) {
        setCafe(
          res.map(v => {
            return {
              id: v.id,
              img: HashTag, //imgPath.concat(v.head_image.substr(28, v.head_image.length - 1)),
              name: v.shop_name,
              add: v.shop_add,
              call: v.shop_call,
            };
          }),
        );
      }
    });
  }, []);

  getShopList();

  const cafeList = cafe.map(cafe => (
    <CafeListContainer key={cafe.id}>
      <section>
        <div className='box'>
          <img src={cafe.img} alt='cafe_img' />
          <div className='subBox'>
            <div className='cafeNameBox'>
              <div className='cafeName'>{cafe.name}</div>
              <div className='heart'>
                <img src={heartImg} alt='heart' key={cafe.id} onClick={() => setHeart()} />
                <p></p>
              </div>
            </div>
            <div className='cafeAdd'>{cafe.add}</div>
            <div className='cafeCall'>{cafe.call}</div>
            <HashTag value={cafe.id} />
          </div>
        </div>
      </section>
    </CafeListContainer>
  ));

  return cafeList;
};

export default CafeList;
