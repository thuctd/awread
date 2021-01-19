export interface Category {
  categoryid: string;
  name: string;
  description: string;
}

export function createCategoryObject(params: Partial<Category>) {
  return {} as Category;
}
