{
  /** abstraction --> oop
    *  - 1. interface [leader interface]
    *  - 2. abstract class [leader class]
  */

  /********** interface ***********/

  /* ------------ idea / leader interface ----------- */
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  /* --------- real implementation ---------- */
  class Car1 implements Vehicle1 { // must need to use implements keyword for abstraction using interface
    startEngine(): void {
      console.log('Engine Started');
    }
    stopEngine(): void {
      console.log('Engine Stop');
    }
    move(): void {
      console.log('Car is moving');
    }
    test(): void {
      console.log('Extra method');
    }
  }

  // creating instance of Car
  const toyotaCar = new Car1();
  // calling methods of Car instance
  toyotaCar.startEngine();
  toyotaCar.stopEngine();
  toyotaCar.move();
  toyotaCar.test();

  console.log();



  /*************** abstract class ************/

  /* ------------ idea / leader class ------------- */
  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  /* -------- implementation -------- */
  class Car2 extends Vehicle2 {
    startEngine(): void {
      console.log('Engine Started');
    }
    stopEngine(): void {
      console.log('Engine Stop');
    }
    move(): void {
      console.log('Car is moving');
    }
    test(): void {
      console.log('Extra method');
    }
  }


  // creating instance of Car
  const hondaCar = new Car2();
  // calling methods of Car instance
  hondaCar.startEngine();
  hondaCar.stopEngine();
  hondaCar.move();
  hondaCar.test();




  //
}