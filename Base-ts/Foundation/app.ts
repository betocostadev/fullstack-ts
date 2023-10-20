console.log('TS Foundation')

// Banking

class Account {
  name: string
  accountNumber: number

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = () => {
    console.log('You made a deposit')
  }

  withdraw = () => {
    console.log('You made a withdraw')
  }
}

const newAccount: Account = new Account('Beto', 1)
console.log(newAccount)
