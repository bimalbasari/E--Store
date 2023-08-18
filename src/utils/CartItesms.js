import Cookies from "js-cookie";

const getCartItems = () => {
  const carItems = Cookies.get("cartItems");
  return carItems ? JSON.parse(carItems) : [];
};

const setCartItems = (cartItems) => {
  Cookies.set("cartItems", JSON.stringify(cartItems));
};

const addToCart = (product, quantity) => {
  const cartItems = getCartItems();
  const existingItems = cartItems.find((item) => item.id === product.id);
  if (existingItems) {
    existingItems.qty += quantity;
  } else {
    cartItems.push({
      id: product?.id,
      title: product?.title,
      price: product?.price,
      image: product?.thumbnail,
      qty: quantity,
    });
  }

  setCartItems(cartItems);
};

const removeFromCart = (productId) => {
  const cartItems = getCartItems().filter((item) => item.id !== productId);

  setCartItems(cartItems);
};

const updateCartItems = (productId, quantity) => {
  const cartItems = getCartItems().map((item) => {
    return item.id === productId ? { ...item, qty: quantity } : item;
  });
  setCartItems(cartItems);
};

export { getCartItems, addToCart, removeFromCart, updateCartItems };
