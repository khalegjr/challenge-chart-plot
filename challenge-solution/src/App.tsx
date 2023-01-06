import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <div>
        <h3>Input Area</h3>
      </div>

      <div>
        <h3>Chart Area</h3>
      </div>

      <Footer />
    </div>
  );
}

export default App;
