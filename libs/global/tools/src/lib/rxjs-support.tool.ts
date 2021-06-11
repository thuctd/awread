import { interval, MonoTypeOperatorFunction, Observable, OperatorFunction, pipe } from "rxjs";
import { map, switchMap, take, tap } from "rxjs/operators";
import { EntityStore } from '@datorama/akita';
export function log<T>(source$: Observable<T>): Observable<T> {
    return source$.pipe(tap(v => console.log(`log: ${v}`)));
}

export function lon<T>(name: string): MonoTypeOperatorFunction<T> {
    return pipe(tap(v => console.log(`logWithName(${name}): ${v}`)));
}

export interface GraphileResult {
    pageInfo: {
        hasNextPage: boolean
    },
    totalCount: number,
    nodes: any[]
}

export function paginationPageInfo<T>(akitaEntityStore): OperatorFunction<GraphileResult, any[]> {
    return source$ => source$.pipe(
        map((graphileResponse) => {
            console.log('graphileResponse', graphileResponse);
            akitaEntityStore.update({ hasNextPage: graphileResponse.pageInfo.hasNextPage, totalCount: graphileResponse.totalCount });
            return graphileResponse.nodes;
        }),
    );
}

export function paginationCombo<T>(akitaEntityStore, fn): OperatorFunction<T, any[]> {
    return source$ => source$.pipe(
        tap(() => akitaEntityStore.setLoading(true)),
        switchMap(fn),
        paginationPageInfo(akitaEntityStore),
        tap((books) => akitaEntityStore.set(books)),
        tap(() => akitaEntityStore.setLoading(false))
    );
}
