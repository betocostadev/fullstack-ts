import { SoundProduct } from './SoundProduct'

export class SoundBox extends SoundProduct {
  readonly format: string
  capabilities: string[]

  constructor(
    make: string,
    model: string,
    power: number,
    format: string,
    capabilities: string[]
  ) {
    super(make, model, power)
    ;(this.format = format), (this.capabilities = capabilities)
  }

  getFormat = (): string => this.format

  getPower = (): string => `${this.power}w`

  getProductInfo = (): string => {
    return `
      ${this.getMakeAndModel()}
      Power: ${this.getPower()}
      Format: ${this.getFormat()}
      Capabilities: ${this.getCapabilities()}
      `
  }

  getCapabilities = (): string[] =>
    this.capabilities.map(
      (cap, idx) => `${idx > 0 ? ' ' : ''}${idx + 1}. ${cap}`
    )
}
