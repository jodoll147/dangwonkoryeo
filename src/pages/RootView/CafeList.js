import React, { useEffect, useState } from 'react';
import { getShopList } from '../../api/constant';
import CafeListContainer from '../styled/CafeListContainer';
import HashTag from '../styled/HashTag';

const CafeList = () => {
  const [cafe, setCafe] = useState([{ img: '', name: '', add: '' }]);
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
      {console.log(cafe.img)}

      <section>
        <div className='box'>
          <img src={cafe.img} alt='cafe_img' />
          <div className='subBox'>
            <div className='cafeName'>{cafe.name}</div>
            <div className='cafeAdd'>{cafe.add}</div>
            <HashTag />
          </div>
        </div>
      </section>
    </CafeListContainer>
  ));

  return cafeList;
};

export default CafeList;
