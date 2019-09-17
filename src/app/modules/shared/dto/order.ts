import { Address, OrderStatus, Timestamp, Uuid } from "../types/simple.type";

export interface OrderOutput {
  id: Uuid
  cost: number
  track: string
  status: string
  comment: string | null
  recipient: RecipientOutput
  createdAt: Timestamp
  updatedAt: Timestamp
  deliveryDateFrom: Timestamp | null
  deliveryDateTo: Timestamp | null
  phone: PhoneOutput
  additionalPhones: PhoneOutput[]
}

export interface OrderDeliveryInfoOutput {
  deliveryAttemptsLimit: number
  $deliveryAttemptsCount: number
  deliveryFailReasons: FailDeliveryReasonOutput[]
}

export interface OrderLineItemOutput {
  lineItems: LineItemOutput[]
}

export interface OrderCountOutput {
  status: OrderStatus
  count: number
}

export interface LineItemOutput {
  name: string
  quantity: number
}

export interface FailDeliveryReasonOutput {
  id: Uuid
  reason: ReasonOutput
  comment: string | null
}

export interface ReasonOutput {
  id: Uuid
  type: 'DELIVERY' | 'CLOSE_MANAGER' | 'CLOSE_OPERATOR' | 'CLOSE_CUSTOMER' | 'RETURN_COURIER'
}

export interface RecipientOutput {
  name: string
  address: Address
}

export interface PhoneOutput {
  number: string
  description: string | null
}
