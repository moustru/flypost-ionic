import { Uuid } from "shared/types/simple.type";

export interface Paginated<T> {
  total: number
  page: number
  data: T[]
}

export interface BindingOutput {
  id: Uuid;
  name: string
  type: 'BRANCH' | 'REGION' | 'COUNTRY'
  owner?: BindingOutput
}
