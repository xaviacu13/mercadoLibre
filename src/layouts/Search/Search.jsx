import { Outlet } from 'react-router-dom';
import { SearchBar } from '../../components';

function Search() {
  return (
    <>
      <SearchBar />
      <Outlet /> 
    </>
  );
}

export default Search;