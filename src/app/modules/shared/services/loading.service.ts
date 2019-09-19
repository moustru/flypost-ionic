import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class LoadingService {

  private _active = new BehaviorSubject<boolean>(false)

  get isActive(): Observable<boolean> {
    return this._active
  }

  activate(): void {
    this._active.next(true)
  }

  deactivate(): void {
    this._active.next(false)
  }

  toggle(): void {
    this._active.next(!this._active.value)
  }

  action(callback: () => void) {
    this.activate()

    try {
      callback()
    } finally {
      this.deactivate()
    }
  }
}
