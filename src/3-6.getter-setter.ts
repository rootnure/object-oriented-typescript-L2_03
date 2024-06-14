{
  // getter and setter
  class BankAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    /* public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    } */

    /* -------------setter------------- */
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    /* public getBalance() {
       return this._balance;
    } */

    /* --------------getter------------- */
    get balance() {
      return this._balance;
    }
  }

  const poorUserAccount = new BankAccount(151, 'Mr. Gorib', 500);

  const myBalance = poorUserAccount.balance;
  poorUserAccount.deposit = 200;

  console.log({ myBalance, poorUserAccount });






  //
}