import React, { useEffect, useState } from 'react';
import { getShopList } from '../../api/constant';
import CafeListContainer from '../styled/CafeListContainer';
import HashTag from '../styled/HashTag';

const CafeList = () => {
  const [cafe, setCafe] = useState([{ img: '', name: '', add: '', shop_call: '' }]);
  const imgPath = `img/cafeImg/`;

  useEffect(() => {
    getShopList().then(res => {
      if (res) {
        setCafe(
          res.map(v => {
            console.log(v);
            return {
              img: imgPath.concat(v.head_image.substr(39, v.head_image.length - 1)),
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
    <CafeListContainer>
      {console.log(cafe.img)}

      <section>
        <div className='box'>
          <img src={cafe.img} alt='cafe_img' />
          <div className='subBox'>
            <div className='cafeName'>{cafe.name}</div>
            <div className='cafeAdd'>{cafe.add}</div>
            <div className='cafeCall'>{cafe.call}</div>
            <HashTag />
          </div>
        </div>
      </section>
    </CafeListContainer>
  ));

  return cafeList;
};

export default CafeList;
