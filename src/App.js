import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNav from "./Components/AppNav";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Service from "./Pages/Service";
import ServiceArea from "./Pages/ServiceArea";
import BecomeMember from "./Pages/BecomeMember";
import Blog from "./Pages/Blog";

function App() {
  return (
    <div>
      <AppNav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Service" element={<Service />} />
        <Route path="/ServiceArea" element={<ServiceArea/>} />
        <Route path="/BecomeMember" element={<BecomeMember/>} />
        <Route path="/Blog" element={<Blog/>} />
      </Routes>
    </div>

  );
}

export default App;
