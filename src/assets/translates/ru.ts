export const RU = () => {
  return {
    COMMON: {
      YES: 'Да',
      CANCEL: 'Отмена',
      CLOSE: 'Закрыть',
      GEO_TITLE: 'Гео',
      LANGUAGE: 'Язык',

      TABS: {
        ORDER: 'Заказы',
        PICKUP: 'Пикапы',
        PROFILE: 'Профиль'
      },

      BINDING_TYPE: {
        EMPTY: 'Нет принадлежности',
        BRANCH: 'Филиал',
        REGION: 'Регион',
        COUNTRY: 'Страна',
        GLOBAL: 'Глобальная'
      },

      VEHICLE_TYPE: {
        CAR: 'Машина',
        SCOOTER: 'Скутер',
        BIKE: 'Байк',
        ON_FOOT: 'Пешком'
      }
    },

    LOGIN_FORM: {
      LOGIN: "Логин",
      PASSWORD: "Пароль",
      SIGN_IN_BUTTON: "Войти",
      ERROR: {
        EMPTY: 'Пожалуйста, заполните все поля',
        INVALID_CREDENTIALS: 'Неверный логин или пароль'
      }
    },

    ORDER: {
      TITLE: 'Заказы',
      STATUS: {
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
        CANCELLED: 'Заказ отменен',
        BOUGHT_OUT: 'Заказ выкуплен',
        DELIVERING_LIMIT_EXCEEDED: 'Превышен лимит доставок',
        DELIVERY_RESCHEDULE: 'Запрошен перенос доставки',
        DELIVERY_RESCHEDULED: 'Заказ перенесен',
        RETURN: 'Запрошен возврат заказа',
        RETURNED: 'Заказ возвращен на склад'
      },

      HEADER: {
        STATUS_TITLE: 'Статус заказов',
        NO_STATUSES: 'Нет статусов'
      },

      CONTENT: {
        TITLE_ADDRESS:'Адрес:',
        DELIVERY_DATE: {
          TITLE: 'Дата доставки:',
          ABSENT: 'Не указана',
          FROM: 'С',
          TO: 'По',
          UNTIL: 'До'
        },

        DETAIL_BUTTON: 'Подробнее'
      },

      PAGE: {
        EMPTY: 'Нет информации о заказе',
        DELIVERY_DATE: 'Дата доставки',
        TRACK: 'Трек номер',
        CLIENT: 'Клиент',
        PHONE: 'Телефон',
        ADDRESS: 'Адрес',
        COST: 'Стоимость'
      }
    },

    PICKUP: {
      STATUS: {
        DRAFT: 'Черновой пикап',
        REMOVED: 'Пикап удален',
        AWAIT_COURIER: 'Ожидает назначения курьера',
        PROCESSING: 'В процессе доставки',
        COMPLETED: 'Пикап завершен',
        CANCELLED: 'Пикап был отменен менеджером'
      }
    },

    PROFILE: {
      HEADER: {
        LOGOUT_BUTTON: 'Выйти',
        LOGOUT_WARNING_MESSAGE: 'Вы действительно хотите выйти?'
      },

      CONTENT: {
        TITLE_LOGIN: 'Логин:',
        TITLE_EMAIL: 'Email:',
        TITLE_PHONE: 'Телефон:',
        TITLE_CREATED_AT: 'Дата регистрации:',
        TITLE_BINDING_TYPE: 'Принадлежность:',
        TITLE_VEHICLE: 'Тип транспорта:',
        TITLE_VEHICLE_LOAD_CAPACITY: 'Грузоподъемность:',
        TITLE_VEHICLE_LUGGAGE_CAPACITY: 'Вместимость багажа:',
        TITLE_GIVEN_THINGS: 'Выданные вещи:'
      }
    },

    OTHER: {
      NOTIFIER: {
        UNKNOWN_ERROR: 'Неизвестная ошибка'
      }
    }
  }
}
