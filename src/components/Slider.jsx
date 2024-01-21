import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Carousel = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const CarouselItem = styled.div`
  flex: 0 0 100%;
  height: 400px; /* Set your desired height */
  width: 100%;
  overflow: hidden; /* Ensure images won't overflow the container */
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio and cover the entire space */
    border-radius: 8px; /* Add some border-radius for a rounded look */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)); /* Add a gradient overlay for better text visibility */
    z-index: 1;
  }
`;

const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  color: #fff;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ActionButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff3366;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6005c;
  }
`;

const NavigationButtons = styled.div`
  position: absolute;
  bottom: 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 3;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #e6005c;
  }
`;

const PrevButton = styled(NavButton)`
  position: absolute;
  left: 20px;
  background-color: #333; /* Add a background color for better visibility */
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555; /* Darken the background on hover */
  }
`;

const NextButton = styled(NavButton)`
  position: absolute;
  right: 20px;
  background-color: #333; /* Add a background color for better visibility */
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555; /* Darken the background on hover */
  }
`;

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <SliderContainer>
      <Carousel style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img src={image} alt={`slide-${index}`} />
            <SlideContent>
              <ContentContainer>
                <Title>Best Ecommerce Solutions</Title>
                <Description>
                  We offer an industry-driven and successful digital marketing
                  strategy that helps our clients in achieving a strong online
                  presence and maximum company profit.
                </Description>
                <ActionButton href="#" className="btn btn-slider">
                  Get Now
                </ActionButton>
              </ContentContainer>
            </SlideContent>
          </CarouselItem>
        ))}
      </Carousel>
      <NavigationButtons>
        <PrevButton onClick={prevSlide}>&lt;</PrevButton>
        <NextButton onClick={nextSlide}>&gt;</NextButton>
      </NavigationButtons>
    </SliderContainer>
  );
};

export default Slider;
