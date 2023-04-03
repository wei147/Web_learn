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
