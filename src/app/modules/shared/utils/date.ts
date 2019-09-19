import moment from 'moment-timezone'
import { Timestamp } from "../types/simple.type"

const TIMEZONE = 'Europe/Moscow'

export function formatDate(timestamp: Timestamp): string {
    return moment.unix(timestamp).tz(TIMEZONE).format("DD.MM.YYYY")
}

export function formatTime(timestamp: Timestamp): string {
    return moment.unix(timestamp).tz(TIMEZONE).format("H:mm")
}

export function formatDateTime(timestamp: Timestamp): string {
    return moment.unix(timestamp).tz(TIMEZONE).format('DD.MM.YYYY H:mm')
}
