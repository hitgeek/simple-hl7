import { Delimiters } from "./delimiters";
import { Field } from "./field";
import { FieldValue } from "./segment";

export declare class Header {
  name: string;
  delimiters: Delimiters;
  fields: (Field | Field[])[];
  addField<T = any>(fieldValue: FieldValue<T>, position?: number): void;
  setField<T>(index: number, fieldValue: FieldValue<T>): void;
  removeField(index: number): void;
  getField(index: number, repeatIndex?: number): string;
  getComponent(
    fieldIndex: number,
    componentIndex: number,
    subComponentIndex?: number
  ): string;
  toString(): string;
}
