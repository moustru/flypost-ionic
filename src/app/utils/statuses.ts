export function statusOrders(s) {
    switch(s) {
        case 'READY_FOR_PICKUP': return 'Готов к пикапу'
        case 'PICKED_UP': return 'Присоединен к пикапу'
        case 'RECEIVED': return 'Заказ получен'
        case 'ON_CALL': return 'На прозвоне'
        case 'CONFIRMED': return 'Заказ подтвержден'
        case 'COURIER_ASSIGNED': return 'Заказ назначен на курьера'
        case 'DELIVERED': return 'Доставлено получателю'
        case 'NOT_DELIVERED': return 'Не доставлено получателю'
        case 'CLOSED': return 'Заказ закрыт'
        case 'ROLLBACK_FROM_PICKUP': return 'Отменен из пикапа'
        case 'DECLINED_FROM_FULFILMENT_REQUEST': return 'Отменен из фулфилмент заявки'
        case 'CALLS_LIMIT_EXCEEDED': return 'Превышен лимит'
        case 'CANCEL_AFTER_CALL': return 'Клиент отменил доставку'
        case 'RECALL': return 'Перезвон'
        case 'AWAIT_FULFILMENT_APPROVE': return 'Ожидание подтверждения фулфилмент заявки'
        case 'DELIVERING_LIMIT_EXCEEDED': return 'Превышен лимит доставок'
    }
}
  
export function statusFulfilments(s) {
    switch(s) {
        case 'AWAIT_APPROVE': return 'Ожидает подтверждения'
        case 'APPROVED': return 'Подтверждена'
        case 'DECLINED': return 'Отменена'
        default: return 'Все'
    }
}
  
export function statusPickups(s) {
    switch(s) {
        case 'DRAFT': return 'Черновой пикап'
        case 'REMOVED': return 'Пикап удален'
        case 'AWAIT_COURIER': return 'Ожидает назначения курьера'
        case 'PROCESSING': return 'В процессе доставки'
        case 'COMPLETED': return 'Пикап завершен'
        case 'CANCELLED': return 'Пикап был отменен менеджером'
        default: return 'Все'
    }
}

export function statusCouriers(s) {
    switch(s) {
        case 'COURIER_ASSIGNED': return 'Заказ назначен на курьера'
        case 'DELIVERED': return 'Доставлено получателю'
        case 'NOT_DELIVERED': return 'Не доставлено получателю'
        case 'DELIVERING_LIMIT_EXCEEDED': return 'Превышен лимит доставок'
    }
}