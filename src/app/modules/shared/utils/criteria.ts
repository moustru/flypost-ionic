import { Timestamp, Uuid } from "shared/types/simple.type";

export class Criteria {
  private _filter?: string
  private _limit?: number
  private _offset?: number
  private _orderings = Array<string>()

  set filter(value: string) {
    this._filter = value
  }

  set limit(value: number) {
    this._limit = value
  }

  set offset(value: number) {
    this._offset = value
  }

  and(filter: string): void {
    this.appendFilter(filter, 'and')
  }

  or(filter: string): void {
    this.appendFilter(filter, 'or')
  }

  private appendFilter(toAppend: string, joiner: 'and' | 'or' = 'and'): void {
    this._filter = this._filter
      ? `${this._filter} ${joiner} ${toAppend}`
      : toAppend
  }

  resetFilters(): void {
    this._filter = undefined
  }

  withOrderings(...values: string[]): void {
    this._orderings = values
  }

  resetOrderings(): void {
    this._orderings = []
  }

  toString(): string {
    return [this._filter, this._limit, this._offset, this._orderings.join(' ')].join(' ')
  }
}

export function has(field: string, values: string): string {
  return `${field}:in{${values}}`;
}

export function contains(field: string, value: string): string {
  return `${field}:contains{${value}}`;
}

export function between(field: string, left: string, right: string): string {
  return `${field}:between{${left}, ${right}`;
}

export function compare(field: string, value: string, comparator: 'eq' | 'eqi' | 'gt' | 'lt' | 'gte' | 'lte'): string {
  return `${field}:compare{${comparator}, ${value}}`
}

export function asc(field: string): string {
  return `${field}:asc`
}

export function desc(field: string): string {
  return `${field}:desc`
}

export function uuid(value: Uuid | Uuid[]): string {
  return _handle(value, arg => `uuid(${arg})`)
}

export function string(value: string | string[]): string {
  return _handle(value, arg => `"${arg}"`)
}

export function ts(value: Timestamp | Timestamp[]): string {
  return _handle(value.toString(), arg => `ts(${arg})`)
}

function _handle(value: string | string[], mapper: (arg: string) => string): string {
  return Array.isArray(value)
    ? `[${value.map(mapper).join(',')}]`
    : mapper(value)
}
