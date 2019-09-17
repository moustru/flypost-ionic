import moment from 'moment'
import { Timestamp } from "../types/simple.type";

export function dateFormat(timestamp: Timestamp) {
    return moment.unix(timestamp).format("DD.MM.YYYY")
}

export function timeFormat(timestamp: Timestamp) {
    return moment.unix(timestamp).format("H:mm")
}
