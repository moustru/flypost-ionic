export const EN = () => {
  return {
    COMMON: {
      TITLE: 'Flypost',
      YES: 'Yes',
      CANCEL: 'Cancel',
      GEO_TITLE: 'Geo',
      LANGUAGE: 'Language',

      TABS: {
        ORDER: 'Orders',
        PICKUP: 'Pickups',
        PROFILE: 'Profile'
      },

      BINDING_TYPE: {
        EMPTY: 'Empty',
        BRANCH: 'Branch',
        REGION: 'Region',
        COUNTRY: 'Country',
        GLOBAL: 'Global'
      },

      VEHICLE_TYPE: {
        CAR: 'Car',
        SCOOTER: 'Scooter',
        BIKE: 'Bike',
        ON_FOOT: 'On foot'
      }
    },

    LOGIN_FORM: {
      LOGIN: 'Login',
      PASSWORD: 'Password',
      SIGN_IN_BUTTON: 'Sign in',
      ERROR: {
        EMPTY: 'Please, fill all fields',
        INVALID_CREDENTIALS: 'Invalid login or password'
      }
    },

    ORDER: {
      STATUS: {
        READY_FOR_PICKUP: 'Ready for pickup',
        AWAIT_FULFILMENT_APPROVE: 'Await fulfilment approve',
        DECLINED_FROM_FULFILMENT_REQUEST: 'Fulfilment cancelled',
        PICKED_UP: 'Assigned to pickup',
        RECEIVED: 'Order received',
        ROLLBACK_FROM_PICKUP: 'Rolled back from pickup',
        ON_CALL: 'On call',
        RECALL: 'Recall',
        CALLS_LIMIT_EXCEEDED: 'Calls limit exceeded',
        CONFIRMED: 'Order confirmed',
        COURIER_ASSIGNED: 'Assigned to courier',
        DELIVERING: 'Delivering',
        DELIVERED: 'Delivered',
        CANCELLED: 'Order cancelled',
        BOUGHT_OUT: 'Order bought out',
        DELIVERING_LIMIT_EXCEEDED: 'Delivery limit exceeded',
        DELIVERY_RESCHEDULE: 'Request delivery reschedule',
        DELIVERY_RESCHEDULED: 'rescheduled',
        RETURN: 'Request return',
        RETURNED: 'returned'
      },

      HEADER: {
        STATUS_TITLE: 'Order status'
      },

      CONTENT: {
        TITLE_ADDRESS:'Address:',
        DELIVERY_DATE: {
          TITLE: 'Delivery date:',
          ABSENT: 'Absent',
          FROM: 'From',
          TO: 'To',
          UNTIL: 'Until'
        },

        DETAIL_BUTTON: 'Details'
      }
    },

    PICKUP: {
      STATUS: {
        DRAFT: 'Draft',
        REMOVED: 'Deleted',
        AWAIT_COURIER: 'Awaits courier assignment',
        PROCESSING: 'Delivering',
        COMPLETED: 'Completed',
        CANCELLED: 'Cancelled by manager'
      }
    },

    PROFILE: {
      HEADER: {
        LOGOUT_BUTTON: 'Sign out',
        LOGOUT_WARNING_MESSAGE: 'Are you sure want to sign out?'
      },

      CONTENT: {
        TITLE_LOGIN: 'Login:',
        TITLE_EMAIL: 'Email:',
        TITLE_PHONE: 'Phone:',
        TITLE_CREATED_AT: 'Registration date:',
        TITLE_BINDING_TYPE: 'Accessory:',
        TITLE_VEHICLE: 'Vehicle type:',
        TITLE_VEHICLE_LOAD_CAPACITY: 'Load capacity:',
        TITLE_VEHICLE_LUGGAGE_CAPACITY: 'Luggage capacity:',
        TITLE_GIVEN_THINGS: 'Given things:'
      }
    },

    OTHER: {
      NOTIFIER: {
        UNKNOWN_ERROR: 'Unknown error'
      }
    }
  }
}
