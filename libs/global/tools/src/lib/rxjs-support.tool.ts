import { interval, MonoTypeOperatorFunction, Observable, OperatorFunction, pipe } from "rxjs";
import { map, switchMap, take, tap } from "rxjs/operators";
import { EntityStore } from '@datorama/akita';
export function log<T>(source$: Observable<T>): Observable<T> {
    return source$.pipe(tap(v => console.log(`log:`, v)));
}

export function lon<T>(name: string): MonoTypeOperatorFunction<T> {
    return pipe(tap(v => console.log(`logWithName(${name}):`, v)));
}

export interface PageInfo {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
}

export interface GraphileResult {
    pageInfo: PageInfo,
    totalCount: number;
    nodes: any[];
}

export function updatePageInfo<T>(akitaEntityStore): OperatorFunction<GraphileResult, any[]> {
    return source$ => source$.pipe(
        map((graphileResponse) => {
            console.log('graphileResponse', graphileResponse);
            akitaEntityStore.update({ pageInfo: graphileResponse.pageInfo, totalCount: graphileResponse.totalCount });
            return graphileResponse.nodes;
        }),
    );
}

export function pageInfoToAkita<T>(akitaEntityStore, fn, action: 'set' | 'add' | 'upsert' = 'set'): OperatorFunction<T, any[]> {
    return source$ => source$.pipe(
        tap(() => akitaEntityStore.setLoading(true)),
        switchMap(fn),
        updatePageInfo(akitaEntityStore),
        tap((books) => akitaEntityStore[action](books)),
        tap(() => akitaEntityStore.setLoading(false))
    );
}
