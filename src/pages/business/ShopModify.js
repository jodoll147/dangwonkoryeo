import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ShopModifyContainer from '../styled/ShopModifyContainer';
import ModalContainer from '../styled/ModalContainer';
import close from '../img/close.png';
import closeBlack from '../img/closeBlack.png';
import shopImg from '../img/shopImg.png';
import { getShopList, getShopTag, postShopModify } from '../../api/constant';

const HashTagDiv = styled.div`
  position: relative;
  margin-right: 10px;
  .hashBox {
    position: relative;
    padding-right: 10px;
    padding-left: 10px;
    height: 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    background: rgba(78, 166, 166, 0.7);
    border-radius: 5px;
    color: #f2f2f2;
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

const flavours = ['견과류', '초콜릿', '꽃', '과일'];

const HashTag = props => {
  const hashAddList = props.items.map((hash, i) => {
    return (
      <HashTagDiv onClick={() => props.onRemove(i)}>
        <div className='hashBox'>{hash.name}</div>
        {/* <div className='hashBox'>{JSON.stringify(hash)}</div> */}
      </HashTagDiv>
    );
  });

  return hashAddList;
};

const RadioBox = props => {
  const name = props.name;
  const value = props.value;
  const callback = props.onChange;
  return (
    <RadioContainer>
      <div className='radioBox'>
        <p className='weak'>약</p>
        <label
          onChange={e => {
            callback({ name: e.target.name, value: e.target.value });
            // console.log('이름 : ', e.target.name);
            // console.log('값 : ', e.target.value, typeof e.target.value);
          }}
        >
          <input type={'radio'} name={name} value={1} />
          <input type={'radio'} name={name} value={2} />
          <input type={'radio'} name={name} defaultChecked value={3} />
          <input type={'radio'} name={name} value={4} />
          <input type={'radio'} name={name} value={5} />
        </label>
        <p className='strong'>강</p>
      </div>
    </RadioContainer>
  );
};

const Modal = props => {
  const setHashTags = props.setHashTags;
  const setOnHashClick = props.setOnHashClick;
  const selectTypeList = ['원두', '기타'];
  const [type, setType] = useState('원두'); // 원두인지 아닌지
  const [name, setName] = useState('');
  const [body, setBody] = useState('3');
  const [acid, setAcid] = useState('3');
  const [flavour, setFlavour] = useState(flavours[0]);

  const onClick = () => {
    // hashTags.map(p => )
    if (name?.length === 0) {
      alert('이름을 입력하세요.');
      return;
    }

    if (type === '원두') {
      setHashTags(p => p.concat({ name, isBean: true, body, acid, flavour })); // 산미 바디감 등
    } else {
      setHashTags(p => p.concat({ name, isBean: false }));
    }
    setOnHashClick(false);
  };

  return (
    <ModalContainer>
      <section>
        <div className='top'>
          <div className='hashTitle'>해시태그 등록</div>
          <img src={closeBlack} alt={'close'} onClick={() => setOnHashClick(false)} />
        </div>
        <div className='hashBox'>
          <div className='nameBox'>
            <p>이름</p>
            <input type={'text'} onChange={e => setName(e.target.value)} />
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
                  <RadioBox
                    value={body}
                    name='body'
                    onChange={({ name, value }) => {
                      setBody(value);
                    }}
                  />
                </div>
              </div>
              <div className='sourBox'>
                <p className='sourTitle'>산미</p>
                <div className='radioBox'>
                  <RadioBox
                    value={acid}
                    name='acid'
                    onChange={({ name, value }) => {
                      setAcid(value);
                    }}
                  />
                </div>
              </div>
              <div className='flavourBox'>
                <p>대표 향 (한 가지만 선택)</p>
                <div className='flavour'>
                  {flavours.map(flavour => (
                    <Button
                      onClick={() => {
                        setFlavour(flavour);
                      }}
                    >
                      {flavour}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className='modifyBtn'>
            <input type={'button'} value='추가' onClick={onClick} />
          </div>
        </div>
      </section>
    </ModalContainer>
  );
};

const ShopModify = () => {
  const [textValue, setTextValue] = useState('');
  const [searchParams] = useSearchParams();
  const [shopValue, setShopValue] = useState({
    shopId: '',
    shopLicense: '',
    shopName: '',
    shopInfo: '',
    shopCal: ['', '', ''],
    shopAddr: '',
  });
  const [hashTags, setHashTags] = useState([
    { id: null, isBean: null, name: '', body: '', acid: '', flavour: '' },
  ]);
  const [onHashClick, setOnHashClick] = useState(false);
  const [fileImage, setFileImage] = useState(shopImg);
  const [user, setUser] = useState(); // 결과값

  const id = +searchParams.get('id');
  const navigate = useNavigate();

  useEffect(() => {
    getShopList().then(res => {
      if (res) {
        const myShop = res.find(v => v.id == id);
        if (myShop) {
          const phoneMatch = myShop.shop_call.match(
            /^((01[016789]{1}|02|0[3-8]{1}[0-9]{1})[.-]?([0-9]{3,4})|((15|16|18)[0-9]{2}))[.-]?([0-9]{4})$/,
          );
          const shopCal = [phoneMatch[2] ?? '', phoneMatch[3] ?? '', phoneMatch[6] ?? ''];
          setShopValue({
            shopId: myShop.id,
            shopLicense: myShop.shop_license,
            shopName: myShop.shop_name,
            shopInfo: myShop.shop_exp,
            shopCal,
            shopAddr: myShop.shop_add,
          });
        }
      }
    });
    getShopTag(id).then(res => {
      if (res) {
        setHashTags(res);
      }
    });
  }, []);

  const hashClick = () => {
    setOnHashClick(true);
  };

  const onRemove = useCallback(
    tagIndex => {
      setHashTags(hashTags.filter((_, i) => i !== tagIndex));
    },
    [hashTags],
  );

  // 이미지 파일 저장
  const saveFileImage = e => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  console.log(hashTags);

  return (
    <ShopModifyContainer>
      <section>
        <div className='title'>Business Page</div>
        <div className='shopModify'>가게수정</div>
        <div className='shopModifyBox'>
          <div className='shopNameBox'>
            <p>가게명</p>
            {shopValue.shopName}
          </div>
          <div className='shopInfo'>
            <p>설명</p>
            <textarea
              value={shopValue.shopInfo}
              onChange={e =>
                setShopValue(p => {
                  p.shopInfo = e.target.value;
                  return { ...p };
                })
              }
              maxLength='300'
            />
            {console.log(shopValue.shopInfo)}
          </div>
          <div className='info'>300자 이내로 작성해주세요.</div>
          <div className='phoneBox'>
            <p>전화번호</p>
            <input
              type={'text'}
              maxLength='3'
              value={shopValue.shopCal[0]}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setShopValue(p => {
                  p.shopCal[0] = value;
                  return { ...p };
                });
              }}
            />
            <input
              type={'text'}
              maxLength='4'
              value={shopValue.shopCal[1]}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setShopValue(p => {
                  p.shopCal[1] = value;
                  return [...p];
                });
              }}
            />
            <input
              type={'text'}
              maxLength='4'
              value={shopValue.shopCal[2]}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setShopValue(p => {
                  p.shopCal[2] = value;
                  return [...p];
                });
              }}
            />
          </div>
          <div className='locationBox'>
            <p>가게위치</p>
            <textarea
              value={shopValue.shopAddr}
              onChange={e =>
                setShopValue(p => {
                  p.shopAddr = e.target.value;
                  return { ...p };
                })
              }
              maxLength='50'
            />
          </div>
          <div className='hash'>
            <p>해시태그</p>
            <HashTag items={hashTags} onRemove={onRemove} />
            <input type={'button'} className='add' value={'추가'} onClick={hashClick} />
          </div>
          <div className='locationBox' />
          <div className='locationBox' />
          <div className='locationBox' />
          <div className='locationBox' />
          <div className='locationBox' />
          <div className='imgBox'>
            <p>이미지</p>
            <img alt='sample' src={fileImage} />
            <input type={'file'} accept={'image/*'} onChange={saveFileImage} />
          </div>
          <div
            className='imgAdd'
            onClick={e => {
              postShopModify(
                shopValue.shopId,
                shopValue.shopCal,
                shopValue.shopInfo,
                shopValue.shopAddr,
                shopValue.shopImg,
              )
                .then(res => {
                  alert('수정이 완료되었습니다.', e);
                  navigate('/business');
                })
                .catch(e => {
                  alert('오류가 발생하였습니다.', e);
                });
            }}
          >
            수정
          </div>
        </div>
        {onHashClick ? <Modal setHashTags={setHashTags} setOnHashClick={setOnHashClick} /> : <></>}
      </section>
    </ShopModifyContainer>
  );
};

export default ShopModify;
