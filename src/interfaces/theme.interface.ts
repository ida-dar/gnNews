export interface Main {
  [key: string]: string;
}

export interface Colors extends Main {}

export interface Font {
  [key: string]: string | Size;
  size: Size;
}

export interface Size extends Main {}
