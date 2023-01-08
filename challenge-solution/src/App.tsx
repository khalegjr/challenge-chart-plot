import "./App.css";
import Chart from "./components/Chart/Chart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

const handleInput = () => {};

function App() {
  return (
    <div className="App">
      <Header />

      <Input getInput={handleInput} />

      <Chart />

      <Footer />
    </div>
  );
}

export default App;
