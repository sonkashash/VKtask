import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, increaseProductQuantity, decreaseProductQuantity, removeProductFromCart } from '../actions/cartActions';
import { DeleteOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import '../App.css'

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);
  const totalCost = useSelector(state => state.cart.totalCost);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseProductQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseProductQuantity(productId));
  };

  const handleDeleteProduct = (productId) => {
    dispatch(removeProductFromCart(productId));
  };

  return (
    <div className="container">
      <div className="left-column">
        <h2 className="header">Ваша корзина</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div className="item">
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <p>
                  <strong>Количество:</strong>
                  <PlusCircleOutlined className="button-click" onClick={() => handleIncreaseQuantity(product.id)} />
                  {product.quantity}
                  <MinusCircleOutlined className="button-click" onClick={() => handleDecreaseQuantity(product.id)} />
                </p>
                <p>
                  <strong>Стоимость:</strong> {product.total * 100} руб
                </p>
                <DeleteOutlined className="button-click" onClick={() => handleDeleteProduct(product.id)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="right-column">
        <div className="total">
          <p><strong>Итого:</strong> {totalCost * 100} руб</p>
        </div>
      </div>
    </div>
  );
};

export default App;