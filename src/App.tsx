import FirstPage from "./pages/FirstPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid app-conatiner">
        <Header />
        <Routes>
          <Route path="/build_loyalty_club" element={<FirstPage />} />
          <Route path="/add_business_to_club" element={<SecondPage />} />
          <Route path="/define_brand" element={<ThirdPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
