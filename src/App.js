import "./App.css";
import NavBar from "./Components/NavBar.js";
import Header from "./Components/Header.js";
import Content from "./Components/Content";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="topContainer">
     <NavBar />
     <Header />
     <Content />   
     <Footer />
    </div>
  );
}

export default App;
