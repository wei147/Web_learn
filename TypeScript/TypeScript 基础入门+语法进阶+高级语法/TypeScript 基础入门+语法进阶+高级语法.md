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

