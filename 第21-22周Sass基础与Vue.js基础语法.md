# 第21-22周Sass基础与Vue.js基础语法

## Sass基础

### 第一章Sass基础语法讲解

```css
// Sass是css语法的扩展。在这里可以写更简单的css语法
.body{
    span{
        color: aqua;
        &:active{
            color: green;
        }
        &:hover{
            color: yellow;
        }}}

//以下为自动生成的css
.body span {
  color: aqua;}
.body span:active {
  color: green;}
.body span:hover {
  color: yellow;}

//相应的sass后缀的写法
.body
    span
        color: aqua;
        &:active
            color: green;
        &:hover
            color: yellow;
```

```
Sass文件有两种后缀  demo.scss(更常用)    demo.sass
```



#### Sass变量的概念

```css
//变量定义要放在最前面
$small-font:14px+2px;
$text-color:#444;
$default-font:'miscrosoft yahei';

.title{
    color: $text-color;
    font-family: $default-font;
}

.subtitle{
    // 颜色变浅 20%
    color: lighten($text-color, 20%);
}

.text{
    // 颜色变深 20%
    color: darken($text-color, 20%);
    font-size: $small-font;
}
```

#### Sass的嵌套和引入

##### 嵌套语法

<img src="C:\Users\w1216\AppData\Roaming\Typora\typora-user-images\image-20221205150825093.png" alt="image-20221205150825093" style="zoom:50%;" />

```
嵌套语法能避免反复写标签。
```

##### Sass文件的引入

<img src="C:\Users\w1216\AppData\Roaming\Typora\typora-user-images\image-20221205152528382.png" alt="image-20221205152528382" style="zoom:63%;" />

```
通过引用最后拼装成一个Sass文件
```

#### Sass的mixin(混入)语法

```css
如何把部分功能代码抽离出来

@mixin  + 配套的。

也可以分成一个 _mixins.scss

// 超出范围则显示省略号
@mixin singleline {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;}

.text{
    @include singleline;
    width: 600px;}

.content-text{
    @include singleline;
    width: 1000px;}
```

<img src="C:\Users\w1216\AppData\Roaming\Typora\typora-user-images\image-20221205155251609.png" alt="image-20221205155251609" style="zoom:60%;" />

```scss
//main.scss
// mixin
// 超出范围则显示省略号
@import 'mixin';

.text{
    @include singleline(700px);
}

.content-text{
    @include singleline(1000px);
}
```

```scss
//_mixin.scss
@mixin singleline($width) {
    width: $width;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
```

#### mixin中的@content方法

```
可以用来解决响应式布局编写的麻烦
```

```css
@mixin ipad {
    @media screen and (min-width:768px){
        @content;
    }}

.header{
    width: 1000px;
    @include ipad(){
        width: 500px;
    }}

=================生成的css==========================
.header {
  width: 1000px;
}
@media screen and (min-width: 768px) {
  .header {
    width: 500px;
  }}
```

<img src="C:\Users\w1216\AppData\Roaming\Typora\typora-user-images\image-20221205230557211.png" alt="image-20221205230557211" style="zoom:80%;" />



## vue基础入门(上)

### 第一章 Vue.js初识

#### vue再开始

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hello world</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="root"></div>
    <div id="wei"></div>
</body>
<script>
    // .mount("#root"); 的意思是在id为root上使用vue
    Vue.createApp({
        data() {
            return {
                content: 10
            }},
        // mounted表示页面加载完成,我就会执行
        mounted() {
            // alert("hi");
            setInterval(() => {
                this.content += 1;
            }, 1000);
        },
        // 以template 的内容作为显示
        template: '<div>hello world ! {{content}}</div>'
    }).mount("#wei");
</script>
</html>
```

```
vue 面向数据编程
```

