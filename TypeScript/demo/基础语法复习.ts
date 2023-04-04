
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