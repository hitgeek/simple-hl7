import { Delimiters } from "./delimiters";

export declare class Component {
  constructor(...args: string[]);
  toString(delimiters: Delimiters): string;
  value: string[];
}
