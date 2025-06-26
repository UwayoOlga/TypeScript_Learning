type flatten<T> = T extends (infer U)[] ? U : T;

type E = flatten<string[]>;
type F = flatten<number[][]>;
