type IsArray<T> = T extends any[] ? true : false;

type Test1 = IsArray<number[]>;
type Test2 = IsArray<string>;
