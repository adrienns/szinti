export const createCartItems = (cart) => {
  let cartItems = [];
  cart.forEach((item) => {
    if (item.count > 0) {
      cartItems.push({
        id: item.id,
        firstImage: item.firstImage,
        total: item.total,
        count: item.count,
        name_hun: item.name_hun,
        name: item.name,
        material: item.material,
        material_hun: item.material_hun,
      });
    }
  });
  return cartItems;
};
