export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
    }
  }

  withdraw = (value: number): void => {
    if (this.balance >= value && this.validateStatus()) {
      this.balance -= value
    }
    if (value > this.balance) {
      console.log("O seu saldo é inferior ao saque requerido")
    }
    else if (!this.validateStatus()) {
      console.log("Conta inativa")
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  setBalande = (value: number) => {
    this.balance += value
  }

  validateStatus = (): any => {
    if (this.status) {
      return this.status
    }
    if (!this.status) {
      console.log("Conta invalida")
      return this.status
    }
  }
}
