import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNav from "./Components/AppNav";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Service from "./Pages/Service";

function App() {
  return (

    <div>
      <AppNav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Service" element={<Service />} />
      </Routes>
    </div>



  );
}

export default App;
