import { Component } from "./component";
import { Delimiters } from "./delimiters";
import { Field } from "./field";
import { Header } from "./header";
import { Message } from "./message";
import { Segment } from "./segment";

export declare class Parser {
  constructor(opts: ParserOptions);
  message: Message | null;
  delimiters: Delimiters;

  parse(s: string): Message;
  parseFile(path: string, callback: (data: string) => void): void;
  parseFileSync(path: string): string;
  parseHeader(s: string): Header;
  parseSegment(s: string): Segment;
  parseField(s: string): Field;
  parseComponent(s: string): Component;
}

export type ParserOptions = string | { segmentSeperator: string };
