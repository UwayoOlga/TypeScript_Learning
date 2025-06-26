type  UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<number>>;
type B = UnwrapPromise<string>;
