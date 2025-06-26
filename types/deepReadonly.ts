type DeepReadonly<T> ={
    readonly [K in keyof T ]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};
type User = {
    name: string;
    address: {
        city: string;
    };
};
type ReadonlyUser = DeepReadonly<User>;