import { Routes, Route, Navigate } from "react-router-dom";
//pages
import ProductsPage from "./pages/ProductsPage";
import Checkout from "./pages/Checkout";
import DetailsPage from "./pages/DetailsPage";
import NotFound from "./pages/NotFound";
//layout
import Layout from "./layout/Layout";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/*" element={<Navigate to="/notfound" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
