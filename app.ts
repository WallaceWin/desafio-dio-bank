import { CompanyAccount } from './class/CompanyAccount'
import { MyAccount } from './class/MyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(5000)
peopleAccount.withdraw(100)
peopleAccount.getBalance()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(50)
//companyAccount.getLoan(1000)
companyAccount.withdraw(70)
companyAccount.getBalance()
console.log(companyAccount)

//MyAccount

const myAccount: MyAccount = new MyAccount("Wallace", 25)
myAccount.getName
myAccount.deposit(2000)
myAccount.withdraw(10)
myAccount.getBalance()
