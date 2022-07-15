
import FirstPage from './ Pages/FirstPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import SecondPage from './ Pages/SecondPage';
import ThirdPage from './ Pages/ThirdPage';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/build_loyalty_club" element={<FirstPage/>}/>    
        <Route path="/add_business_to_club" element={<SecondPage/>}/>
        <Route path="/define_brand" element={<ThirdPage/>}/>
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
