import { HttpClient } from "@angular/common/http";
import { Criteria } from "shared/utils/criteria";
import { Observable } from "rxjs";
import { SharedInjectable } from "shared/shared-service.module";
import { BindingOutput } from "shared/dto/common";

@SharedInjectable()
export class BindingService {

  constructor(private http: HttpClient) { }

  getBranches(criteria?: Criteria): Observable<BindingOutput[]> {
    return this.http.get<BindingOutput[]>(`bindable-user/branches?criteria=${criteria || ''}`)
  }
}
