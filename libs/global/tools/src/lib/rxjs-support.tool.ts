import { interval, MonoTypeOperatorFunction, Observable, OperatorFunction, pipe } from "rxjs";
import { map, take, tap } from "rxjs/operators";
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

export function paginationPageInfo<T>(store): OperatorFunction<GraphileResult, any[]> {
    return source$ => source$.pipe(
        map((graphileResponse) => {
            console.log('graphileResponse', graphileResponse);
            store.update({ hasNextPage: graphileResponse.pageInfo.hasNextPage, totalCount: graphileResponse.totalCount });
            return graphileResponse.nodes;
        }),
    );
}
