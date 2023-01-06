import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer mt-4">
      <Container>
        <Row>
          <Col lg="4" md="6">
            <div className="logo">
              <div>
                <Link to="/">
                  <h1 className="text-white">Multimart</h1>
                </Link>
              </div>
            </div>

            <p className="footer__text mt-4 mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus quod est neque ad? Nostrum quod quos totam odit
              aspernatur consequuntur.
            </p>
          </Col>
          <Col lg="3 " md="3">
            <div className="footer__quick-links mb-5">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3">
            <div className="footer__quick-links mb-5">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <span className="p-2">
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <Link to="#">ZindaBazar,Karachi,Pakistan</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <span className="p-2">
                    <i class="ri-phone-line"></i>
                  </span>
                  <Link to="#">+09007090999</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <span className="p-2">
                    <i class="ri-mail-line"></i>
                  </span>
                  <Link to="#">example123@gmail.com</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright text-center mt-5 text-white">
              Copyright {year} developed by Sheikh Sami. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
