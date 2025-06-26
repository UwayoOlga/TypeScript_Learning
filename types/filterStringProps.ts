type filterStringProps<T> ={
    [K in keyof T as T[K] extends string ? K : never]: T[K]
};

type Person = {
    name: string;
    age: number;
    email: string;
};
type Result = filterStringProps<Person>;