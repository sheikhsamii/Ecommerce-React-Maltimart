// import React, { useState, useEffect } from "react";
// import Helmet from "../Components/Helmet/Helmet";
// import heroImg from "../assets/images/hero-img.png";
// import "../styles/home.css";
// import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import Services from "../services/Services";
// import ProductsList from "../Components/UI/ProductsList";
// import CounterImg from "../assets/images/counter-timer-img.png";
// import Clock from "../Components/UI/Clock";
// // import products from "../assets/data/products";
// // import { cartActions } from "../redux/slices/ProductSlice";
// // import { useDispatch } from "react-redux";

// const Home = () => {
//   // const dispatch = useDispatch();
//   // dispatch(cartActions.setProducts(products));
//   // console.log(products);

//   const [trendingProducts, setTrendingProducts] = useState([]);
//   const [bestSalesProducts, setbestSalesProducts] = useState([]);
//   const [mobileProducts, setMobileProducts] = useState([]);
//   const [wirelessProducts, setWirelessProducts] = useState([]);
//   const [popularProducts, setPopularProducts] = useState([]);
//   useEffect(() => {
//     const filteredTrendingProducts = products.filter(
//       (item) => item.category === "chair"
//     );

//     const filteredBestProducts = products.filter(
//       (item) => item.category === "sofa"
//     );
//     const filteredMobileProducts = products.filter(
//       (item) => item.category === "mobile"
//     );
//     const filteredWirelessProducts = products.filter(
//       (item) => item.category === "wireless"
//     );
//     const filteredPopularProducts = products.filter(
//       (item) => item.category === "watch"
//     );
//     setTrendingProducts(filteredTrendingProducts);
//     setbestSalesProducts(filteredBestProducts);
//     setMobileProducts(filteredMobileProducts);
//     setWirelessProducts(filteredWirelessProducts);
//     setPopularProducts(filteredPopularProducts);
//   }, []);

//   const year = new Date().getFullYear();
//   return (
//     <Helmet title={" Home"}>
//       <section className="hero__section">
//         <Container>
//           <Row>
//             <Col lg="6" md="6">
//               <div className="hero__content">
//                 <p className="hero-subtitle">Trending Product in {year}</p>
//                 <h2>Make Your Interior More Minimalistic & Modern</h2>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Incidunt consequuntur explicabo optio minus nemo quasi
//                   reiciendis? Odit adipisci molestias nulla.
//                 </p>
//                 <motion.button whileHover={{ scale: 1.1 }} className="buy__btn">
//                   <Link to="/shop">SHOP NOW</Link>
//                 </motion.button>
//               </div>
//             </Col>
//             <Col lg="6" md="6">
//               <div className="hero__img">
//                 <img src={heroImg} alt="heroimg" />
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       <Services />
//       <section className="trending__products">
//         <Container>
//           <Row>
//             <Col lg="12" className="text-center">
//               <h2 className="section__title">Trending Products</h2>
//             </Col>
//             <ProductsList data={trendingProducts} />
//           </Row>
//         </Container>
//       </section>
//       <section className="best_sales">
//         <Container>
//           <Row>
//             <Col lg="12" className="text-center">
//               <h2 className="section__title">Best Sales</h2>
//             </Col>
//             <ProductsList data={bestSalesProducts} />
//           </Row>
//         </Container>
//       </section>

//       <section className="timer__count">
//         <Container>
//           <Row>
//             <Col lg="6" md="6" className="timer__count-timer">
//               <div className="clock__top-content">
//                 <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
//                 <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
//               </div>
//               <Clock />
//               <motion.button
//                 whileHover={{ scale: 0.9 }}
//                 className="buy__btn store__btn"
//               >
//                 <Link to="/shop">Visit Store</Link>
//               </motion.button>
//             </Col>
//             <Col lg="6" md="6" className="text-end">
//               <img src={CounterImg} alt="Counter" className="counter__img" />
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="new__arrivals">
//         <Container>
//           <Row>
//             <Col lg="12" className="text-center mb-3">
//               <h2 className="section__title">New Arrivals</h2>
//             </Col>
//             <ProductsList data={mobileProducts} />
//             <ProductsList data={wirelessProducts} />
//           </Row>
//         </Container>
//       </section>

//       <section className="popular__cateogory">
//         <Container>
//           <Row>
//             <Col lg="12" className="text-center mb-5">
//               <h2 className="section__title">Popular in Category</h2>
//             </Col>

//             <ProductsList data={popularProducts} />
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Home;
