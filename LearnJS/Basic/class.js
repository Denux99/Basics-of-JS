class Animal {
  constructor(name, age) {
    console.log((name) +" is an animal");
    this.name = name;
    this.age = age;

  }

  eat(){
    console.log((this.name)+ " is eating");
  }

  sleep(){
    console.log((this.name)+ " is sleeping");
  }
}

const bobby = new Animal("bobby", 2);
bobby.eat();
bobby.sleep();
