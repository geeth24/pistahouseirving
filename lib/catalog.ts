export type Dish = { name: string; vegetarian: boolean; description?: string }
export type MenuSection = {
  id: string
  name: string
  note?: string
  aliases?: string[]
  items: Dish[]
}
