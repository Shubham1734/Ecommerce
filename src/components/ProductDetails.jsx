import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  addToCart
} from "../redux/actions/productsActions";
import styled from "styled-components";
import Spinner from './Spinner';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PlaceholderSegment = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 80%;
`;

const TwoColumnGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const ImageColumn = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
`;

const ContentColumn = styled.div`
  flex: 2;
  padding-left: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Price = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: teal;
`;

const Category = styled.h3`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: brown;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
`;

const AddToCartButton = styled.button`
  background-color: #27ae60;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  transition: background-color 0.3s ease-in-out;

  .hidden-content {
    display: none;
    margin-left: 5px;
  }

  &:hover {
    background-color: #219653;

    .hidden-content {
      display: inline;
    }
  }
`;

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <Container>
      {Object.keys(product).length === 0 ? (
        <Spinner/>
      ) : (
        <PlaceholderSegment>
          <TwoColumnGrid>
            <ImageColumn>
              <Image src={image} alt={title} />
            </ImageColumn>
            <ContentColumn>
              <Title>{title}</Title>
              <Price>${price}</Price>
              <Category>{category}</Category>
              <Description>{description}</Description>
              <AddToCartButton onClick={handleAddToCart} tabIndex="0">
                <div className="hidden-content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible-content">Add to Cart</div>
              </AddToCartButton>
            </ContentColumn>
          </TwoColumnGrid>
        </PlaceholderSegment>
      )}
    </Container>
  );
};

export default ProductDetails;
