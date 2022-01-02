export type CreateCarDTO = {
  name: string
  description: string
  dailyPrice: number
  available?: boolean
  licensePlate: string
  fineAmount: number
  brand: string
  categoryId: string
}
