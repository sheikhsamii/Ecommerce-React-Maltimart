import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import "../styles/cart.css";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { productActions } from "../redux/slices/ProductSlice";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  // console.log(totalAmount);

  return (
    <Helmet title={" Cart"}>
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9" className="mt-2">
              {cartItems.length === 0 ? (
                <h2 className="text-center fs-4">No items Added</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3" className="mt-2">
              <div className="d-flex align-items-center justify-content-between pb-3">
                <h6>SubTotal</h6>
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </div>
              <p>Taxes and shipping will calculate in Checkout.</p>
              <div>
                <button className="buy__btn w-100">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
                <button className="buy__btn w-100 mb-0">
                  <Link to="/checkout">Checkout</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
/* TR  */
const Tr = ({ item }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const handleIncreaseCart = (productID, price, stock) => {
    if (item.stock > 0) {
      // item.stock -= 1;
      dispatch(cartActions.addQuantityCart([productID, price, stock]));
      dispatch(productActions.reduceStock(productID));
    } else {
      toast.error("No more stock");
    }
  };
  const handleDecreaseCart = () => {
    if (item.quantity > 1) {
      dispatch(cartActions.decreaseCart(item.id, item.price, item.stock));
      dispatch(productActions.IncreaseStock(item.id));
    } else {
      toggle();
    }
  };
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
    dispatch(productActions.IncreaseStock(item.id));
    toggle();
  };
  return (
    <>
      <Modal
        isOpen={modal}
        modalTransition={{ timeout: 300 }}
        backdropTransition={{ timeout: 700 }}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Confirmation</ModalHeader>
        <ModalBody>Are you Sure you want to Delete?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={deleteProduct}>
            Delete
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <tr>
        <td>
          <img src={item.imgUrl} alt="img" />
        </td>
        <td className="align__products">{item.productName}</td>
        <td className="align__products">${item.price}</td>
        <td className="align__products">
          <span>
            <i
              class="ri-add-circle-line p-2"
              onClick={() =>
                handleIncreaseCart(item.id, item.price, item.stock)
              }
            ></i>
          </span>
          {item.quantity}
          <span>
            <i
              class="ri-indeterminate-circle-line p-2"
              onClick={handleDecreaseCart}
            ></i>
          </span>
        </td>
        <td className="align__products">
          <motion.i
            whileHover={{ scale: 1.2 }}
            onClick={toggle}
            class="ri-delete-bin-line"
          ></motion.i>
        </td>
      </tr>
    </>
  );
};

export default Cart;
