class Person {
  //只能读不能改
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// const person2 = new Person('yang');
// person2.name = 'cheng'
// console.log(person2.name);

//抽象类  抽象类只能被继承,不能被直接实例化。
// 抽象类把共用性的一些东西抽离出来,变成一个抽象的类型
abstract class Geom {
  width: number;
  getType() {
    return 'Gemo';
  }
  abstract getArea(): number;
}

// 圆形  Cirtcle是Geom的一个具体抽象类的实现类
class Cirtcle extends Geom {
  getArea() {
    return 345;
  }
}

// 矩形
class Square {
  getArea() {}
}

// 三角形
class Triangle {
  getArea() {}
}

//抽象类是把通用的类抽象起来
//接口是 也是把通用性的东西封装起来 吗? 也许可以换一下说法

interface Person1 {
  name: string;
}

interface Teacher extends Person1 {
  teachingAge: number;
}

interface Student extends Person1 {
  age: number;
}

interface Driver extends Person1 {
  caringAge: number;
}

const getUserInfo = (user: Person1) => {
  console.log(user.name);
};

const teacher = {
  name: 'Li',
  teachingAge: 4,
};

const student = {
  name: 'xiaoYa',
  age: 21,
};

getUserInfo(teacher);
getUserInfo(student);
