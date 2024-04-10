import PropTypes from "prop-types";

const Product = ({products}) => {
  return (
    <div>
      {products.map((product, i) => (
      <p key={i}>{product}</p>
    ))}
    </div>
  )
}

Product.propTypes = {
  products: PropTypes.array,
};

export default Product
