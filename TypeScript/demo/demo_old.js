// ts 是静态类型
// 这里的b只能存数字类型。类型是写死的
// let b = 123;
var b = 123;
function tsDemo(data) {
    console.log('wei');
    //   return Math.sqrt(data.x ** 2 + data.y ** 2);
    return Math.sqrt(Math.pow(data.x, 2) + Math.pow(data.y, 2));
}
// 相同的代码在ts中未运行时(写代码时)就能发现问题。但js不能
tsDemo({ x: 3, y: 4 });
