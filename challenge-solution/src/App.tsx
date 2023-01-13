import React, { useState } from "react";

import GlobalStyle from "./assets/css/GlobalStyle";
import Chart from "./components/Chart/Chart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import { ChartData, processEvents } from "./services/chartData";
import { eventStringParse } from "./utils/eventStringParse";

function App() {
  const [eventsText, setEventsText] = useState<string>("");

  const [chartData, setChartData] = useState<Array<ChartData>>([]);

  /**
   * Function to generate graph from user input.
   */
  const handlePlotChart = React.useCallback(() => {
    try {
      /**
       * Calls function to generate graph from user input.
       */
      const events = eventStringParse(eventsText);
      // console.log("parse: ", events);

      /**
       * Utility function that converts json text input to a
       * Array of objects from the Events interface and its derivatives.
       */
      const { chartData } = processEvents(events);

      setChartData(chartData);
    } catch (e) {
      console.error(e);
    }
  }, [eventsText]);

  const options = {
    responsive: true,
    plugins: {
      colors: {
        enable: true,
      },
      legend: {
        display: true,
        position: "right" as const,
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "second",
        },
      },
    },
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header name="Júnior" />

        <main>
          <Input value={eventsText} onChange={setEventsText} />

          <section style={{ position: "relative" }}>
            <Chart data={chartData} options={options} />
          </section>
        </main>

        <Footer plotChart={handlePlotChart} />
      </div>
    </>
  );
}

export default App;
