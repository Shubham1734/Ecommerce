import React from 'react';
import styled from 'styled-components';
// import ProductCard from './ProductCard';
import Products from './Products';
// import Category from './Category';
import Slider from './Slider';
const Main = styled.main`
  padding: 2rem;
`;
import image1 from '../images/pexels-andrea-piacquadio-3756345.jpg'
import image2 from '../images/pexels-andrea-piacquadio-3769747.jpg'
import image3 from '../images/pexels-nataliya-vaitkevich-6214471.jpg'
import image4 from '../images/pexels-nataliya-vaitkevich-6214475.jpg'
const HomePage = () => {
  const images = [image1,image2,image3,image4];
  return (
    <Main>
      <Slider images = {images}/>
      <Products/>
    </Main>
  );
};

export default HomePage;
