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
