export interface Event {
  timestamp: number;
  type: string;
}

export interface StartEvent extends Event {
  type: "start";
  select: Array<string>;
  group: Array<string>;
}

export interface StopEvent extends Event {
  type: "stop";
}

export interface SpanEvent extends Event {
  type: "span";
  begin: number;
  end: number;
}

export interface DataEvent extends Event {
  type: "data";
  [field: string]: string | number;
}
