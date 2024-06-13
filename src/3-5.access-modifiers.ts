{
  // access modifiers
  class BankAccount {
    readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    public addDeposit(amount: number) {
      if (amount > 0) {
        this._balance = this._balance + amount;
        return `Balance ${amount} added successfully.`;
      } else {
        return 'Deposit amount must be grater than 0 (zero).';
      }
    }
    public withdraw(amount: number) {
      if (amount > 0) {
        if (this._balance >= amount) {
          this._balance = this._balance - amount;
          return 'Withdraw Successful.';
        } else {
          return `Insufficient balance to withdraw ${amount}.`;
        }
      } else {
        return 'Withdraw amount must be grater than 0 (zero).';
      }
    }
    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      console.log(this._balance);
    }
  }

  const poorUserAccount = new BankAccount(151, 'Mr. Gorib', 500);
  // poorUserAccount.balance = 0;
  poorUserAccount.addDeposit(300);
  const accountBalance = poorUserAccount.getBalance();

  const stdntAcc = new StudentAccount(23423, 'Mr. Rakib', 3400);

  stdntAcc.test();





  console.log({ poorUserAccount, accountBalance });





  //
}