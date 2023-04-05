interface Person {
  name: string;
}

// const getPersonName = (person:{name:string})=>{
const getPersonName = (person: Person) => {};

const setPersonName = (person: Person, name:string) => {
  person.name = name;
};
