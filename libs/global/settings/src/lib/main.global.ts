import { environment } from '@awread/global/environments';
import { debounceTime } from 'rxjs/operators';
import { persistState } from '@datorama/akita';
import Plausible from 'plausible-tracker'

if (environment.production) {
  const plausible = Plausible({
    domain: 'awread.vn',
    apiHost: '/plausible'
  })
}


const storage = persistState({
  include: ['current-user'],
  preStorageUpdateOperator: () => debounceTime(500)
});

const providers = [{ provide: 'persistStorage', useValue: storage }];


export function customMain() {

  return { environment, providers };
}