{
  // oop - inheritance

  class Person {
    // constructor(public name: string, public age: number, public address: string) {

    // }

    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(timeInHr: number) {
      console.log(`${this.name} will sleep for ${timeInHr} hours daily.`);
    }
  }


  /* Student class inherit the class Person */
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const std1 = new Student('Ashiq', 22, 'Dhaka');
  std1.getSleep(7);


  /* Teacher class (with some property & method of its own) inherit the class Person */
  class Teacher extends Person {

    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} will take ${numberOfClass} classes everyday.`);
    }
  }

  const teacher1 = new Teacher("Mr. Rafiq", 31, "Dhaka, BD", "Teacher");
  teacher1.getSleep(6);
  teacher1.takeClass(5);


  //
}