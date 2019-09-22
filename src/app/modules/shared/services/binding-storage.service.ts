import { Uuid } from "shared/types/simple.type";
import { SharedInjectable } from "shared/shared-service.module";

export interface Context {
  type: 'BRANCH' | 'REGION' | 'COUNTRY'
  identifiers: Uuid[]
}

@SharedInjectable()
export class BindingStorageService {

  private readonly CONTEXT_KEY = 'CONTEXT'

  store(context: Context): void {
    localStorage.setItem(this.CONTEXT_KEY, JSON.stringify(context))
  }

  getContext(): Context {
    if (!this.hasContext()) {
      throw new Error('Context was not found')
    }

    return JSON.parse(localStorage.getItem(this.CONTEXT_KEY)!) as Context
  }

  hasContext(): boolean {
    return !!localStorage.getItem(this.CONTEXT_KEY)
  }

}
