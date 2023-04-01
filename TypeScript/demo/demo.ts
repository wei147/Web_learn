// ts 是静态类型

// 这里的b只能存数字类型。类型是写死的
// let b = 123;
let b: number = 123;
// b = "123";

// type Point = { x: number; y: number } 另一种写法
interface Point {
  x: number;
  y: number;
}

function tsDemo(data: Point) {
  console.log('hi , wei');

  //   return Math.sqrt(data.x ** 2 + data.y ** 2);
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

// 相同的代码在ts中未运行时(写代码时)就能发现问题。但js不能
tsDemo({ x: 3, y: 4 });

// 自定义类型
/**
 * 我们看到一个变量它是一个静态类型,不仅仅意味着这个变量的类型不能修改,
 * 还意味着这个变量的属性和方法基本也就确定了,,
 */
const point: Point = {
  x: 8,
  y: 7,
};

point.x
