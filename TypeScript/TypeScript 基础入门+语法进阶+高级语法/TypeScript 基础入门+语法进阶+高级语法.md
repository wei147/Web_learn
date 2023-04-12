# TypeScript 基础入门+语法进阶+高级语法

## 基础入门

### 开篇

```
2012年由微软正式发布
```

<img src="C:\Users\w1216\AppData\Roaming\Typora\typora-user-images\image-20230330034459499.png" alt="image-20230330034459499" style="zoom:30%;" />

<hr>

<img src="C:\Users\w1216\AppData\Roaming\Typora\typora-user-images\image-20230330034556144.png" alt="image-20230330034556144" style="zoom:50%;" />

<hr>

<img src="C:\Users\w1216\AppData\Roaming\Typora\typora-user-images\image-20230330034808973.png" alt="image-20230330034808973" style="zoom:30%;" />

<hr>

<img src="C:\Users\w1216\AppData\Roaming\Typora\typora-user-images\image-20230330034845125.png" alt="image-20230330034845125" style="zoom:30%;" />

```
TS比JS更加完善
```

<img src="C:\Users\w1216\AppData\Roaming\Typora\typora-user-images\image-20230330035305459.png" alt="image-20230330035305459" style="zoom:33%;" />

<hr>

<img src="C:\Users\w1216\AppData\Roaming\Typora\typora-user-images\image-20230330035342555.png" alt="image-20230330035342555" style="zoom:30%;" />

#### TypeScript的定义

```
是JavaScript的超集
静态的类型
TypeScript会被编译成普通的JavaScript
```

```typescript
// ts 是静态类型

// 这里的b只能存数字类型。类型是写死的
// let b = 123;
let b:number = 123;
b = "123";  //这里会报错
```

```typescript
//typescript 代码
interface Person{
    name:string}

const teacher: Person = {
    name:'wei'}
```

```javascript
// 编译时会转变成 JavaScript代码
var teacher = {
    name: 'wei'
};
```



#### TypeScript带来了什么优势

```
相当于JavaScript更好的点是什么? 
git.imooc.com
```

```
1.开发过程中,发现潜在问题
2.更友好的编辑器自动提示
3.代码语义更清晰易懂
```



#### TypeScript基础环境搭建

```
TypeScript要有node运行环境
```

<img src="C:\Users\w1216\AppData\Roaming\Typora\typora-user-images\image-20230331230846111.png" alt="image-20230331230846111" style="zoom:53%;" />

```bash
设置为单引号 quote
安装 Prettier - Code formatter 插件   格式化 双引号变单引号

 npm install typescript@3.6.4 -g 全局安装
 
 没法直接运行TypeScript, 
 使用命令 使用TypeScript对demo.ts 进行编译生成真正能运行js文件  
 tsc demo.ts
 
 运行js文件 node demo.js
 
 为了避免ts转js编译这种情况,可以安装一个工具
 npm install -g ts-node
 
 (还要安装一个库 npm install -g  @types/node 
 不然会报错 Cannot find name 'console'
 )
```

#### 静态类型的深度理解

```typescript
tpye的深度的本质性的理解


interface Point {
  x: number;
  y: number;
}

// 自定义类型
/**
 * 我们看到一个变量它是一个静态类型,不仅仅意味着这个变量的类型不能修改,
 * 还意味着这个变量的属性和方法基本也就确定了,,
 */
const point: Point = {
  x: 8,
  y: 7,
};
```

#### 基础类型和对象类型

```typescript
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
```



#### 类型注解和类型推断

```typescript
// type annotation 类型注解,我们来告诉TS变量是什么类型,,,
// type inference  类型推断,TS会自动的去尝试分析变量的类型
// 如果TS能够自动分析变量类型,我们就什么也不需要做
// 如果TS无法分析变量类型,我们就需要做使用类型注解

let tag: number;
tag = 10086;

let tagInference = 10086;

const num1 = 1;
const num2 = 2;
const tatal = num1 + num2;

// 这里需要指定类型注解
function getThisTotal(num1: number, num2: number) {
  return num1 + num2;
}

const total = getThisTotal(8, 9);

```



#### 函数相关类型

```typescript
//也可以在指定函数的返回值类型
function add(first: number, second: number): number {
  return first + second;
}

//没有返回值
function sayHi(): void {
  console.log('hi');
}

function errEmitter(): never {
  throw new Error('错误');
}

function addPro({ first, second }: { first: number; second: number }): number {
  return first + second + 2;
}

function getNumber({ first }: { first: number }): number {
  return first;
}

const numTotal = add(2, 7);
const num = getNumber({ first: 19 });
```



#### 基础语法复习

```typescript

//对象类型 {},Class, function,[]
const func = (str:string)=>{
  return parseInt(str,9);
}

const func1:(str:string)=>number = (str)=>{
  return parseInt(str,8);
}

interface Person{
  name:'string',
  age:number
}

const rawDate = '{"name":"yang","age":22}';
const newData:Person = JSON.parse(rawDate)

//直接让数字变字符串 报错
let temp = 123;
temp = '789';

//有可能是number 也有可能是string
let temp1:number | string = 123;
temp1 = '789';
```

#### 数组和元组

```typescript
//元组 tuple  元组就是数量是有限的数组。同时每一项类型是固定的这种形式
const teacherInfo: [string, string, number] = ['wei', 'man', 23];

//csv 像excel这样的文件适合用元组去管理
const teacherList: [string, string, number][] = [
  ['wei', 'man', 23],
  ['yang', 'female', 24],
  ['chen', 'man', 29],
];
```

#### interface接口

```typescript
// age? 代表可有有无  readonly代表只读,不能修改
// [propName:string]:any  属性名字是string类型。但是属性值可以是任何类型
interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  [propName: string]: any;
  say();
}

interface Teacher extends Person {
  teach(): string;
}

interface SayHi {
  // word类型是string。返回值类型也是string
  (word: string): string;
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
  teach(){
    return 'hei'
  }
};

getPersonName(person);
setPersonName(person, 'ya');

class User implements Person {
  name;
  say() {
    return 'hi';
  }}

const say: SayHi = (word: string) => {
  return word;
};
```



#### 类的定义与继承

ts-node .\类的定义与继承.ts   运行指令

```typescript
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
```



#### 类中的访问类型和构造器

```typescript
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

```



#### 静态属性,Setter和Getter

```typescript
// getter and setter
class Person1 {
  //  _name 这种加下划线的写法是私有属性
  constructor(private _name: string) {}
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }}

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
  }}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);

// constructor 被private修饰的时候,下面的实例化便无法进行
// const demo1 = new Demo();
// const demo1 = new Demo();
```



#### 抽象类

```typescript
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

```

