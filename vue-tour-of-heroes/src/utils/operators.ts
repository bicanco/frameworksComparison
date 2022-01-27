import { AxiosResponse } from "axios";
import { map, Observable, pipe, take, UnaryFunction } from "rxjs";

export function mapToData<T>(): UnaryFunction<
  Observable<AxiosResponse>,
  Observable<T>
> {
  return pipe(
    take(1),
    map((resp) => resp.data)
  );
}
