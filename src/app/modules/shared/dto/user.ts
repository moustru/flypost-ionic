import { Timestamp, Uuid } from "shared/types/simple.type";
import { BindingOutput } from "shared/dto/common";

export interface UserOutput {
  id: Uuid
  username: string
  login: string
}

export interface UserAdditionalOutput {
  isActivated: boolean
  createdAt: Timestamp
  updatedAt: Timestamp | null
}

export interface UserRolesOutput {
  roles: string[]
}

export interface UserBindingsOutput {
  bindingType: 'EMPTY' | 'BRANCH' | 'REGION' | 'COUNTRY' | 'GLOBAL'
  bindings: BindingOutput[]
}
