{
  // instance of guard

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }


  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log('I am barking');
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMew() {
      console.log('I am mewing');
    }
  }

  // smart way te handle korar jonno chaile amra funciton use korte pari
  const isDog = (animal: Animal): animal is Dog => animal instanceof Dog;
  const isCat = (animal: Animal): animal is Cat => animal instanceof Cat;

  const getAnimal = (animal: Animal) => {
    if (isCat(animal)) {
      animal.makeMew();
    } else if (isDog(animal)) {
      animal.makeBark();
    } else {
      animal.makeSound();
    }
  }

  const animal = new Animal('Unknown', 'Almost known');
  const dog = new Dog('DOG sir', 'dog');
  const cat = new Cat('CAT miss', 'cat');

  getAnimal(animal);
  getAnimal(cat);
  getAnimal(dog);


  //
}