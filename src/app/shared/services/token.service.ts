export class TokenService {
  private readonly USER_TOKEN = 'USER-TOKEN';
  private readonly USER_ROLES = 'USER_ROLE';

  findToken(): string | null {
    return localStorage.getItem(this.USER_TOKEN)
  }

  getRoles(): string[] {
    const jsonRoles = localStorage.getItem(this.USER_ROLES)

    if (!jsonRoles) {
      throw new Error(`Store doesn't contains roles`)
    }

    return JSON.parse(jsonRoles) as string[]
  }

  hasToken(): boolean {
    return null === this.findToken();
  }

  store(token: string, roles: string[]) {
    localStorage.setItem(this.USER_TOKEN, token)
    localStorage.setItem(this.USER_ROLES, JSON.stringify(roles))
  }

  clear() {
    localStorage.removeItem(this.USER_TOKEN)
    localStorage.removeItem(this.USER_ROLES)
  }
}
