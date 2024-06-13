{
  // oop - class
  class Animal {
    /* parameter properties */

    constructor(public name: string, public species: string, public sound: string) {

    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`)
    }
  }


  const dog = new Animal('German Shepard Bhai', 'dog', 'Ghew Ghew');
  const cat = new Animal('Meme', 'cat', 'meaw meaw');

  dog.makeSound();

  cat.makeSound();


  //
}