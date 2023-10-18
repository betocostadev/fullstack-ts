console.log('TS Foundation')

// Objects and Interfaces
interface Person {
  name: string
  age: number
  profession?: string | undefined
}

const personOne: Person = {
  name: 'Bob',
  age: 37,
  profession: 'Software Engineer',
}

const personTwo: Person = {
  name: 'Creuba',
  age: 30,
}

const persons: Array<Person> = [personOne, personTwo]
