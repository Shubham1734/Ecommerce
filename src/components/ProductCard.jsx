import React, { useState } from 'react';
import styled from 'styled-components';
import ProductDetails from './ProductDetails';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 300px; /* Set your desired maximum width for the card */
  margin: 0 auto; /* Center the container */
`;

const Card = styled.div`
  width: 100%;
  height: 400px; /* Set your desired fixed height for the card */
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  background-color: #fff;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px; /* Set your desired height for the image */
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const ProductTitle = styled.h3`
  color: #333;
  margin: 0;
  font-size: 1.4rem;
  padding: 0.5rem;
  max-height: 3.6rem; /* Set your desired max height for the title */
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.p`
  color: #888;
  font-weight: bold;
  margin: 0.5rem;
`;

const ProductDescription = styled.p`
  color: #555;
  font-size: 0.9rem;
  padding: 0 1rem;
`;

const ProductRating = styled.div`
  margin-top: 0.5rem;
  color: #f39c12;
  font-weight: bold;
  padding: 0 1rem;
`;

const DetailsButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem;
  font-size: 1rem;

  &:hover {
    background-color: #2185d0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none; // Remove underline
  color: inherit; // Inherit the color from the parent
`;

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

const ProductCard = ({ product }) => {
  const { id, title, price, description, image, rating } = product;
  const truncatedTitle = truncateText(title, 10);
  const truncatedDescription = truncateText(description, 50);

  const [showDetails, setShowDetails] = useState(false);

  return (
    <Container>
      {showDetails ? (
        <ProductDetails product={product} onClose={() => setShowDetails(false)} />
      ) : (
        <Card>
          <StyledLink to={`/product/${id}`}>
            <ProductImage src={image} alt={title} />
            <ProductTitle>{truncatedTitle}</ProductTitle>
            <ProductPrice>${price}</ProductPrice>
            <ProductDescription>{truncatedDescription}</ProductDescription>
            <ProductRating>
              Rating: {rating.rate} ({rating.count} reviews)
            </ProductRating>
          </StyledLink>
        </Card>
      )}
    </Container>
  );
};

export default ProductCard;
