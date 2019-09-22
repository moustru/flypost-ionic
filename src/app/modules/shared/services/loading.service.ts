import { BehaviorSubject, Observable } from "rxjs";
import { RootInjectable } from "shared/shared-service.module";
import { map } from "rxjs/operators";

@RootInjectable()
export class LoadingService {

  private _stack = new BehaviorSubject<number>(0)

  get isActive(): Observable<boolean> {
    return this._stack.pipe(map(stacked => stacked > 0))
  }

  stack(): void {
    this._stack.next(this._stack.value + 1)
  }

  unstack(): void {
    this._stack.next(this._stack.value - 1)
  }

  func(callback: () => void) {
    this.stack()

    try {
      callback()
    } finally {
      this.unstack()
    }
  }

  action<TResult>(callback: () => TResult) {
    this.stack()

    try {
      return callback()
    } finally {
      this.unstack()
    }
  }
}
