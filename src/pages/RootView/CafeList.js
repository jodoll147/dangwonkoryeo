import React, { useEffect, useState } from 'react';
import { getShopList } from '../../api/constant';
import cafeImg from '../img/cafe_img.png';
import CafeListContainer from '../styled/CafeListContainer';
import HashTag from '../styled/HashTag';

const CafeList = () => {
  const [cafe, setCafe] = useState([{ img: '', name: '' }]);

  useEffect(() => {
    getShopList().then(res => {
      if (res) {
        setCafe(
          res.map(v => {
            return {
              img: cafeImg,
              name: v.shop_name,
            };
          }),
        );

        // const aaaa = {
        //   shop_num: 1,
        //   shop_name: 'sample',
        //   shop_license: 1,
        //   shop_call: '01026461434',
        //   shop_exp: '',
        //   shop_add: 'sample',
        //   shop_loc: '',
        //   user_num: 1,
        //   tags: [],
        // };
      }
    });
  }, []);

  getShopList();

  const cafeList = cafe.map(cafe => (
    <CafeListContainer>
      <section>
        <div className='box'>
          <img src={cafe.img} alt='cafe_img' />
          <div className='subBox'>
            <div className='cafeName'>{cafe.name}</div>
            <HashTag />
          </div>
        </div>
      </section>
    </CafeListContainer>
  ));

  return cafeList;
};

export default CafeList;
