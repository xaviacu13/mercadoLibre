import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get('query');

  return (
    <>
      <div style={{ marginTop: '80px', padding: '20px' }}>
        <Typography variant='h2'>Resultados de búsqueda</Typography>
        <Typography variant='h5'>Buscando: <strong>{searchTerm}</strong></Typography>
      </div>
    </>
  );
};

export default SearchResults;
