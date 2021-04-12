export interface Filter {
  genre: string;
  status: string;
  publishedAt: string;
}

export function Filter(params: Partial<Filter>) {
  return {

  } as Filter;
}
