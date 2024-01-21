import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeFromCart, updateCartQuantity } from '../redux/actions/productsActions';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const CartItem = styled.tr`
  border-bottom: 1px solid #ddd;

  td {
    padding: 15px;
    text-align: left;
  }

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }

  p {
    margin: 0;
    color: #888;
    font-size: 0.9rem;
  }

  button {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 0.9rem;
    border-radius: 4px;
    margin-left: 10px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #c0392b;
    }
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 8px;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 4px;
    margin: 0 5px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #2980b9;
    }
  }

  span {
    font-size: 1.2rem;
    margin: 0 10px;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }
`;

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);

  const calculateTotal = () => {
    return carts.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrement = (productId) => {

    dispatch(updateCartQuantity(productId, 1)); 
  };

  const handleDecrement = (productId) => {
    dispatch(updateCartQuantity(productId, -1));
  };

  return (
    <Container>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2rem', color: '#333' }}>
        Shopping Cart
      </h1>
      {carts.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#888' }}>Your cart is empty.</p>
      ) : (
        <div>
          <CartTable>
            <tbody>
              {carts.map((product) => (
                <CartItem key={product.id}>
                  <td>
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price.toFixed(2)}</p>
                  </td>
                  <td>
                    <QuantityControl>
                      <button onClick={() =>{ 
                          if (product.quantity === 0) {
                            handleRemove(product.id);
                          } 
                          else {
                            handleDecrement(product.id);
                          }
                        }
                      }>-</button>
                      <span>{product.quantity}</span>
                      <button onClick={() => handleIncrement(product.id)}>+</button>
                    </QuantityControl>
                  </td>
                  <td>
                    <button onClick={() => handleRemove(product.id)}>Remove</button>
                  </td>
                </CartItem>
              ))}
            </tbody>
          </CartTable>
          <Total>
            <h2>Total:</h2>
            <h2>${calculateTotal()}</h2>
          </Total>
          {/* You can add a checkout button or other actions here */}
        </div>
      )}
    </Container>
  );
};

export default ShoppingCart;
