import React from "react";
import { Container, Row } from "reactstrap";
import "./Header.css";

import logo from "../../assets/images/eco-logo.png";
import { Link, NavLink } from "react-router-dom";
import user_Icon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // const headerRef = useRef(null);
  // const menuRef = useRef(null);
  // const HandleStickyHeader = () => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("sticky__header");
  //     } else {
  //       headerRef.current.classList.remove("sticky__header");
  //     }
  //   });
  // };

  // const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  // useEffect(() => {
  //   HandleStickyHeader();
  // }, []);

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />

              <div>
                <Link to="/">
                  <h1>Multimart</h1>
                </Link>
              </div>
            </div>
            {/* <div className="navigation" ref={menuRef} onClick={menuToggle}> */}
            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(ClassN) =>
                        ClassN.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <Link to="/cart">
                  <i class="ri-shopping-bag-line"></i>
                </Link>

                <span className="badge">{totalQuantity}</span>
              </span>

              <span>
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={user_Icon}
                  alt=""
                />
              </span>
              <div className="mobile__menu">
                {/* <span onClick={menuToggle}> */}
                <span>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
