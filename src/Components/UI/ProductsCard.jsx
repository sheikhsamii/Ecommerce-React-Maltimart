import React from "react";
// import productImg from "../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import { toast } from "react-toastify";

const ProductsCard = (props) => {
  const { item, addToCart, findAProduct, addQuantity } = props;

  // const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <Col lg="3" md="4">
        <div className="product__item">
          <div className="product__img">
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={item.imgUrl}
              alt="product_img"
            />
          </div>
          <div className="p-2 product__info">
            <h3 className="product__name">
              <Link to={`/shop/${item.id}`}>{item.productName}</Link>
            </h3>
            <div className="product__sub_info d-flex align-items-center justify-content-between p-2">
              <span className="text-center  p-1">{item.category}</span>
              <span className="text-center  p-1">
                <b>
                  {item.stock > 0 ? (
                    <span> Available Stock: {item.stock}</span>
                  ) : (
                    "Out Of Stock"
                  )}{" "}
                </b>
              </span>
            </div>
          </div>

          <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">${item.price}</span>

            <motion.span whileTap={{ scale: 1.2 }}>
              {findAProduct(item.id) ? (
                <i
                  onClick={() => {
                    addQuantity(item.id, item.price, item.stock);
                  }}
                  class="ri-add-line"
                ></i>
              ) : (
                <i
                  onClick={() => {
                    addToCart(item, item.price);
                  }}
                  class="ri-add-line"
                ></i>
              )}
            </motion.span>
          </div>
        </div>
      </Col>
    </>
  );
};
ProductsCard.propTypes = {
  product: PropTypes.object,
  findAProduct: PropTypes.func,
  addCart: PropTypes.func,
};
export default ProductsCard;
