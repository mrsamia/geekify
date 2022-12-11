import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNav from "./Components/AppNav";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Service from "./Pages/Service";
import ServiceArea from "./Pages/ServiceArea";

function App() {
  return (

    <div>
      <AppNav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Service" element={<Service />} />
        <Route path="/ServiceArea" element={<ServiceArea/>} />
      </Routes>
    </div>



  );
}

export default App;
