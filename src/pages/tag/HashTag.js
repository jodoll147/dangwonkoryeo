import React, { useState, useEffect } from 'react';
import { API_SERVER, getTag } from '../../api/constant';
import styled from 'styled-components';

const HashTagContainer = styled.div`
  position: relative;
  font-family: 'Cafe24';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #4ea6a6;
  padding-right: 10px;
`;

const HashTag = props => {
  const [hashTags, setHashTags] = useState([{ id: '', name: '' }]);
  const shop = props.shop;

  useEffect(() => {
    getTag()
      .then(res => {
        if (res) {
          const targetTags = res.filter(v => {
            return v.shop == shop;
          });
          if (targetTags.length > 0) {
            setHashTags(targetTags.map(tags => ({ id: tags.id, name: tags.name })));
          }
        }
      })
      .catch(e => console.log(e));
  }, []);

  const hashList = hashTags?.map(hash =>
    hash.name !== '' ? <HashTagContainer key={shop + hash.id}>#{hash.name}</HashTagContainer> : '',
  );
  console.log('hashList', shop, hashList);

  return (
    <div className='hashBox'>
      <div className='hashList'>{hashList}</div>
    </div>
  );
};

export default HashTag;
