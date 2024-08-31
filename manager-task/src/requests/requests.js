import products from "./products";

export const getProducts = () => {
  return new Promise((res) => {
    setTimeout(res(products.data), 500);
  });
};
