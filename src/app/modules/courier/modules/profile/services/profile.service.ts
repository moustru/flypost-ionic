import { HttpClient } from "@angular/common/http";
import { ProfileInjectable } from "courier/modules/profile/profile-service.module";
import { UserAdditionalOutput, UserBindingsOutput, UserOutput } from "shared/dto/user";
import { Observable } from "rxjs";

@ProfileInjectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<CourierProfileOutput> {
    return this.http.get<CourierProfileOutput>('courier/profile')
  }

  updateProfile(input: CourierUpdateProfileInput): Observable<CourierProfileOutput> {
    return this.http.put<CourierProfileOutput>('courier/profile', input)
  }

}

export type CourierProfileOutput = UserOutput & UserAdditionalOutput & UserBindingsOutput & {
  email: string
  phone: string
  givenThings?: string
  vehicle: VehicleOutput
}

export interface CourierUpdateProfileInput {
  username: string
  vehicle: VehicleOutput
}

export interface VehicleOutput {
  type: 'CAR' | 'SCOOTER' | 'BIKE' | 'ON_FOOT'
  loadCapacity?: number
  luggageCapacity?: number
}
