import React from "react";
// import { cartActions } from "../../redux/slices/CartSlice";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Services from "../../services/Services";
import heroImg from "../../assets/images/hero-img.png";
import "../../styles/home.css";
import ProductCommon from "./ProductCommon";
import Helmet from "../Helmet/Helmet";
const ProductsList = () => {
  const year = new Date().getFullYear();

  return (
    <Helmet title={" Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero-subtitle">Trending Product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt consequuntur explicabo optio minus nemo quasi
                  reiciendis? Odit adipisci molestias nulla.
                </p>
                <motion.button whileHover={{ scale: 1.1 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="heroimg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />

      <ProductCommon />
    </Helmet>
  );
};

export default ProductsList;
