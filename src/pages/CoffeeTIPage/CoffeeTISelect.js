import styled from 'styled-components';

const Select = styled.div`
  .box {
    position: relative;
    top: 65px;
    left: 275px;
    display: table;
    .weak {
      position: relative;
      display: table-cell;
      font-family: 'NanumGothic';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: black;
    }
    .check {
      position: relative;
      input {
        position: relative;
        margin-left: 20px;
        margin-right: 50px;
        top: 40px;
        display: table-cell;
        width: 30px;
        height: 30px;
        border: 3px solid black;
      }
    }
    .strong {
      position: relative;
      left: -40px;
      display: table-cell;
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
        <p className='weak'>약</p>
        <div className='check'>
          <label>
            <input type={'radio'} name='check' value={1} />
            <input type={'radio'} name='check' value={2} />
            <input type={'radio'} name='check' value={3} />
            <input type={'radio'} name='check' value={4} />
          </label>
        </div>

        <p className='strong'>강</p>
      </div>
    </Select>
  );
};

export default CoffeeTISelect;
