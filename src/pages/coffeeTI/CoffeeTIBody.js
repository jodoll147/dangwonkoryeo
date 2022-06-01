import { Link } from 'react-router-dom';
import { useState } from 'react';
import CoffeeTIContainer from '../styled/CoffeeTIContainer';
import CoffeeTISelect from './CoffeeTISelect';
import styled from 'styled-components';

const Flavour = styled.div`
  position: relative;
  display: line;
  top: 36px;
  margin-bottom: 20px;
  width: 100px;
  height: 50px;
  background: rgba(166, 140, 118, 0.7);
  border-radius: 10px;
  font-family: 'Cafe24';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 50px;
  color: #f2f2f2;
  cursor: pointer;
`;

const Select = styled.div`
  .box {
    position: relative;
    display: flex;
    margin-top: 100px;
    margin-left: 190px;
    .weak {
      position: relative;
      margin-top: 10px;
      font-family: 'NanumGothic';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: black;
    }

    label {
      position: relative;
      input {
        position: relative;
        margin-left: 38px;
        margin-right: 38px;
        width: 30px;
        height: 30px;
        border: 3px solid black;
      }
    }

    .strong {
      position: relative;
      margin-top: 10px;
      font-family: 'NanumGothic';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: black;
    }
  }
`;

const CoffeeTIBody = () => {
  const [hover, setHover] = useState('#CCD9D9');
  const [click, setClick] = useState(null);
  const checkedList = ['견과류', '과일', '초콜릿', '꽃']; //
  const [selectValue, setSelectValue] = useState(null);
  const readioValue = [1, 2, 3, 4, 5]; // radio 값
  const [value, setValue] = useState({ body: null, sour: null, flavour: '' }); //선택값을 저장하는 state
  const [page, setPage] = useState(1);

  return page === 1 ? (
    <CoffeeTIContainer>
      <section>
        <p>coffeeTI</p>
        <div className='bodySour'>
          <div className='que'>
            <p>선호하는 바디감(쓴맛)의 정도를 선택해주세요.</p>
          </div>
          <Select>
            <div className='box'>
              <div className='weak'>약</div>
              <div className='check'>
                <label onChange={e => setSelectValue(e.target.value)}>
                  {readioValue.map(v => (
                    <input type={'radio'} name='check' value={v} />
                  ))}
                </label>
              </div>
              <div className='strong'>강</div>
            </div>
            {console.log(selectValue)}
          </Select>
          <div
            className='nextButton'
            style={{ background: hover }}
            onMouseOver={() => setHover('#4EA6A6')}
            onMouseLeave={() => setHover('#CCD9D9')}
            onClick={() => {
              setPage(2);
            }}
          >
            다음
          </div>
        </div>
      </section>
    </CoffeeTIContainer>
  ) : page === 2 ? (
    <CoffeeTIContainer>
      <section>
        <p>coffeeTI</p>
        <div className='que'>
          <p>선호하는 산미(신맛)의 정도를 선택해주세요.</p>
        </div>
        <Select>
          <div className='box'>
            <div className='weak'>약</div>
            <div className='check'>
              <label onChange={e => setSelectValue(e.target.value)}>
                {readioValue.map(v => (
                  <input type={'radio'} name='check' value={v} />
                ))}
              </label>
            </div>
            <div className='strong'>강</div>
          </div>
          {console.log(selectValue)}
        </Select>
        <div
          className='nextButton'
          style={{ background: hover }}
          onMouseOver={() => setHover('#4EA6A6')}
          onMouseLeave={() => setHover('#CCD9D9')}
          onClick={() => {
            setPage(3);
          }}
        >
          다음
        </div>
      </section>
    </CoffeeTIContainer>
  ) : page === 3 ? (
    <CoffeeTIContainer>
      <section>
        <p>coffeeTI</p>
        <div className='que'>
          <p>원하는 향을 한 가지 선택해주세요.</p>
        </div>
        <div className='flavour'>
          {checkedList.map((flavours, i) => (
            <Flavour
              style={{
                background: click === i ? '#594031' : 'rgba(166, 140, 118, 0.7)',
              }}
              onClick={flavours => flavours.target.value}
            >
              {flavours}
            </Flavour>
          ))}
        </div>
        <Link
          className='nextButton'
          style={{ background: hover, textDecoration: 'none', color: '#F2F2F2' }}
          onMouseOver={() => setHover('#4EA6A6')}
          onMouseLeave={() => setHover('#CCD9D9')}
          to='/coffeeTI/result'
        >
          다음
        </Link>
      </section>
    </CoffeeTIContainer>
  ) : (
    <></>
  );
};

export default CoffeeTIBody;
