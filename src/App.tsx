import { BrowserRouter } from "react-router-dom";
import ClientApp from "./ClientApp";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid app-conatiner">
        <Header />
        <ClientApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
