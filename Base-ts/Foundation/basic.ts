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

// Object keys

const typeUser = {
  admin: 'Control panel access granted',
  viewer: 'Control panel access blocked',
}

const logUserMsg = (userType: keyof typeof typeUser) => {
  console.log(typeUser[userType])
}

// will have autocomplete with the keys
logUserMsg('admin')
