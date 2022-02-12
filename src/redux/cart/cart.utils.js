export const addNewItem = (prevCartItems, newItem) => {
  const foundItem = prevCartItems.find((item) => item.id === newItem.id);
  if (!foundItem) return [...prevCartItems, { ...newItem, quantity: 1 }];
  return prevCartItems.map((item) =>
    item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
  );
};
