import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [home, setHome] = useState(true);
  return (
    <div>
      <Navbar setHome={setHome} />
      {home ? <Home /> : <Cart />}
    </div>
  );
}

export default App;
