import GlobalStyle from "./assets/css/GlobalStyle";
import Chart from "./components/Chart/Chart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

const handleInput = () => {};

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header name="Júnior" />

        <Input getInput={handleInput} />

        <Chart />

        <Footer />
      </div>
    </>
  );
}

export default App;
