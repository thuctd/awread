export interface Filter {
  genre: string;
  status: string;
  publishedat: string;
}

export function Filter(params: Partial<Filter>) {
  return {

  } as Filter;
}
