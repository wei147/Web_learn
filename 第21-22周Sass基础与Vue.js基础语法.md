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

#### vue的点击事件绑定与显示隐藏

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 2</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
    <div id="root"></div>
    <div id="wei"></div>
</body>
<!-- <script>
    // .mount("#root"); 的意思是在id为root上使用vue
    Vue.createApp({
        data() {
            return {
                content: "铁马冰河入梦来"
            }
        },
        methods: {
            handleBtnClick() {
                // 把字符串打散,再反转
                const newContent = this.content.split('').reverse().join('');
                this.content = newContent;
            }
        },
        // 以template 的内容作为显示
        template: `<div>
            hello world ! 
            <hr>
            {{content}}
            <button v-on:click="handleBtnClick">反转</button>
            </div>`
    }).mount("#wei");
</script> -->

<script>
    Vue.createApp({
        data() {
            return {
                content: "铁马冰河入梦来",
                show: true
            } },
        methods: {
            handleBtnClick() {
                //显示与隐藏
                this.show = !this.show;
            }},
        template: `<div>
            <span v-if="show">铁马冰河入梦来 </span>
            <hr>
            <button v-on:click="handleBtnClick">显示/隐藏</button>
            </div>`
    }).mount("#wei");
</script>
</html>
```



#### 遍历数组以及输入框的双向绑定

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 2</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="wei"></div>
</body>

<script>
    Vue.createApp({
        data() {
            return {
                inputValue: '',
                list: ["chen", "yang", "lin", "guo"]
            }},
        methods: {
            handleAddItem() {
                this.list.push(this.inputValue);
                //因为是双向绑定的关系,这里设置inputValue为空,所以输入框的文字也被清除
                this.inputValue=''
            }},
        // v-model: input框输入的内容会和data里的inputValue变量绑定 (双向绑定的关系)
        template: `
        <div>
            <input v-model="inputValue" />
            <button v-on:click="handleAddItem">add</button>
            <ul>
                <li v-for="(item,index) of list">{{index}}.{{item}}</li>
            </ul>
        </div>
        `
    }).mount("#wei");
</script>
</html>
```

```
v-model

<li v-for="(item,index) of list">{{index}}.{{item}}</li>
```



#### Vue的属性绑定与组件

```
{{}}这种语法学名叫做 插值表达式

如果在标签上某一个属性希望和数据进行绑定的话,用v-bind属性

组件:页面上的一部分
```

```vue
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 4</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="root"></div>
    <div id="wei"></div>
</body>
<script>
    const app = Vue.createApp({
        data() {
            return {
                inputValue: '',
                list: ["chen", "yang", "lin", "guo"],
                param: ''
            }
        },
        methods: {
            handleAddItem() {
                if (this.inputValue != '') {
                    this.list.push(this.inputValue);
                    //因为是双向绑定的关系,这里设置inputValue为空,所以输入框的文字也被清除
                    this.inputValue = '';
                } else {
                    alert("添加内容不能为空");
                }
            }
        },
        // v-model: input框输入的内容会和data里的inputValue变量绑定 (双向绑定的关系)
        template: `
        <div>
            <input v-model="inputValue" />
            <button v-on:click="handleAddItem"
                    v-bind:title="inputValue"
            >add</button>
            <ul>
                <li v-for="(item,index) of list">
                    <span>{{index}}--{{item}}</span>
                    </li>
            </ul>
            <hr>
            <ul >
                <todo-item v-for="(item,index) of list" 
                v-bind:content="item"
                v-bind:index="index"
                />
                </ul>
        </div>
        `
    });

    //注册组件
    app.component('todo-item',{
        props:['content','index'], //props会接收从外部传进来的'content'、'index'内容
        template:'<li>{{index}} -- {{content}}</li>'
    });

    //要最后挂载mount,否则写在它之前的组件不生效
    app.mount("#wei");
</script>
</html>
```



#### Vue的mvvm设计模式

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 5</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="wei"></div>
</body>
<script>
    // createApp 表示创建一个 Vue应用,存储到app变量中
    // 传入的参数表示,这个应用最外层的组件,应该如何展示
    // mvvm 设计模式,m -> model 数据, v-> view视图, vm -> viewModel 视图连接层
    const app = Vue.createApp({
        data() {
            return {
                message:'冰红茶'
            }
        },
        methods: {},
        template: '<h4>{{message}}</h4>'
    });

    //vm 代表的就是 vue 应用的根组件 (vm 视图连接层。可以在控制台用vm.$data.message修改值)
    const vm = app.mount("#wei");
</script>
</html>
```

#### Vue的生命周期函数

```vue
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 5</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
    <div id="wei">
        <h4>{{message}}</h4>
    </div>
</body>

<script>
    //生命周期函数: 在某一时刻会自动执行的函数
    const app = Vue.createApp({
        data() {
            return {
                message: '冰红茶'
            }
        },
        methods: {},
        //在实例生成之前会自动执行的函数
        beforeCreate() {
            console.log("beforeCreate");
        },
        //在实例生成之后会自动执行的函数
        created() {
            console.log("created");
        },
        //在组件内容被渲染到页面之前自动执行的函数 (比如 template 模板)
        beforeMount() {
            console.log(document.getElementById('wei').innerHTML, "beforeMount");
            console.log("beforeMount");
        },
        //在组件内容被渲染到页面之后自动执行的函数
        mounted() {
            console.log("mounted");
            console.log(document.getElementById('wei').innerHTML, "mounted");
        },

        //当数据发生变化时会立即自动执行的函数
        beforeUpdate() {
            console.log(document.getElementById('wei').innerHTML, "beforeUpdate");
        },
        //当数据发生变化,页面重新渲染后,会自动执行的函数 (更新完成)
        updated() {
            console.log(document.getElementById('wei').innerHTML, "updated");
        },
        //当 Vue应用失效时,会自动执行的函数   (在控制台调用函数触发 app.unmount())
        beforeUnmount() {
            console.log(document.getElementById('wei').innerHTML,"beforeUnmount");
        },
        //当 Vue应用失效时,且dom完全销毁之后.会自动执行的函数   (在控制台调用函数触发 app.unmount())
        unmounted() {
            console.log(document.getElementById('wei').innerHTML,"unmounted");
        },
        template: ''
    });

    const vm = app.mount("#wei");
</script>
</html>
```



#### v-html与v-html

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 7</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="wei">
        <h4>{{message}}</h4>
    </div>
</body>
<script>
    //生命周期函数: 在某一时刻会自动执行的函数
    const app = Vue.createApp({
        data() {
            return {
                message: '<h4>冰红茶</h4>',
                disabled:false
            }
        },
        methods: {},
        //v-once 只渲染一次,当message发生变化时将不会跟随更新dom
        template: '<h4 v-once>{{message}}</h4>'
        //插值表达式 {{}} 内可以写js表达式
        // template: '<h4>{{Math.max(1,8)}}</h4>'
        // template: '<input v-bind:disabled="disabled"></input>'
        // template: '<div v-bind:title="message">oppo</div>'
        // template: '<div v-html="message">oppo</div>'
    });
    const vm = app.mount("#wei");
</script>
</html>
```

