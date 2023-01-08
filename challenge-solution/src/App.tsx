import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

const handleInput = () => {};

function App() {
  return (
    <div className="App">
      <Header />

      <Input getInput={handleInput} />

      <div>
        <h3>Chart Area</h3>
      </div>

      <Footer />
    </div>
  );
}

export default App;
