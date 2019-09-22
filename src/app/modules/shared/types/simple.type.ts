// region simple types

export type Timestamp = number

export type Uuid = string

export type OrderStatus = 'READY_FOR_PICKUP' | 'AWAIT_FULFILMENT_APPROVE' | 'DECLINED_FROM_FULFILMENT_REQUEST' |
  'PICKED_UP' | 'RECEIVED' | 'ROLLBACK_FROM_PICKUP' | 'ON_CALL' | 'RECALL' | 'CALLS_LIMIT_EXCEEDED' | 'CONFIRMED' |
  'COURIER_ASSIGNED' | 'DELIVERING' | 'DELIVERED' | 'CLOSED' | 'DELIVERING_LIMIT_EXCEEDED' | 'DELIVERY_RESCHEDULE' |
  'DELIVERY_RESCHEDULED' | 'RETURN' | 'RETURNED'

export type PickupStatus = 'DRAFT' | 'REMOVED' | 'AWAIT_COURIER' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED'

// endregion

// region address types

export interface RussianAddress {
  [i: string]: any
  type: 'RUSSIAN'
  country: string | null
  region: string
  city: string
  postcode: number | null
  street : string
  home : string | null
  flat : number | null
  metro : string | null
}

// just for example
export interface FoobarAddress {
  type: 'FOOBAR',
  barfoo: string
}

export type Address = RussianAddress | FoobarAddress;

// endregion
