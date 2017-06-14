/**
 * Basics
 */

//primitives
const str: string = 'lol';
const num: number = 1;
const bool: boolean = true;

//specials
const nill: null = null;
const undef: undefined = undefined;

//arrays
const properArray: string[] = ['1','2'];

//tuples
const tuple: [string, number] =  ['myProperty', 2];

//enums
enum Color {
  RED,
  BLUE,
  YELLOW = 100
}
console.log(Color.RED);
console.log(Color.YELLOW);


/**
 * Custom types
 */

//basic usage with inline definition
const greeter: (name: string) => string = (name: string = 'typescript') => {
  return `Hello ${name}`;
};
console.log(greeter('Foodora!'));

//base type with optional parameter
type counter = (base: number, increase?: number) => number;
const counter : counter = (base: number) => {
  return base + 1;
}
const advancedCounter: counter = (base: number, counter: number) => {
  return base + counter;
}

console.log(counter(1));
console.log(advancedCounter(1, 2));

//void function
type voidFunc = () => void;
const voidFunc: voidFunc = () => {
  console.log('void');
  return true;
}

//interface
interface IAwesomeClass {
  greet: (name: string) => string,
  counter: counter,
  advancedCounter: counter
}

//class with interface
class AwesomeClass implements IAwesomeClass {
  greet(name: string) {
    return greeter(name);
  }
  counter: counter
  advancedCounter
}
console.log(new AwesomeClass().greet('Interface'));
console.log(new AwesomeClass().counter);

//extended interface
interface IEnhancedClass extends IAwesomeClass {
  otherProp: number
}
class EnhancedClass extends AwesomeClass implements IEnhancedClass {
  otherProp: number
  constructor() {
    super();
    this.otherProp = 1;
  }
}
console.log(new EnhancedClass().otherProp);


/**
 * Generics
 */
type genericFunction = <T>(input: T) => T;
const numberFunction: genericFunction = (number: number) => {
  return number * 2;
}
const stringFunction: genericFunction = (str: string) => {
    return `${str}!`;
}

interface IGenericClass<T> {
  value: T,
  getValue: () => T
}
class StringGenericClass implements IGenericClass<string> {
  value: string
  getValue() {
    return 'hello';
  }
}

/**
 * Much more on https://www.typescriptlang.org/
 */

/**
 * Exercise
 *
 * Create class/model structure for Zoo
 *
 * There are 3 kinds of animals: Elephant, Giraffe and Seal
 *
 * All animals have these attrs: size, weight and continents, where they live
 * Every animal have special attribute:
 *  Elephant: trunk width
 *  Giraffe: neck width
 *  Seal: facial hairs count
 *
 * Zoo have 3 elephants, 2 giraffes and 5 seals
 */
