// 基础类型 null,undefined,symbol,boolean,void
const count: number = 123;
const teacherName: string = 'wei';

// 对象类型 object
class Person {}

const teacher: {
  name: string;
  age: number;
} = {
  name: 'chen',
  age: 26,
};

const numbers: number[] = [1, 2, 3, 4];

const chen: Person = new Person();

//一个函数返回的具体类型是number。具体实现在后面
const getTotal: () => number = () => {
  return 123;
};