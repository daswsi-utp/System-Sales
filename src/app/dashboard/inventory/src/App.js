import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Header } from "./components/header";
import { Departments } from "./pages/departments";
import { Products } from "./pages/products";
import { IndividualProductPage } from "./pages/individualProductPage";
import { NewProduct } from "./pages/newProduct";

export default function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:productId"
          element={<IndividualProductPage />}
        />
        <Route path="/newProduct" element={<NewProduct />} />
      </Routes>
    </div>
  );
}
