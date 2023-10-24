export abstract class Account {
  name: string
  accountNumber: number
  balance: number = 0

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (value: number): void => {
    console.log(`You made a deposit of ${value}`)
  }

  withdraw = (): void => {
    console.log('You made a withdraw')
  }
}
