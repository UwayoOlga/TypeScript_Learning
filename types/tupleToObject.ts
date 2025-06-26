type TupleToObject<T extends readonly string[]> = {
    [K in T[number]]: K;
};

type Roles = ['editor', 'Viewer'];

type RoleObj = TupleToObject<Roles>;

console.log("Run `tsc`");