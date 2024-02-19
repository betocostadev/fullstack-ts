export abstract class SoundProduct {
  make: string
  model: string
  power: number

  constructor(make: string, model: string, power: number) {
    this.make = make
    this.model = model
    this.power = power
  }

  getMakeAndModel = (): string => `${this.model} by ${this.make}`
}
