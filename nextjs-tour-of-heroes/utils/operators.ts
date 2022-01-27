import { from, Observable, pipe, switchMap, take, UnaryFunction } from 'rxjs';

export function mapToObject<T>(): UnaryFunction<Observable<Response>, Observable<T>> {
  return pipe(
    take(1),
    switchMap(resp => from(resp.json())),
  );
}
