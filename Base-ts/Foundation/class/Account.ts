export abstract class Account {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  accountStatus: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => this.name

  getBalance = (): number => this.balance

  getAccountNumber = (): number => this.accountNumber

  setName = (name: string): void => {
    this.name = name
  }

  deposit = (value: number): void => {
    if (this.validateAccountStatus()) {
      console.log(`You made a deposit of ${value}`)
    }
  }

  withdraw = (): void => {
    console.log('You made a withdraw')
  }

  private validateAccountStatus = (): boolean => {
    if (this.accountStatus) return this.accountStatus

    throw new Error('Account is inactive')
  }
}
