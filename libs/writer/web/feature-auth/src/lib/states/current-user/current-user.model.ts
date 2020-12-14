import { ID } from '@datorama/akita';

export interface CurrentUser {
  id: ID;
}

export function createCurrentUser(params: Partial<CurrentUser>) {
  return {

  } as CurrentUser;
}
