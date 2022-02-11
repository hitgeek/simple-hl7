import { Header } from "./header";
import { Segment } from "./segment";

export declare class Message<T = any> {
  constructor(...args: T[]);
  header: Header;
  segments: Segment[];
  getSegment(name: string): Segment | undefined;
  getSegments(name: string): Segment[];
  addSegment<U>(...args: U[]): Segment;
  log(): string;
  toString(): string;
}
