import React, { useEffect, useState } from 'react';
import { getShopList } from '../../api/constant';
import { getShopFavor } from '../../api/constant';
import CafeListContainer from '../styled/CafeListContainer';
import HashTag from '../tag/HashTag';
import fullHeart from '../img/fullHeart.png';
import heart from '../img/heart.png';
import cafeImg from '../img/cafeImg.png';

const CafeList = () => {
  const [cafe, setCafe] = useState([
    { id: '', img: '', name: '', add: '', shop_call: '', favor: [] },
  ]);
  const [favorCafe, setFavorCafe] = useState([{ user: '', shop: '' }]);
  const [favor, setFavor] = useState([{ shop: '', user: '' }]);
  const [onClickIndex, setOnClickIndex] = useState(null);
  const [heartImg, setHeartImg] = useState(heart);

  const mouseClickEvent = id => {
    setOnClickIndex(id);
  };

  useEffect(() => {
    getShopList().then(res => {
      if (res) {
        setCafe(
          res.map(v => {
            const cafeId = v.id;
            //console.log(cafeId);
            //            console.log(toString(v.head_image.substr(28, v.head_image.length - 1)));
            return {
              id: cafeId,
              img: 'shopImg/2022/06/01database.png', //v.head_image === '' ? cafeImg : v.head_image.substr(28, v.head_image.length - 1),
              name: v.shop_name,
              add: v.shop_add,
              call: v.shop_call,
              favor: getShopFavor(cafeId).then(res2 => {
                if (res2) {
                  res2.map(e => {
                    return e.user;
                  });
                }
              }),
            };
          }),
        );
      }
    });
  }, []);

  getShopList();
  console.log(cafe.map(f => f.favor));

  const cafeList = cafe.map(cafe => (
    <CafeListContainer key={cafe.id}>
      <section>
        <div className='box'>
          <img src={cafe.img} alt='cafe_img' />
          <div className='subBox'>
            <div className='cafeNameBox'>
              <div className='cafeName'>{cafe.name}</div>
              <div className='heart'>
                <img src={heartImg} alt='heart' />
                <p>{console.log(cafe.favor.length)}</p>
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
