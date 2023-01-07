import "./App.css";
import Chart from "./components/Chart/Chart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <Header />

      <Input />

      <Chart />

      <Footer />
    </div>
  );
}

export default App;
