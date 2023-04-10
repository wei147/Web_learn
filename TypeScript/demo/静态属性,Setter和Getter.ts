// getter and setter
class Person1 {
  //  _name 这种加下划线的写法是私有属性
  constructor(private _name: string) {}
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
}

const person1 = new Person1('wei');
console.log(person1.name);
person1.name = 'LiHua';
console.log(person1.name);
// Person 构造器里面_name是用private修饰的,所以不能直接  person1._name 拿到
// person1._name

// 单例模式  (限制Demo只能生成一个实例)
class Demo {
  //
  private static instance: Demo;
  private constructor(public name:string) {}

  // static 是指把这个方法直接挂载到类上,而不是类的实例上
  static getInstance() {
    /*调用 getInstance()方法的时候,如果instance为空的话则创建一个Demo,
    下次在调用这个getInstance()方法的时候,instance里面已经有Demo了,直接return即可。单例模式  */
    if (!this.instance) {
      this.instance = new Demo('王小虎');
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);


// constructor 被private修饰的时候,下面的实例化便无法进行
// const demo1 = new Demo();
// const demo1 = new Demo();
