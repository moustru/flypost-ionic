import { Injectable } from "@angular/core";
import axios from 'axios';

export interface Order {
    id: string,
    cost: number,
    status: string,
    recipient: Object,
    track: string,
    lineItems: Object[],
    createdAt: number,
    deliveryAttemptsCount: number,
    deliveryAttemptsLimit: number,
    deliveryDateFrom: number,
    deliveryDateTo: number,
    comment?: string,
    deliveryFailReasons?: Object[]
}

export interface Status {
    status: string,
    count: number
}

@Injectable({ providedIn: 'root' })
export class OrdersService {
    public orders: Order[] = []
    public statuses: Status[] = []

    constructor() {}

    async getStatuses() {
        return await axios.get<any>('courier/orders-count').then(res => this.statuses = res.data)
    }

    async getOrders(status) {
        let res = await axios.get('courier/orders', {
            params: {
              criteria: status !== null ? `status:compare{eq, ${JSON.stringify(status)}}` : ''
            }
        })

        return this.orders = res.data.data
    }
}