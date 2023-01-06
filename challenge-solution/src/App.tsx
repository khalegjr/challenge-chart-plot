import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <Header />

      <Input />

      <div>
        <h3>Chart Area</h3>
      </div>

      <Footer />
    </div>
  );
}

export default App;
