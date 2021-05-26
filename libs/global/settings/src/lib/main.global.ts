import { environment } from '@awread/global/environments';
import { debounceTime } from 'rxjs/operators';
import { persistState } from '@datorama/akita';

const storage = persistState({
  include: ['current-user'],
  preStorageUpdateOperator: () => debounceTime(2000)
});

const providers = [{ provide: 'persistStorage', useValue: storage }];


export function customMain() {

  return { environment, providers };
}