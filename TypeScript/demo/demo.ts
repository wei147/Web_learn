// ts 是静态类型

// 这里的b只能存数字类型。类型是写死的
// let b = 123;
let b: number = 123;
// b = "123";

function tsDemo(data:{x:number,y:number}) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}
