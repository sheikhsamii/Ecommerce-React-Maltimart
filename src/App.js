import { useDispatch } from "react-redux";
import "./App.css";
import products from "./assets/data/products";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { productActions } from "./redux/slices/ProductSlice";
import Routers from "./routers/Routers";

function App() {
  const dispatch = useDispatch();
  dispatch(productActions.setProducts(products));
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}

export default App;
