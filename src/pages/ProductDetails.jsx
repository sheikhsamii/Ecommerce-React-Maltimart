// import { motion } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Col, Container, Row } from "reactstrap";
// import products from "../assets/data/products";
// import Helmet from "../Components/Helmet/Helmet";
// import CommonSection from "../Components/UI/CommonSection";
// import ProductsList from "../Components/UI/ProductsList";
// import "../styles/product-details.css";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../redux/slices/CartSlice";
// import { toast } from "react-toastify";
// const ProductDetails = () => {
//   const [tab, setTab] = useState("desc");
//   const { id } = useParams();
//   const product = products.find((item) => item.id === id);
//   const {
//     imgUrl,
//     productName,
//     price,
//     avgRating,
//     reviews,
//     description,
//     shortDesc,
//     category,
//   } = product;

//   const relatedProducts = products.filter((item) => item.category === category);

//   const dispatch = useDispatch();

//   const addToCart = () => {
//     dispatch(
//       cartActions.addItem({
//         id,
//         productName,
//         image: imgUrl,
//         price,
//       })
//     );
//     toast.success("Added to Cart");
//   };

//   // useEffect(() => {
//   //   window.scrollTo(0, 0);
//   // }, [product]);
//   return (
//     <>
//       <Helmet title={productName}>
//         <CommonSection title={productName} />

//         <section className="pt-0">
//           <Container>
//             <Row>
//               <Col lg="6" className="product__image">
//                 <img src={imgUrl} alt="img" />
//               </Col>
//               <Col lg="6">
//                 <div className="product__details">
//                   <h2>{productName}</h2>
//                   <div className="product__rating d-flex align-items-center gap-5 mb-4">
//                     <div>
//                       <span>
//                         <i class="ri-star-s-fill"></i>
//                         <i class="ri-star-s-fill"></i>
//                         <i class="ri-star-s-fill"></i>
//                         <i class="ri-star-s-fill"></i>
//                         <i class="ri-star-half-line"></i>
//                       </span>
//                     </div>
//                     <p>
//                       ( <span> {avgRating}</span> Ratings)
//                     </p>
//                   </div>
//                   <div className="d-flex align-items-center gap-5 mb-3">
//                     <span className="product__price">${price}</span>
//                     <span>Category: {category}</span>
//                   </div>

//                   <p>{shortDesc}</p>
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     className="buy__btn"
//                     onClick={addToCart}
//                   >
//                     Add to Cart
//                   </motion.button>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <section>
//           <Container>
//             <Row>
//               <Col lg="12">
//                 <div className="tab__wrapper d-flex align-items-center gap-5">
//                   <h6
//                     className={`${tab === "desc" ? "active__tab" : ""}`}
//                     onClick={() => setTab("desc")}
//                   >
//                     Description
//                   </h6>
//                   <h6
//                     className={`${tab === "rev" ? "active__tab" : ""}`}
//                     onClick={() => setTab("rev")}
//                   >
//                     Review ({reviews.length})
//                   </h6>
//                 </div>
//                 {tab === "desc" ? (
//                   <div className="tab__content mt-5">
//                     <p>{description}</p>
//                   </div>
//                 ) : (
//                   <div className="product__review">
//                     <div className="review__wrapper mt-5">
//                       <ul>
//                         {reviews?.map((item, index) => (
//                           <li key={index}>
//                             <h6>John Doe</h6>
//                             <span>{item.rating} (rating)</span>
//                             <p>{item.text}</p>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 )}
//               </Col>
//               <Col lg="12">
//                 <h2 className="mt-5 text-center mb-3"> You Might Also Like </h2>
//               </Col>
//               <ProductsList data={relatedProducts} />
//             </Row>
//           </Container>
//         </section>
//       </Helmet>
//     </>
//   );
// };

// export default ProductDetails;
