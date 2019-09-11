import moment from 'moment'

export function dateFormat(val) {
    return moment.unix(val).format("DD.MM.YYYY")
}

export function timeFormat(val) {
    return moment.unix(val).format("H:mm")
}