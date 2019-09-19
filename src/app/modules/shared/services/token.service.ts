import { Uuid } from "shared/types/simple.type";
import { SharedInjectable } from "shared/shared.module";

@SharedInjectable()
export class TokenService {
  private readonly USER_TOKEN_KEY = 'USER_TOKEN';
  private readonly USER_ID_KEY = 'USER_ID';
  private readonly USER_ROLES_KEY = 'USER_ROLE';

  get token(): string {
    if (!this.hasToken()) {
      throw new Error('Bearer token was not found!')
    }

    return localStorage.getItem(this.USER_TOKEN_KEY)!
  }

  get userId(): Uuid {
    if (!this.hasToken()) {
      throw new Error('User id was not found!')
    }

    return localStorage.getItem(this.USER_ID_KEY) as Uuid
  }

  get roles(): string[] {
    const jsonRoles = localStorage.getItem(this.USER_ROLES_KEY)

    if (!jsonRoles) {
      throw new Error(`Store doesn't contain roles`)
    }

    return JSON.parse(jsonRoles) as string[]
  }

  hasToken(): boolean {
    return !!localStorage.getItem(this.USER_TOKEN_KEY)
  }

  hasUserId(): boolean {
    return !!localStorage.getItem(this.USER_ID_KEY)
  }

  store(token: string, userId: Uuid, roles: string[]): void {
    localStorage.setItem(this.USER_TOKEN_KEY, token)
    localStorage.setItem(this.USER_ID_KEY, userId)
    localStorage.setItem(this.USER_ROLES_KEY, JSON.stringify(roles))
  }

  clear(): void {
    localStorage.removeItem(this.USER_TOKEN_KEY)
    localStorage.removeItem(this.USER_ROLES_KEY)
    localStorage.removeItem(this.USER_ID_KEY)
  }
}
