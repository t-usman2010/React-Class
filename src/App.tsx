import React from 'react';
function App(){

  let message : string;
  message = "Hello, welcome to the React app!";
  let age : number;
  age = 25 
  
  return (
    <div>
      <h1>{message}</h1>
      <p>Your age is: {age}</p>
      <Oppwork />
    </div>
  );
}
function Oppwork(){
  abstract class Animal {
    public abstract makeSound(): string;
  }
  class Dog extends Animal {
    public makeSound(): string {
      return "Woof!";
    }
  }
  class Cat extends Animal {
    public makeSound(): string {
      return "Meow!";
    }
  }
  const dog = new Dog();
  const cat = new Cat();

  return (
    <div>
      <h2>Animal Sounds</h2>
      <p>Dog: {dog.makeSound()}</p>
      <p>Cat: {cat.makeSound()}</p>
    </div>
  );
}
export default App;