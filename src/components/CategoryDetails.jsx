import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Spinner from './Spinner';
const CategoryDetailsContainer = styled.div`
  padding: 20px;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductCard = styled.div`
  width: 300px;
  margin: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .product-info {
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      color: #555;
    }
  }
`;

const CategoryDetails = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const fetchCategoryDetail = async (name) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${name}`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchCategoryDetail(name);
  }, [name]);

  return (
    <CategoryDetailsContainer>
      <h2>{capitalizeFirstLetter(name)} Category Details</h2>
      {loading ? (
        <Spinner/>
      ) : (
        <ProductList>
          {data.map((product) => (
            <ProductCard key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            </ProductCard>
          ))}
        </ProductList>
      )}
    </CategoryDetailsContainer>
  );
};

export default CategoryDetails;
