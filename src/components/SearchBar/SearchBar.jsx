import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoMeli from '../../assets/images/logo_meli.png';
import iconSearch from '../../assets/icons/search_icon.png';

import {
  Root,
  Logo,
  SearchBarContainer,
  Input,
  SearchIcon,
  Divider,
} from './styles';

const SearchBar = () => {
  const [product, setProduct] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setProduct(e.target.value);
  };

  const onSearch = () => {
    const trimmed = product.trim();
    if (trimmed === '') return;

    navigate(`/search?query=${encodeURIComponent(trimmed)}`);
    setProduct('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <Root>
      <Logo src={logoMeli} alt="Logo Mercado Libre" />
      <SearchBarContainer>
        <Input
          type="text"
          placeholder="Buscar productos, marcas y más..."
          value={product}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <Divider />
        <SearchIcon
          src={iconSearch}
          alt="Buscar"
          onClick={onSearch}
        />
      </SearchBarContainer>
    </Root>
  );
};

export default SearchBar;
