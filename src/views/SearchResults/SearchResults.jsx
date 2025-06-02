import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { ProductCard } from '../../components';
import { Root } from './styles';

const product = [{
  id: "MLA123456789",
  title: "Apple iPhone 13 (128 Gb) - Azul - Distribuidor Autorizado",
  img: "http://http2.mlstatic.com/D_619667-MLA47781882790_102021-I.jpg",
  price: 199999,
  oldPrice: 299999,
  seller: "MLA-CELLPHONES",
  installments: {
    quantity: 12,
    amount: 16666.58,
    rate: 0,
    currencyId: "ARS",
    currencyFormat: "$",
    paymentMethodId: "visa",
    paymentTypeId: "credit_card",
  },
  shipping: {
    freeShipping: true,
    mode: "me2",
    tags: ["fulfillment", "self_service_in"],
    logisticType: "fulfillment",
    storePickUp: false,
  },
},
{
  id: "MLA123456790",
  title: "Samsung Galaxy S21 (128 Gb)",
  img: "http://http2.mlstatic.com/D_619667-MLA47781882790_102021-I.jpg",
  price: 179999,
  oldPrice: 249999,
  seller: "MLA-SAMSUNG",
  installments: {
    quantity: 12,
    amount: 14999.92,
    rate: 0,
    currencyId: "ARS",
    currencyFormat: "$",
    paymentMethodId: "visa",
    paymentTypeId: "credit_card",
  },
  shipping: {
    freeShipping: true,
    mode: "me2",
    tags: ["fulfillment", "self_service_in"],
    logisticType: "fulfillment",
    storePickUp: false,
  },
},
{
  id: "MLA123456791",
  title: "Xiaomi Redmi Note 10 (64 Gb) - Gris",
  img: "http://http2.mlstatic.com/D_619667-MLA47781882790_102021-I.jpg",
  price: 89999,
  oldPrice: 119999,
  seller: "MLA-XIAOMI",
  installments: {
    quantity: 6,
    amount: 14999.83,
    rate: 0,
    currencyId: "ARS",
    currencyFormat: "$",
    paymentMethodId: "visa",
    paymentTypeId: "credit_card",
  },
  shipping: {
    freeShipping: true,
    mode: "me2",
    tags: ["fulfillment", "self_service_in"],
    logisticType: "fulfillment",
    storePickUp: false,
  },
}
];

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get('query');
  console.log('Search Term:', searchTerm);
  
  if (!searchTerm) {
    return (
      <div style={{ marginTop: '80px', padding: '20px' }}>
        <Typography variant='h2'>Por favor, ingrese un término de búsqueda</Typography>
      </div>
    );
  }

  return (
    <>
      <div style={{ marginTop: '80px', padding: '20px' }}>
        <Root>
        
         {product.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            oldPrice={item.oldPrice}
            seller={item.seller}
            installments={item.installments}
            shipping={item.shipping}
          />
         ))}
          <Typography variant='h5'>Resultados para: <strong>{searchTerm}</strong></Typography>
        </Root>
      </div>
    </>
  );
};

export default SearchResults;
