// region simple types

export type Timestamp = number

export type Uuid = string

// endregion

// region address types

export interface RussianAddress {
  type: 'RUSSIAN'
  country: string | null
  region: string
  city: string
  postcode: number | null
  street : string
  home : string | null
  flat : number | null
  metro : string | null
}

export interface FoobarAddress {
  type: 'FOOBAR',
  barfoo: string
}

export type Address = RussianAddress | FoobarAddress;

// endregion
