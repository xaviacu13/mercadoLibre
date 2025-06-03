import { Outlet } from 'react-router-dom';
import { SearchBar } from '../../components';
import { Root } from './styles';

function Search() {
  return (
    <Root>
      <SearchBar />
      <Outlet /> 
    </Root>
  );
}

export default Search;