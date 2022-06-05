import CafeList from './CafeList';
import styled from 'styled-components';
import { FontStyle } from 'quill';
import { useSearchParams } from 'react-router-dom';

const SearchContainer = styled.div`
  section {
    position: relative;
    p {
      position: relative;
      top: 20px;
      left: 20px;
      font-family: 'Cafe24Bold';
      font-size: 16px;
      line-height: 16px;
    }
  }
`;

const Search = () => {
  const [searchParams] = useSearchParams();

  const dataB64String = searchParams.get('data');
  const data = dataB64String ? JSON.parse(atob(dataB64String)) : [];

  return (
    <SearchContainer>
      <section>
        <p style={{ textAlign: 'left' }}>#해시태그 필터#</p>
        <CafeList filterIds={data} />
      </section>
    </SearchContainer>
  );
};

export default Search;
