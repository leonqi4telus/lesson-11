export const addNewItem = (prevCartItems, newItem) => {
  const foundItem = prevCartItems.find((item) => item.id === newItem.id);
  if (!foundItem) return [...prevCartItems, { ...newItem, quantity: 1 }];
  return prevCartItems.map((item) =>
    item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

// remove item util function using reduce
export const removeItemReduce = (prevCartItems, cartItem) => {
  return prevCartItems.reduce((accumulator, item) => {
    if (item.id !== cartItem.id) return [...accumulator, item];
    return item.quantity - 1 > 0
      ? [...accumulator, { ...item, quantity: item.quantity - 1 }]
      : accumulator;
  }, []);
};

// remove item util function original logic
export const removeItem = (prevCartItems, cartItem) => {
  const foundItem = prevCartItems.find((item) => item.id === cartItem.id);
  if (foundItem.quantity === 1)
    return prevCartItems.filter((item) => item.id !== cartItem.id);
  return prevCartItems.map((item) =>
    item.id !== cartItem.id ? item : { ...item, quantity: item.quantity - 1 }
  );
};
