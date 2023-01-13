import { DataValidationError } from "../errors/DataValidationError";
import { SerieValidationError } from "../errors/SerieValidationError";
import {
  DataEvent,
  Event,
  SpanEvent,
  StartEvent,
  StopEvent,
} from "../interfaces/Event";
import { parseSnakeCase } from "../utils/parseSnakeCase";

export type ChartData = {
  label: string | number;
  data: Array<{
    x: number | string | Date;
    y: number | string | Date;
  }>;
};

export type Datasets = {
  datasets: Array<ChartData>;
};

/**
 * Converts the array of events to the ChartData type for plotting
 *  the graphic.
 */
export const getChartData = (
  startEvent: StartEvent,
  events: Array<DataEvent>
): Array<ChartData> => {
  const datasets: {
    [k: string]: ChartData;
  } = {};
  // console.log(events);

  for (const event of events) {
    const groups = startEvent.group.map((groupName) => {
      const group = event[groupName];
      if (!group) {
        throw new DataValidationError("All data must have the defined groups");
      } else {
        return group;
      }
    });
    // console.log(groups);

    const generatedSelectors = startEvent.select.map((select) => {
      return [...groups, select];
    });
    // console.log(generatedSelectors);

    for (const selector of generatedSelectors) {
      const sid = selector.join("_");
      const [field] = selector.slice(-1);
      if (!datasets[sid]) {
        datasets[sid] = {
          label: selector.map((s) => parseSnakeCase(`${s}`)).join(" "),
          data: [],
        };
      }
      if (!event[field]) {
        throw new DataValidationError("All data must have the selected fields");
      }
      datasets[sid].data.push({ x: event.timestamp, y: event[field] });
    }
  }

  // console.log("datasets: ", datasets);
  return Object.values(datasets);
};

/**
  * Processes data entry, separating by event types and
  * generating errors when necessary.

  * Returns an Array of objects of type ChartData
      type ChartData = {
        label: string | number;
        data: Array<{
          x: number | string | Date;
          y: number | string | Date;
        }>;
      };
 *
 */
export const processEvents = (events: Array<Event>) => {
  const startEvent = events.find((e) => e.type === "start") as StartEvent;
  const stopEvent = events.find((e) => e.type === "stop") as StopEvent;
  const spanEvent = events.find((e) => e.type === "span") as SpanEvent;

  if (!startEvent || !stopEvent) {
    throw new SerieValidationError("Missing start or stop event");
  }

  if (stopEvent.timestamp < startEvent.timestamp) {
    throw new SerieValidationError(
      "Start event's timestamp smaller than stop event's timestamp"
    );
  }

  /**
  * Groups valid "date" type entries and calls the getChartData
  * function generating errors when necessary.

  * Returns an Array of objects of type ChartData
*/
  const chartData = getChartData(
    startEvent,
    events.filter((e) => {
      return (
        e.type === "data" &&
        e.timestamp >= spanEvent.begin &&
        e.timestamp <= spanEvent.end
      );
    }) as Array<DataEvent>
  );
  // console.log(chartData);

  return { chartData };
};
