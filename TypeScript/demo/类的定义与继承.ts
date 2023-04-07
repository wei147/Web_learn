class Person {
  name = 'wei';
  getName() {
    return this.name;
  }
}

class Teacher extends Person {
  getName() {
    // return this.name+ '我是老师';
    /* super.getName() 这里直接调用父类的方法。子类把父类方法覆盖/重写之后,
    如果我们还想调用父类的方法可以通过super调用*/
    return super.getName() + ', I am teacher';
  }
  teach() {
    return 'good good study';
  }
}

// const person_man = new Person();
// console.log(person_man.getName());

const teacher = new Teacher();
console.log(teacher.getName());

console.log(teacher.teach());
