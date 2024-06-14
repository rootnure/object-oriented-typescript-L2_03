{
  // encapsulation --> oop
  /* restricting access of property or method of a class is encapsulation */

  class BankAccount {
    readonly id: number;
    public name: string;
    private _contactNo: string; // restricting property using private keyword. not accessible outside this class
    protected _balance: number; // restricting property using protected keyword. not accessible outside this class and inherited class from this class

    constructor(id: number, name: string, contactNo: string, balance: number) {
      this.id = id;
      this.name = name;
      this._contactNo = contactNo
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    protected getContact() { // restricting method using protected keyword. not accessible outside this class and inherited class from this class
      return this._contactNo;
    }

    private getBalance() { // restricting method using private keyword. not accessible outside this class
      return this._balance;
    }

    public getHiddenMethod() {
      return this.getBalance();
    }
  }

  const poorUserAccount = new BankAccount(151, 'Mr. Gorib', 'nomail@gorib.com', 500);

  const poorUserBalance = poorUserAccount.getHiddenMethod();


  class StudentAccount extends BankAccount {
    id: number;
    name: string;
    contactNo: string;
    balance: number;

    constructor(id: number, name: string, contactNo: string, balance: number) {
      super(id, name, contactNo, balance);
      this.id = id;
      this.name = name;
      this.contactNo = contactNo;
      this.balance = balance;
    }
    public getHiddenContact() {
      return this.getContact(); // accessing protected method from inherited class
    }
  }

  const studentAccount = new StudentAccount(234523454, "Rakibul Islam", "rakibul@gmail.com", 1000);

  const studentContact = studentAccount.getHiddenContact();

  console.log({ poorUserBalance, studentContact });








  //
}