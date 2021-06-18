import { environment } from '@awread/global/environments';
import { debounceTime } from 'rxjs/operators';
import { persistState } from '@datorama/akita';
import { PlausibleService } from '@awread/global/packages';


const storage = persistState({
  include: ['current-user'],
  preStorageUpdateOperator: () => debounceTime(500)
});

const providers = [{ provide: 'persistStorage', useValue: storage }];


export function customMain() {

  return { environment, providers };
}