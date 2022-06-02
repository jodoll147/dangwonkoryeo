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
  const [hashTags, setHashTags] = useState([{ id: '', name: '', isBean: null }]);
  const value = props.value; // shop_id

  useEffect(() => {
    getTag()
      .then(res => {
        if (res) {
          if (value == null) {
            setHashTags(
              res.map(tags => {
                return {
                  id: tags.id,
                  name: tags.name,
                };
              }),
            );
          } else {
            const targetTags = res.filter(v => {
              return v.shop == value;
            });
            if (targetTags.length > 0) {
              setHashTags(targetTags.map(tags => ({ id: tags.id, name: tags.name })));
            }
          }
        }
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div className='hashBox'>
      <div className='hashList'>
        {hashTags?.map(hash =>
          hash.name !== '' ? <HashTagContainer key={hash.id}>#{hash.name}</HashTagContainer> : '',
        )}
      </div>
    </div>
  );
};

export default HashTag;
