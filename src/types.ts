export interface Item{
    itemName?: string,
    itemPrice?: number,
    section?: number,
    itemDescription?: string,
    imgUrl?: string,
    id?: number,
    gf?: boolean,
    v?: boolean,
    featured?: boolean
}

export interface Section{
    name: string,
    order: number,
    id: number
}
  