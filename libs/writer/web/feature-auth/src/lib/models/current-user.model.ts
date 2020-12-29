import { ID } from '@datorama/akita';

export interface CurrentUser {
  id: ID;
}

export function CurrentUser(params: Partial<CurrentUser>) {
  return {

  } as CurrentUser;
}
