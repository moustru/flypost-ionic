import { Uuid } from "shared/types/simple.type";

export interface TokenInput {
  login: string
  password: string
}

export interface TokenOutput {
  userId: Uuid
  token: string
  roles: string[]
}
