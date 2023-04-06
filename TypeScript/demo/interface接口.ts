// age? 代表可有有无  readonly代表只读,不能修改
// [propName:string]:any  属性名字是string类型。但是属性值可以是任何类型
interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  [propName: string]: any;
  say();
}

interface Teacher extends Person{
  teach():string;
}

//type 定义的类型和 interface 定义的有什么不一样  type定义的可以直接代表基础类型
type Person1 = string;
// const getPersonName = (person:{name:string})=>{
const getPersonName = (person: Person): void => {};

const setPersonName = (person: Teacher, name: string): void => {
  person.name = name;
};

const person = {
  name: 'Lihua',
  age: 25,
  // 虽然多了一个属性传给函数但是并不会报错。直接写在函数上会报错
  sex: 'male',
  say() {
    console.log('hi');
  },
};

getPersonName(person);
setPersonName(person, 'ya');

class User implements Person {
  name;
  say() {
    return 'hi';
  }
}
