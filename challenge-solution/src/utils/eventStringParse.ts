import { Event } from "../interfaces/Event";

/**
 * Utility function that converts json text input to a
 * Array of objects from the Events interface and its derivatives.
 */
export const eventStringParse = (text: string): Array<Event> => {
  const lines = text.split("\n");
  return lines.map((line) => {
    // eslint-disable-next-line no-eval
    return eval(`(${line})`);
  });
};
