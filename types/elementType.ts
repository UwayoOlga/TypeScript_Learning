type ElementType<T> = T extends (infer U)[] ? U : T;
type C  = ElementType<number[]>;
type D = ElementType<boolean>;
