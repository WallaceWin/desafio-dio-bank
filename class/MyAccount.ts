import { DioAccount } from "./DioAccount";

export class MyAccount extends DioAccount {
    constructor(name: string, numberAccount: number) {
        super(name, numberAccount)
    }

    deposit = (value: number) => {
        if (this.validateStatus()) {
            this.setBalande(value + 10)
        }
    }
}