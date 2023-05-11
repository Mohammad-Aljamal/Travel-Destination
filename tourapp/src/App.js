import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/header/Header"
import Home from "./components/home/Home";
import TourDetails from "./components/TourDetails/TourDetails";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const data = require("./data/db.json");


function App() {
  return (
    <div className="HomeScreen">
      <Navbar />
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home data ={data} />}/>
        <Route path="/city/:id" element={<TourDetails data = {data}/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
