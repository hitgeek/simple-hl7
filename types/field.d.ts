import { Delimiters } from "./delimiters";

export declare class Field<T = any> {
  constructor(...args: T[]);
  constructor(...args: T[][]);
  value: (T | T[])[];
  toString(delimiters: Delimiters): string;
}
