import { SharedInjectable } from "shared/shared.module";
import { OrderStatus, PickupStatus } from "shared/types/simple.type";


@SharedInjectable()
export class StatusTranslatorService {
  translateOrder(status: OrderStatus): string {
    return this.translateOrGetDefault(status, orderStatusTranslates)
  }

  translatePickup(status: PickupStatus): string {
    return this.translateOrGetDefault(status, pickupStatusTranslates, 'Все')
  }

  private translateOrGetDefault(status: OrderStatus | PickupStatus, translates: any, defaultValue: string = 'Неопределенный статус') {
    return status in translates
      ? translates[status]
      : defaultValue
  }
}

export function translateOrderStatus(status: OrderStatus): string {
  return translateOrGetDefault(status, orderStatusTranslates)
}

export function translatePickupStatus(status: PickupStatus): string {
  return translateOrGetDefault(status, pickupStatusTranslates, 'Все')
}

function translateOrGetDefault(status: OrderStatus | PickupStatus, translates: any, defaultValue: string = 'Неопределенный статус'): string {
  return status in translates
    ? translates[status]
    : defaultValue
}

const orderStatusTranslates = {
  READY_FOR_PICKUP: 'Готов к пикапу',
  AWAIT_FULFILMENT_APPROVE: 'Ожидание подтверждения фулфилмент заявки',
  DECLINED_FROM_FULFILMENT_REQUEST: 'Отменен из фулфилмент заявки',
  PICKED_UP: 'Присоединен к пикапу',
  RECEIVED: 'Заказ получен',
  ROLLBACK_FROM_PICKUP: 'Отменен из пикапа',
  ON_CALL: 'На прозвоне',
  RECALL: 'Перезвон',
  CALLS_LIMIT_EXCEEDED: 'Превышен лимит',
  CONFIRMED: 'Заказ подтвержден',
  COURIER_ASSIGNED: 'Заказ назначен на курьера',
  DELIVERING: 'В процессе доставки',
  DELIVERED: 'Доставлено получателю',
  CLOSED: 'Заказ закрыт',
  DELIVERING_LIMIT_EXCEEDED: 'Превышен лимит доставок',
  DELIVERY_RESCHEDULE: 'Запрошен перенос доставки',
  DELIVERY_RESCHEDULED: 'Заказ перенесен',
  RETURN: 'Запрошен возврат заказа',
  RETURNED: 'Заказ возвращен на склад'
}

const pickupStatusTranslates = {
  DRAFT: 'Черновой пикап',
  REMOVED: 'Пикап удален',
  AWAIT_COURIER: 'Ожидает назначения курьера',
  PROCESSING: 'В процессе доставки',
  COMPLETED: 'Пикап завершен',
  CANCELLED: 'Пикап был отменен менеджером'
}
