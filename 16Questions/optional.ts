/*Task: Create a mapped type PartialWithExceptions<T, K> such that all properties in T are optional except those in union K, which stay required.
Example:
interface Config {
  host: string;
  port: number;
  timeout: number;
}
type PartialConfig = PartialWithExceptions<Config, 'host'>;
// host must be present; port and timeout are optional */

type PartialWithExceptions<T, K extends keyof T> =
  Partial<Omit<T, K>> & Required<Pick<T, K>>;
/*
Partial<Omit<T, K>>
Makes the remaining keys optional.

✅ Pick<T, K>
Keeps only the keys in K from T.

✅ Required<Pick<T, K>>
Ensures the keys in K are required.

✅ The & (intersection)
Combines the two types:

Optional properties (not in K)

Required properties (in K
*/