import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [isFetchPending, setFetchPending] = useState(false);

  const fetchProducts = () => {
    setFetchPending(true);
    axios.get('https://jwt.sulla.hu/termekek', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {
      console.error('Failed to fetch products:', error);
    })
    .finally(() => {
      setFetchPending(false); // Corrected, wrapped in a function
    });
  };

  useEffect(() => {
    if (token) {
      fetchProducts();
    }
  }, [token]);

  return (
    <div className='container p-5 bg-ivory w-50 mt-5 text-center'>
      <h2>Products</h2>
      <ul className='list-group mt-3 w-100 mx-auto border border-dark p-3 bg-light text-dark' style={{ listStyle: 'none' }}>
        {isFetchPending ? (<div className="spinner-border"></div>) : (
          <div>
            {products.map(product => (
              <li key={product.id}>
                <div className='card w-50 mx-auto mt-3 text-center border border-dark p-3 bg-light text-dark'>
                  <h2>{product.name}</h2>
                </div>
              </li>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
