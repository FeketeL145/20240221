import React, { useState } from 'react';
import axios from 'axios';

const HomePage = ({ token }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://jwt.sulla.hu/termekek', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  if (token) {
    fetchProducts();
  }

  return (
    <div className='container p-5 bg-ivory w-50 mt-5 text-center'>
      <h2>Products</h2>
      <ul className='list-group mt-3 w-100 mx-auto border border-dark p-3 bg-light text-dark' style={{ listStyle: 'none' }}>
        {products.map(product => (
          <li key={product.id}>
            <div className='card w-50 mx-auto mt-3 text-center border border-dark p-3 bg-light text-dark'>
              <h2>{product.name}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
