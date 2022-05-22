import styled from 'styled-components';

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

const CoffeeTISelect = () => {
  return (
    <Select>
      <div className='box'>
        <div className='weak'>약</div>
        <div className='check'>
          <label>
            <input type={'radio'} name='check' value={1} />
            <input type={'radio'} name='check' value={2} />
            <input type={'radio'} name='check' value={3} />
            <input type={'radio'} name='check' value={4} />
            <input type={'radio'} name='check' value={5} />
          </label>
        </div>

        <div className='strong'>강</div>
      </div>
    </Select>
  );
};

export default CoffeeTISelect;
