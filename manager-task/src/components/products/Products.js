import Product from "./product/Product";

const Products = ({ products = [] }) => {
  return products.map(({ id, image, name, price, description }) => (
    <Product
      key={id}
      imgSrc={image}
      name={name}
      desc={description}
      price={price}
    />
  ));
};

export default Products;
