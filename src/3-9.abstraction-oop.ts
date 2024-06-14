{
  // abstraction --> oop
  // 1. interface
  // 2. abstract

  /* ------------ idea ----------- */
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  /* --------- real implementation ---------- */
  class Car implements Vehicle1 {
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


  const toyotaCar = new Car();

  toyotaCar.startEngine();
  toyotaCar.stopEngine();
  toyotaCar.move();
  toyotaCar.test();




  //
}