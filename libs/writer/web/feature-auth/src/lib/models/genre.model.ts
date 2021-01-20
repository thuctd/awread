export interface Genre {
  genreid: string;
  name: string;
}

export function createGenreObject(params: Partial<Genre>) {
  return {} as Genre;
}
