import { Delimiters } from "./delimiters";
import { Field } from "./field";

export declare class Segment {
  name: string;
  fields: Field[] | Field[][];
  addField<T = any>(fieldValue: FieldValue<T>, position?: number): void;
  setField<T>(index: number, fieldValue: FieldValue<T>): void;
  removeField(index: number): void;
  getField(index: number, repeatIndex?: number): string;
  getComponent(
    fieldIndex: number,
    componentIndex: number,
    subComponentIndex?: number
  ): string;
  setComponent<T>(
    fieldIndex: number,
    componentIndex: number,
    value: ComponentValue<T>
  ): void;
  toString(delimiters: Delimiters): string;
}

export type ComponentValue<T> = FieldValue<T>;

export type FieldValue<T> =
  | string
  | Record<string | number | symbol, unknown>
  | Array<T>
  | T;
