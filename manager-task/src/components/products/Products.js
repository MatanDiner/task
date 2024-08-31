import Product from "./product/Product";
import { useStyles } from "./Products.style";

const Products = ({ products = [], setProducts, setSelectedProduct }) => {
  const classes = useStyles();

  const onDelete = (e, removedId) => {
    e.stopPropagation();
    const newProducts = products.filter(({ id }) => id !== removedId);
    setProducts(newProducts);
    if (newProducts.length) setSelectedProduct(newProducts[0]);
  };

  return (
    <div className={classes.container}>
      {products.map(({ id, image, name, price, description }) => (
        <Product
          key={id}
          id={id}
          imgSrc={image}
          name={name}
          description={description}
          price={price}
          onDelete={onDelete}
          setSelectedProduct={setSelectedProduct}
        />
      ))}
    </div>
  );
};

export default Products;
