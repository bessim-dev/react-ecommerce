export const addItemToCart = (cartItems, cartItemToAdd) => {
  const cartItemExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (cartItemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};
export const RMItemFromCart = (cartItems, cartItemToRm) => {
  const cartItemExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRm.id
  );
  if (cartItemExists.quantity === 1) {
    return cartItems.filter((cartItem) => cartItemToRm !== cartItem);
  } else {
    return cartItems.map((cartItem) => ({
      ...cartItem,
      quantity: cartItem.quantity - 1,
    }));
  }
};
export const clearItemFromCart = (cartItems, cartItemToRm) => {
  cartItems.filter((cartItem) => cartItem.id !== cartItemToRm);
};
