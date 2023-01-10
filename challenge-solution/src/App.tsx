import { useState } from "react";
import GlobalStyle from "./assets/css/GlobalStyle";
import Chart from "./components/Chart/Chart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

function App() {
  const [eventsText, setEventsText] = useState<string>("");

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header name="Júnior" />

        <main>
          <Input value={eventsText} onChange={setEventsText} />

          <Chart />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
