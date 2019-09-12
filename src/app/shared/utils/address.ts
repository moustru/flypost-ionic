export function address(p, s, h, f, m): string {
    let postcode = p ? `${p}, ` : ''
    let street = s ? `${s} ` : ''
    let home = h ? `д.${h} ` : ''
    let flat = f ? `кв.${f} ` : ''
    let metro = m ? m : ''

    return `${postcode}${street}${home}${flat}${metro}`
}