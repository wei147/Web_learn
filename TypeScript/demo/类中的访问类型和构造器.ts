// public 允许在类内外被调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用

//constructor
class Person {
  // 传统写法
  // public name:string;
  //constructor在 new实例的时候执行
  // constructor(name:String) {
  //   this.name = name;
  // }

  // 简写
  constructor(public name: string) {}
}

class Teacher extends Person {
  constructor(public age: number) {
    // 这里的super是把'chen' 传到上面的Person构造器的name中
    // 一个子类继承父类,自雷要有构造器的话,那么它必须要调用super()方法 (也调用父类的构造器)
    super('chen');
  }
}

const person = new Person('wei');

const teacher = new Teacher(28);
console.log(person.name);
console.log(teacher.name);
console.log(teacher.age);

