import { CompanyAccount } from './class/CompanyAccount'
import { PersonAccount } from './class/PersonAccount'

console.log('=== TS Foundation ===\n')

// Banking

const newAccount: PersonAccount = new PersonAccount(44039920, 'Bet', 1)
console.log(newAccount)
console.log('balance: ', newAccount.getBalance())
newAccount.deposit(500)
console.log('New balance: ', newAccount.getBalance())

const companyAccount: CompanyAccount = new CompanyAccount('Dio', 33)
console.log(companyAccount)
companyAccount.getLoan()
companyAccount.deposit(10_000)

console.log(newAccount.setName('Beto'))
