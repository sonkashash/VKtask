import { setProducts, setTotalCost, increaseQuantity, decreaseQuantity, removeProduct } from '../reducers/cartReducer';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://dummyjson.com/carts/${Math.floor(Math.random() * 10)}`);
      const data = await response.json();
      dispatch(setProducts(data.products));
      const total = data.products.reduce((acc, product) => acc + product.total, 0);
      dispatch(setTotalCost(total));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};

export const increaseProductQuantity = (productId) => {
  return (dispatch) => {
    dispatch(increaseQuantity(productId));
  };
};

export const decreaseProductQuantity = (productId) => {
  return (dispatch) => {
    dispatch(decreaseQuantity(productId));
  };
};

export const removeProductFromCart = (productId) => {
  return (dispatch) => {
    dispatch(removeProduct(productId));
  };
};