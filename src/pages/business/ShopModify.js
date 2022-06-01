import React, { useCallback, useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ShopModifyContainer from '../styled/ShopModifyContainer';
import ModalContainer from '../styled/ModalContainer';
import close from '../img/close.png';
import closeBlack from '../img/closeBlack.png';
import shopImg from '../img/shopImg.png';
import { getShopList } from '../../api/constant';

const HashTagDiv = styled.div`
position: relative;
margin-right: 10px;
  .hash {
    position: relative;
    padding-left: 5px;
    height: 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    background: rgba(78, 166, 166, 0.7);
    border-radius: 5px;
    color: #f2f2f2;
    img {
      position: relative;
      padding-top: 10px;
      padding-left: 10px;
      padding-right: 5px;
      width: 10px;
      height: 10px;
      cursor: pointer;
    }
`;

const Button = styled.div`
  position: relative;
  margin-right: 5px;
  margin-bottom: 10px;
  font-family: 'Cafe24Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  color: #f2f2f2;
  width: 60px;
  height: 30px;
  background: #4ea6a6;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;

const RadioContainer = styled.div`
  .radioBox {
    position: relative;
    display: flex;
    align-items: baseline;
    p {
      position: relative;
    }
    label {
      position: relative;
    }
  }
`;

const ShopModify = () => {
  const [textValue, setTextValue] = useState('');
  const [searchParams] = useSearchParams();
  const [shopName, setShopName] = useState(''); // 가게 이름
  const [shopInfo, setShopInfo] = useState(''); // 가게 설명
  const [shopCel, setShopCel] = useState(['', '', '']); // 가게 번호
  const [shopAddr, setShopAddr] = useState(''); // 가게 주소
  const [hashName, setHashName] = useState(''); // 해시태그 이름
  const [hashTags, setHashTags] = useState([]);
  const [onHashClick, setOnHashClick] = useState(false);
  const flavours = ['견과류', '초콜릿', '꽃', '과일'];
  const flavourList = flavours.map(flavour => <Button>{flavour}</Button>);
  const [fileImage, setFileImage] = useState(shopImg);
  const [user, setUser] = useState(); // 결과값

  const id = +searchParams.get('id');

  useEffect(() => {
    getShopList().then(res => {
      if (res) {
        const myShop = res.find(v => v.id == id);
        if (myShop) {
          setShopName(myShop.shop_name);
        }
      }
    });
  }, []);

  const hashClick = () => {
    setOnHashClick(true);
  };

  const closeClick = () => {
    setOnHashClick(false);
  };

  const onRemove = useCallback(
    tag => {
      setHashTags(hashTags.filter(t => t !== tag));
    },
    [hashTags],
  );

  // 이미지 파일 저장
  const saveFileImage = e => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  console.log(hashTags);

  const HashTag = () => {
    const hashAddList = hashTags.map(hash => (
      <HashTagDiv onClick={onRemove}>
        <div className='hash'>
          {hash}
          <img src={close} alt='x' />
        </div>
      </HashTagDiv>
    ));

    return hashAddList;
  };

  const RadioBox = props => {
    const res = props.value;
    return (
      <RadioContainer>
        <div className='radioBox'>
          <p className='weak'>약</p>
          <label>
            <input type={'radio'} name={res} value={2} />
            <input type={'radio'} name={res} value={1} />
            <input type={'radio'} name={res} value={3} />
            <input type={'radio'} name={res} value={4} />
            <input type={'radio'} name={res} value={5} />
          </label>
          <p className='strong'>강</p>
        </div>
      </RadioContainer>
    );
  };

  const Modal = () => {
    const selectTypeList = ['원두', '기타'];
    const [type, setType] = useState(''); // 원두인지 아닌지
    const [value, setValue] = useState('');

    const onClick = () => {
      setHashTags(p => p.concat(value));
      setOnHashClick(false);
    };

    return (
      <ModalContainer>
        <section>
          <div className='top'>
            <div className='hashTitle'>해시태그 등록</div>
            <img src={closeBlack} alt={'close'} onClick={closeClick} />
          </div>
          <div className='hashBox'>
            <div className='nameBox'>
              <p>이름</p>
              <input type={'text'} onChange={e => setValue(e.target.value)} />
              <select onChange={e => setType(e.target.value)} value={type}>
                {selectTypeList.map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {type === '원두' ? (
              <div className='coffeeSelectBox'>
                <div className='bodyBox'>
                  <p className='bodyTitle'>바디감</p>
                  <div className='radioBox'>
                    <RadioBox value='body' />
                  </div>
                </div>
                <div className='sourBox'>
                  <p className='sourTitle'>산미</p>
                  <div className='radioBox'>
                    <RadioBox value='sour' />
                  </div>
                </div>
                <div className='flavourBox'>
                  <p>대표 향 (한 가지만 선택)</p>
                  <div className='flavour'>{flavourList}</div>
                </div>
              </div>
            ) : (
              ''
            )}
            <div className='modifyBtn'>
              <input type={'button'} value='추가' onClick={onClick} />
            </div>
          </div>
        </section>
      </ModalContainer>
    );
  };

  return (
    <ShopModifyContainer>
      <section>
        <div className='title'>Business Page</div>
        <div className='shopModify'>가게수정</div>
        <div className='shopModifyBox'>
          <div className='shopNameBox'>
            <p>가게명</p>
            <input type={'text'} value={shopName} onChange={e => setShopName(e.target.value)} />
          </div>
          <div className='shopInfo'>
            <p>설명</p>
            <textarea onChange={e => setShopInfo(e.target.value)} maxLength='300' />
          </div>
          <div className='info'>300자 이내로 작성해주세요.</div>
          <div className='phoneBox'>
            <p>전화번호</p>
            <input
              type={'text'}
              maxLength='3'
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setShopCel(p => {
                  p[0] = value;
                  return [...p];
                });
              }}
            />
            <input
              type={'text'}
              maxLength='4'
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setShopCel(p => {
                  p[0] = value;
                  return [...p];
                });
              }}
            />
            <input
              type={'text'}
              maxLength='4'
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setShopCel(p => {
                  p[0] = value;
                  return [...p];
                });
              }}
            />
          </div>
          <div className='locationBox'>
            <p>가게위치</p>
            <textarea onChange={e => setShopAddr(e.target.value)} maxLength='50' />
          </div>
          <div className='hash'>
            <p>해시태그</p>
            <HashTag items={hashTags} />
            <input type={'button'} className='add' value={'추가'} onClick={hashClick} />
          </div>
          <div className='imgBox'>
            <p>이미지</p>
            <img alt='sample' src={fileImage} />
            <input type={'file'} accept={'image/*'} onChange={saveFileImage} />
          </div>
          <div className='imgAdd'>수정</div>
        </div>
        {onHashClick ? <Modal /> : ''}
      </section>
    </ShopModifyContainer>
  );
};

export default ShopModify;
