{
  // polymorphism --> oop

  class Person {
    getSleep() {
      console.log('I sleep 8 hours a day.');
    }
  }

  class Student extends Person {
    getSleep() {
      console.log('I sleep 7 hours a day.');
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log('Bug fix na korle amr ghum nai.');
    }
  }

  const getSleepingTime = (param: Person) => {
    param.getSleep();
  }

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingTime(person1);
  getSleepingTime(person2);
  getSleepingTime(person3);


  // ------------------------

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  class Triangle extends Shape {
    base: number;
    height: number;

    constructor(base: number, height: number) {
      super();
      this.base = base;
      this.height = height;
    };
    getArea(): number {
      return 0.5 * this.base * this.height
    }
  }


  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  }


  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);
  const shape4 = new Triangle(8, 10);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);
  getShapeArea(shape4);




  //
}