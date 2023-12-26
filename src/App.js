import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainApp from "./components/MainApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllDogs from "./components/AllDogs";

function App() {
  return (
    <Router>
      <div className="header">
        <Header title="Dog API" />
      </div>
      <div className="main-content">
        <Routes>
          <Route exact path="/" element={<MainApp />}></Route>
          <Route exact path="/AllDogs" element={<AllDogs />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
