import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mens from '../images/pexels-mnz-1639729.jpg';
import womens from '../images/pexels-frank-minjarez-19240704.jpg';
import jewellery from '../images/pexels-vennzi-3634366.jpg';
import electronics from '../images/pexels-pixabay-356056.jpg';

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #f8f8f8;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 20px; /* Add padding for better aesthetics */
`;

const Carousel = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  margin: 0 -20px;
  border-radius: 15px;
  overflow: hidden;
`;

const CarouselItem = styled.div`
  flex: 0 0 350px; /* Adjusted width to increase the size of cards */
  height: 400px; /* Adjusted height to increase the size of cards */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #555;
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #e6005c;
  }
`;

const PrevButton = styled(NavButton)`
  margin-left: 10px;
`;

const NextButton = styled(NavButton)`
  margin-right: 10px;
`;

const CategoryLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
`;

const CategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  const categories = [
    { id: 1, name: "men's clothing", image: mens },
    { id: 2, name: "women's clothing", image: womens },
    { id: 3, name: 'jewelery', image: jewellery },
    { id: 4, name: 'electronics', image: electronics },
  ];

  const handleCategoryClick = (index) => {
    console.log(`Clicked on category: ${categories[index].name}`);
  };

  return (
    <SliderContainer>
      <Carousel style={{ transform: `translateX(-${currentIndex * (380)}px)` }}>
        {categories.map((category) => (
          <CarouselItem key={category.id} onClick={() => handleCategoryClick(category.id)}>
            <CategoryLink to={`/category/${category.name}`}>
              <img src={category.image} alt={category.name} />
              <CategoryName>{category.name}</CategoryName>
            </CategoryLink>
          </CarouselItem>
        ))}
      </Carousel>
    </SliderContainer>
  );
};

export default CategorySlider;
