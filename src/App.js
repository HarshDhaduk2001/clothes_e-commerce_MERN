import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import CustomerRoute from "./customer/routes/CustomerRoute";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/*" element={<CustomerRoute />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
