import { Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const ClientApp = () => {
  return (
    <Routes>
      <Route path="/build_loyalty_club" element={<FirstPage />} />
      <Route path="/add_business_to_club" element={<SecondPage />} />
      <Route path="/define_brand" element={<ThirdPage />} />
    </Routes>
  );
};
export default ClientApp;
