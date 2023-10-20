console.log('TS Foundation')

// Banking

abstract class Account {
  name: string
  accountNumber: number
  balance: number = 0

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getBalance = () => {
    return this.balance
  }

  deposit = () => {
    console.log('You made a deposit')
  }

  withdraw = () => {
    console.log('You made a withdraw')
  }
}

class PersonAccount extends Account {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber)
    this.doc_id = doc_id
  }
}

const newAccount: Account = new PersonAccount(44039920, 'Beto', 1)
console.log(newAccount)
console.log('balance: ', newAccount.getBalance())
