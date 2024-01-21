import React, {useEffect } from 'react';
import styled from 'styled-components';
import {useDispatch ,useSelector} from 'react-redux';
import {setProducts} from '../redux/actions/productsActions'
import ProductCard from './ProductCard';
const Main = styled.main`
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: #333;
`;
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;
const Products = () => {
  const dispatch = useDispatch();
  const fetchData = async() => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data); 
      dispatch(setProducts(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  });
  const products = useSelector((state) => state.allProducts.products);
  return (
    <Main>
      <Section>
        <Title>Products</Title>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </Section>
    </Main>
  );
};

export default Products;
