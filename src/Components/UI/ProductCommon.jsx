import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import { cartActions } from "../../redux/slices/CartSlice";
import { productActions } from "../../redux/slices/ProductSlice";
import ProductsCard from "./ProductsCard";
const ProductCommon = () => {
  const dispatch = useDispatch();

  const Allproducts = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const addToCart = (item, price) => {
    // if (product.stock > 0) {
    //   setProduct({
    //     ...product,
    //     stock: product.stock - 1,
    //   });
    //   item.stock --;

    if (item.stock > 0) {
      dispatch(
        cartActions.addItem({
          id: item.id,
          productName: item.productName,
          price: item.price,
          imgUrl: item.imgUrl,
          stock: item.stock - 1,
          quantity: 1,
          tPrice: item.price,
        })
      );
      dispatch(productActions.reduceStock(item.id));
    } else {
      toast.error("No more Stock");
    }
  };
  // }
  const addQuantity = (productID, price, stock) => {
    if (stock > 0) {
      // item.stock -= 1;
      dispatch(cartActions.addQuantityCart([productID, price, stock]));
      dispatch(productActions.reduceStock(productID));
    } else {
      toast.error("No more stock");
    }
    // dispatch(cartActions.addQuantityCart([productID, price, stock]));
    // dispatch(productActions.reduceStock(productID));
  };

  const findAProduct = (productID) => {
    const product = cartItems
      ? cartItems.find((el) => el.id === productID)
      : null;
    return product;
  };
  return (
    <>
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Available Products</h2>
            </Col>
            {Allproducts?.map((item, index) => {
              console.log(item);
              return (
                <ProductsCard
                  item={item}
                  key={index}
                  addToCart={addToCart}
                  addQuantity={addQuantity}
                  findAProduct={findAProduct}
                />
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductCommon;
