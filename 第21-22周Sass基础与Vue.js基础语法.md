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

### 第二章Vue.js基础语法、生命周期与事件

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

#### vue指令的简写

```vue
<!--点击事件-->
<h4 v-on:click="handleClick">{{message}}</h4>  
<h4 @click="handleClick">{{message}}</h4>  <!--等价于-->

<!--绑定属性-->
<h4 v-bind:title="message">{{message}}</h4>  
<h4 :title="message">{{message}}</h4>  <!--等价于-->
```

```javascript
        data() {
            return {
                message: '<h4>冰红茶 6.99</h4>',
                disabled:false,
                name:'title',
                event:'mouseenter'}},
        methods: {
            handleClick(){
                //阻止默认行为。无法跳转到百度
                // e.preventDefault(); 这个可以加到@click后  @click.prevent
                alert('hi');
            }},
        template: `<form action="https://www.baidu.com" @click.prevent="handleClick">
                    <button type="submit">提交</button>
            </form>`
        // <h4 @click="handleClick">{{message}}</h4>  <!--v-on:click 等价于 @click。 v-bind: 等价于 :-->
```



#### 计算属性computed和方法methods

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 8</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="wei">
        <h4>{{message}}</h4>
    </div>
</body>

<script>
    const app = Vue.createApp({
        data() {
            return {
                message: '冰红茶 yooo',
                count:3,
                price:9,
            }
        },
        // computed和methods更高效,有缓存机制。建议用前者
        computed:{
             //当计算属性依赖的内容发生变更时,才会重新执行计算 (this.price发生改变才会变)
            total(){
                // return this.count*this.price
                return Date.now()+this.price;
            }
        },
        methods: {
            handleClick(){
                alert('hi');
                console.log(this.message);
            },

            formatString(string){
                return string.toUpperCase();
            },
             //只要页面重新渲染,才会重新计算
            getTotal(){
                // return this.count*this.price
                return Date.now()
            }
        },

        //{{total}}是从计算属性那拿到的
        template: `<h5>total: {{total}}</h5>
        <hr>
        <h6>getTotal: {{getTotal()}}</h6>
        <div @click="handleClick">
              {{formatString(message)}}
            </div>`
    });
    const vm = app.mount("#wei");
</script>
</html>
```

#### watch 监听器

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 9</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="wei">
        <h4>{{message}}</h4>
    </div>
</body>

<script>
    //data & methods & computed & watcher
    //computed 和 method 都能实现的一个功能,建议使用 computed,因为有缓存
    //computed 和 watcher 都能实现的功能,建议使用computed 因为更加简洁
    const app = Vue.createApp({
        data() {
            return {
                message: '冰红茶 yooo',
                tip:"vm.$data.price=80",
                count:3,
                price:9,
                newTotal:27,
            }
        },
        //监听器 (通过watch可以监听上面data定义的变量的改变,去做一些异步的操作)
        watch:{
            //price 发生变化时,函数会执行
            price(current,prev){ //变化前的值 和 变化后的值
                console.log(current,prev);
                this.newTotal = current*this.count;
                // setTimeout(() => {
                //     alert("2秒后")
                // }, 2000);
            }
        },
        computed:{
             //当计算属性依赖的内容发生变更时,才会重新执行计算 (this.price发生改变才会变)
            total(){
                // return this.count*this.price
                return Date.now()+this.price;
            }
        },
        },
        //{{total}}是从计算属性那拿到的
        template: `
        <hr>
        <h6>{{newTotal}}</h6>
            <hr>
            <h6>{{tip}}</h6>`
    });
    const vm = app.mount("#wei");
</script>
</html>
```



#### vue的css样式

```html
//错误的写法, :style="styleObject" 直接这样写是拿不到styleObject的值的,要通过props
<!--Property "styleObject" was accessed during render but is not defined on instance. -->
app.component('demo',{
        // :class="$attrs.class" 获取上面传进来的class属性
        template: `
            <h6 :class="$attrs.class">single</h6>
            <h6 :style="styleObject">min</h6>`
    })
```

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 9-1</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="wei">
        <h4 class="red">{{message}}</h4>
    </div>
</body>
<style>
    .green{
        color: green;}
    .red{
        color: red;}
</style>
<script>
    const app = Vue.createApp({
        data() {
            return {
                message: '冰红茶 yooo',
                tip:"vm.$data.color='green'",
                color:"red",
                //对象的形式  true|false 表示要不要进行展示
                colorObject:{red:false, green:true},
                //数组的形式
                colorArray:['red','green',{brwon:true}],
                styleString:'color: aqua;',
                styleObject:{
                    color:'aqua'
                }}},

        methods: {
        },
        template: `
        <div :class="color">
            <h6>{{tip}}</h6>
            <hr>
            <h6 :style="styleObject">{{message}}</h6>
            <hr>
            <!--调用子组件 demo -->
            <demo class="green"/>

            </div>
            `
    });
    app.component('demo',{
        // :class="$attrs.class" 获取上面传进来的class属性
        template: `
            <h6 :class="$attrs.class">single</h6>
            <h6>min</h6>`
    })
    const vm = app.mount("#wei");
</script>
</html>
```

#### Vue的条件渲染

<img src="C:\Users\w1216\AppData\Roaming\Typora\typora-user-images\image-20221210235052010.png" alt="image-20221210235052010" style="zoom:90%;" />

```vue
        template: `
        <div v-if="show">
              {{message}}
            </div>
        <hr>
        <div v-show="show">
              {{message}}
            </div>
            `
v-if是通过控制这个元素在dom上的存在与否,来控制它的展示和隐藏。
v-show是通过style样式来控制的

频繁改变dom元素的显示与否,建议使用v-show (不会频繁销毁dom,性能会比较好)
```

```vue
if 和 else要贴着写

        template: `
        <div v-if="show">
              hello
            </div>
        <hr>
        <div v-else-if="conditionTwo">
              hi
            </div>
        <hr>
        <div v-else>
              hi
            </div>
        <hr>
            `
```



#### vue的listArray、listObject遍历以及数组操作

```vue
知识点有些多:
1.数组、对象数组的遍历
2. 数组的变更函数
3.直接替换数组
4.直接更新数组的内容
5.直接添加对象的内容,也可以自动的展示出来
6.template标签的使用。(不会渲染到页面上)

一些注意项
        // 这里的key值尽量用唯一的东西。这样vue就知道这个元素要不要复用
        // 当使用vue做循环的时候,循环的每一项尽量的给唯一的key值,这样会有效的提升vue的性能
        // 在for循环里面用if判断(在同一个标签内)。for的优先级是比if高的,直接写if是不生效的。可以在显示item/value上的div包裹作判断
        // <template 这里的template标签是一个占位符并不会实际渲染到页面上（可以少一个层级这样子?）
```



```vue
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 11</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
    <div id="wei">
        <h4>{{message}}</h4>
    </div>
</body>

<script>
    const app = Vue.createApp({
        data() {
            return {
                message: '冰红茶 yooo',
                listArray: ["yang", "chen", "wei"],
                listObiect: {
                    "name": "liu",
                    "sex": "man",
                    "age": 25
                }
            }
        },
        methods: {
            handleAdd() {
                // 1.数组的变更函数 push pop shift unshift splice sort reverse
                // this.listArray.push("hi")
                // this.listArray.pop() 每次从数组里面减少一个
                // this.listArray.shift() //shift 从数组最前面开始减少
                // this.listArray.unshift("hi") //shift 从数组最前面开始增加
                // this.listArray.reverse() //reverse 从数组反向

                // 2.直接替换数组
                // this.listArray=["万古人间四月天","铁马冰河入梦来"]
                // this.listArray=["万古人间四月天"].concat(["铁马冰河入梦来"]);
                // 过滤操作
                // this.listArray = ["yong", "wa"].filter(item => item === "wa");

                // 3.直接更新数组的内容
                this.listArray[0] = "hei";
            },
            handleAddObj() {
                // 1.直接添加对象的内容,也可以自动的展示出来
                this.listObiect.age = 30
            }
        },

        // 这里的key值尽量用唯一的东西。这样vue就知道这个元素要不要复用
        // 当使用vue做循环的时候,循环的每一项尽量的给唯一的key值,这样会有效的提升vue的性能
        // 在for循环里面用if判断(在同一个标签内)。for的优先级是比if高的,直接写if是不生效的。可以在显示item/value上的div包裹作判断
        // <template 这里的template标签是一个占位符并不会实际渲染到页面上（可以少一个层级这样子?）
        template: `
        <div>
        <template v-for="(item,index) in listArray" :key="item" >
            <div  v-if="item !=='chen'">
                {{index}}.{{item}}
                </div>
            </template>
        </div>
            <button @click="handleAdd">添加</button>
        <hr>
        <div v-for="(value,key,index) in listObiect" :key="value">
              {{index}} -- {{key}} -- {{value}}
            </div>
            <button @click="handleAddObj">修改obj</button>

            <hr>
            <div v-for="item in 10">
              {{item}}
            </div>
            `
    });
    const vm = app.mount("#wei");
</script>

</html>
```



#### Vue事件修饰符

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 12</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="wei">
        <h4>{{message}}</h4>
    </div>
</body>

<script>
    // 事件修饰符:stop,prevent,capture,self,once,passive
    const app = Vue.createApp({
        data() {
            return {
                message: '冰红茶 yooo',
                counter: 0
            }
        },
        methods: {
            //接收event事件
            handleBtnClick(num, event) {
                // console.log(event);
                // console.log(event.target);
                // this.counter = this.counter + num;
                // this.counter += 1;
                this.counter = this.counter+1
                // alert(1)
            },
            handleBtnClick1(event) {
                // alert(2)
            },
            handleDivClick(event) {
                alert("这是div")
            }
        },
        template: `
        <hr>
        <div @click.once="handleDivClick()">
            // <a href="www.baidu.com">百度</a>
            <h4>{{counter}}</h4>
        <button @click="handleBtnClick(2,$event),handleBtnClick1()">点击</button>
        </div>
            `
        // <button @click="counter +=1">点击</button> 也可以直接这样写。实现counter+1
        // 如果我们要额外传递参数同时要要获取到原生的事件对象的话,可以这样写  @click="handleBtnClick(2,$event)
        //点击事件的冒泡。点击div里面的btn,btn会先做出响应,然后会冒泡到div
        //怎么停止冒泡? @click.stop停止向外做事件的冒泡
        // @click.self 会做一个判断。只有点击到自己的时候,才会触发(必须是点击到自己的这个dom标签才会触发,子标签触发的dom事件不会执行),
        //@click.prevent 阻止默认行为。加上之后,比如a标签的跳转就不支持了
        //@click.capture 把事件的运营模式变成捕获(默认是冒泡,冒泡是由内到外,捕获时从外到内)
        //@click.once只执行一次函数
    });
    const vm = app.mount("#wei");
</script>
</html>
```

#### Vue的按键修饰符和鼠标修饰符

```vue
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 12-1</title>
    <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
    <div id="wei">
        <h4>{{message}}</h4>
    </div>
</body>

<script>
    //按键修饰符
    const app = Vue.createApp({
        data() {
            return {
                message: '冰红茶 yooo',
                counter: 0
            }
        },
        methods: {
            handleKeyDown(evevnt) {
                console.log("hi hi");
            },
        },
        // @keydown 是直接就获取输入框中的内容了
        //@keydown.enter 是回车之后才获取 类似的键 enter,tab,delete,esc,up,right
        // 鼠标修饰符: left，right,middle
        //精确修饰符: exact 精确到某个按键  @click.ctrl.exact (本来按住ctrl键加任意键才会触发),下现在是按住ctrl键就会触发
        template: `
            <input @keydown.enter="handleKeyDown" />
            <hr>
            <h4 @click.ctrl.exact="handleKeyDown">message</h4>
            `
    });
    const vm = app.mount("#wei");
</script>

</html>
```



#### vue的双向绑定

```js
 // input、textare、checkbox、radio、select
    //修饰符 <input v-model.lazy="text" />不会立刻同步绑定的值(输入框失去焦点的时候才会变化)
            //v-model.number 可以做数字类型的转换
            // trim 去除字符前后的空格,再存储到绑定的数据上
    const app = Vue.createApp({
        data() {
            return {
                // message:true //如果双向绑定的是 checkbox,message的值必须是true或者false
                // message:[] //涉及到是存储checkbox value值的时候可以是一个数组
                // message:'' //如果radio的话,因为是单选,这里初始值设置为空字符就行
                // message: '冰红茶 yooo',
                // message:"",//如果是select的话可以给一个默认值 message:"A",
                options:[{
                    // option遍历这里的数据。 这样写的好处是 展示给用户看单纯是ABC,存储进去的可以是{value:'A'}
                    text:'A',value:{value:'A'},
                },
                {
                    text:'B',value:{value:'B'},
                },
                {
                    text:'C',value:{value:'C'},
                }
            ],
                //checkbox当没选中的时候显示false。选中时显示Yes,取消选中时显示No
                message:false,
                text:'hi'
            }
        },

        // message的值变化了,input框的内容变化了。反过来也一样这就是双向绑定,,,
        template: `
        <h4>{{typeof text}}</h4> <h4>{{text}}</h4>
        <hr>
        <input type="checkbox" v-model="message" true-value="Yes" false-value="No"/>
        <hr>
        <input v-model.trim="text" />
            `
            // <input v-model="message" />
            // <textare v-model="message" />
            // 不辣 <input type="checkbox" v-model="message" value="不辣"/>
            // 微辣 <input type="checkbox" v-model="message" value="微辣"/>
            // 中辣 <input type="checkbox" v-model="message" value="中辣"/>

            // 不辣 <input type="radio" v-model="message" value="不辣"/>
            // 微辣 <input type="radio" v-model="message" value="微辣"/>
            // 中辣 <input type="radio" v-model="message" value="中辣"/>

            // <select v-model="message">
            // <option disabled value=''>请选择</option>
            // <option>A</option>
            // <option>B</option>
            // <option>C</option></select>

            //     <select v-model="message">
            //     <option disabled value=''>请选择</option>
            //     <option v-for="(item,index) in options" :key="item"
            //      :value="item.value">{{item.text}}</option>
            // </select>

            //<input type="num" v-model.lazy="text" />

            //<input type="number" v-model.number="text" />
    });
    const vm = app.mount("#wei");
```



## vue基础入门(中)

### 第1章Vue.js组件与插槽

#### 组件的概念

<img src="C:\Users\w1216\AppData\Roaming\Typora\typora-user-images\image-20221214010159329.png" alt="image-20221214010159329" style="zoom:50%;" />

```
组件:页面的一部分
```

##### 全局组件

```vue
<script>
    // 这里是创建一个vue的实例。vue的应用。
    //但是在创建应用的时候,它会接收一个参数,而这个参数会决定vue的根组件怎么去渲染。
    //组件具备复用性而且相互独立,互不影响(组件里的数据是被当前这个组件独享的)
    //全局组件,只要定义了,处处可以使用,性能不高,但是使用起来简单
    const app = Vue.createApp({
        data() {
            return {
                message: '冰红茶 yooo',
            }
        },
        template: `
        <div>
            <counter-parent/>
            <counter/>
            <counter/>
        <hr>
        <goods/>
        </div> `,
    });
    //组件里嵌套了一个组件
    app.component('counter-parent', {
        template: `<counter/>`
    })
    //定义组件 通过 <counter/> 即可引用
    app.component('counter', {
        data() {
            return {
                counter:1
            }
        },
        template: `<h4 @click='counter += 1'>{{counter}}</h4>`
    })
    app.component('price', {
        template: "<h4>5.99￥</h4>"
    })
    app.component('goods', {
        template: "<h4>message</h4>"
    })
    const vm = app.mount("#wei");
```



#### 局部组件

```vue
<body>
    <div id="wei">
    </div>
</body>
<script>

    //局部组件 注册后才能使用
    const counter10 = {
        data() {
            return {
                counter:1
            }},
        template: `<h4 @click='counter += 1'>{{counter}}</h4>`
    }

      //局部组件
    const HelloWorld = {
        data() {
            return {
                text:'橙子'
            }},
        template: `<h4>{{text}}</h4>`
    }
    // 这里是创建一个vue的实例。vue的应用。
    //但是在创建应用的时候,它会接收一个参数,而这个参数会决定vue的根组件怎么去渲染。
    //组件具备复用性而且相互独立,互不影响(组件里的数据是被当前这个组件独享的)
    //全局组件,只要定义了,处处可以使用,性能不高,但是使用起来简单,名字建议 小写字母单词,中间有横线间隔
    //局部组件,定义了要注册之后才能使用,性能比较高,使用起来有些麻烦,建议大写字母开头,驼峰命名
    //局部组件使用时,要做一个名字和组件间的映射对象,不写映射,Vue底层也会自动尝试帮你做映射,,
    const app = Vue.createApp({
        data() {
            return {
                message: '冰红茶 yooo',
            }},
        components:{
            counter10,HelloWorld
        },
        template: `
        <div>
            <counter10 />
            <HelloWorld />
        </div>
            `,});
    const vm = app.mount("#wei");
</script>
```

#### Vue组件间传值

```vue
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 15</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>

<body>
    <div id="wei">
    </div>
</body>

<script>
    const app = Vue.createApp({
        data() {
            return {
                message: '冰红茶 yooo',
                // number:"10086"
                //传给子组件的甚至可以是一个函数
                // number:()=>{alert(10086)}
                number:10086
            }},
        // <test content="hi hi "/> 把数据通过属性的形式传递给test组件。组件可以通过props接收
        //组件的动态属性(传参)。通过v-bind绑定传递给组件的属性值,有data里面的数据决定组件的内容
        template: `
        <div>
            <h4>{{message}}</h4>
        <hr>
        <test v-bind:content="number"/>
        </div>
            `,
    });
    //type:String,Boolean,Array,Object,Function,Symbol
    //required 必填
    //default 默认值,,
    //validator 检验传进来的值
    app.component("test",{
        // 子组件可以对父组件传进来的参数做一个校验。这里父组件传进来的必须是一个String类型
        props:{
            // 'content':Function,
            content:{
                type:Number,
                // required:true
                // default:9000
                validator:function(value){
                    return value<100000;
                },
                default:()=>{
                    return 9000
                }
            }},
        methods: {
            handleClick(){
                alert("hi"),
                this.content()
            }
        },
        template:`<h4 @click="handleClick">{{content}}here is Test</h4>
        <hr>
        <h4>{{content}}here is Test</h4>
        {{typeof content}}
        `
    })
    const vm = app.mount("#wei");
</script>
</html>
```



#### Vue组件的一些细节问题

```vue
//之所以vue里面会有单项数据流的这个概念。是因为子组件修改父组件的值会导致一些问题的出现,数个子组件修改了父组件的值会导致其他子组件引用的值也跟着变化
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 15</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>

<body>
    <div id="wei">
    </div>
</body>

<script>
    // <test v-bind:="params" />
    // <test :content="params.content :a="params.a" :b="params.b" :c="params.c" />
    // 属性传的时候,使用content-abc 这种命名,接的时候,使用 contentAbc 命名
    // 单项数据流的概念:(父组件的数据可以流向子组件但是子组件不能修改这个值。可以用不能改)
    const app = Vue.createApp({
        data() {
            return {
                message: '冰红茶 yooo',
                params:{
                    number:10086,
                    a:123,
                    b:456,
                    c:789
                },
                content:"hello",
                num:1
            }},
        template: `
        <div>
            <h4>{{message}}</h4>
        <hr>
        <test v-bind:="params" :content-abc="content" />
        <counter :count="num"/>
        </div>
            `,
        // <test v-bind:content="number" :a="a" :b="b" :c="c" />

    });
    //上面指定的名称是 content-abc。但是下面要用的时候使用contentAbc才行
    app.component("test",{
        props:["number","a","b","c","contentAbc"],
        template:`
        <hr>
        <h4>{{number}}-{{a}}-{{b}}-{{c}}here is Test</h4>
        <h4>{{contentAbc}}</h4>
        {{typeof a}}
        `
    })
    app.component("counter",{
        props:['count'],
        data() {
            return {
                // 相当于复制了一份再修改是可以的
                myCount:this.count
            } },
        template:`<h4 @click="myCount +=1">{{myCount}}</h4>`
        // template:`<h4 @click="count +=1">{{count}}</h4>`
    })
    const vm = app.mount("#wei");
</script>
</html>
```



#### Non-prop 属性和$attrs

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 17</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>

<body>
    <div id="wei">
    </div>
</body>

<script>
    // Non-prop 属性 就是说父组件给子组件传递属性时,子组件不通过props来接收
    const app = Vue.createApp({
        data() {
            return {
                message: '冰红茶 yooo',
            }
        },
        template: `
        <test style="color:red;" m='hello'/>
            `,
    });
    // 当子组件template 有多个标签的时候,就不会自动拿到上面的style属性了,要通过v-bind="$attrs"指定(可以拿到父组件传过来的)
    app.component("test",{
        mounted() { //当页面加载完成之后会自动执行。钩子函数中也可以通过$attrs拿到父组件传过来的属性
            console.log(this.$attrs);
        },
        // props:["message"],
        // inheritAttrs:false,  //不继承父组件传过来的属性。
        template:`
        <div>hihi</div>
        <div v-bind="$attrs">hihi</div>
        <div :m='$attrs.m'>hihi</div>
        `
        // <h4>{{message}} hihi</h4>
    })
    const vm = app.mount("#wei");
</script>
</html>
```



#### 组件间如何通过事件进行通信

```java
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson 18</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
    <div id="wei">
    </div>
</body>
<script>
    // 实现父子组件的通信
    const app = Vue.createApp({
        data() {
            return {
                message: '冰红茶 yooo',
                count:1
            }
        },
        methods: {
            handleAddOne(){
                this.count +=1
                // this.count = this.count+1;
            },
            handleAdd(param1,param2){//这里的param是子组件传过来的参数
                // this.count = this.count+param;
                // this.count +=param2;
                this.count = param1;
            } },
        template: `
        <test :count="count" @add='handleAdd'/>
            `,
            // <test :count="count" @add-one='handleAddOne'/>
            // 触发事件用驼峰。监听事件用横线间隔
            // <test :count="count" @addOne='handleAddOne'/> 这里要写成add-one

    });
    app.component("test",{
        props:["count"],
        // emits:["add"], //组件会向外触发一个add事件。emits:["min"] 如果没有这个事件则会警告。可以梳理向外触发了什么事件
        // 还可以写成对象的形式。可以校验传过去的参数。
        emits:{
            add:(count)=>{
                alert(count)
                if (count>0) {
                    alert("ok")
                    return true;
                }
                alert("no")
                return false;
            }},
        methods: {
            handleClick(){
                // 这里触发了一个事件将会在上面被父组件监听到,并执行相应的操作
                // this.$emit('addOne')
                // this.$emit('add',2,3) //每次加2
                this.$emit('add',this.count+5,2) //可以直接在子组件这里处理完成之后,再传回给父组件更新
            }
        },
        template:`
        <div>
            <h4 @click="handleClick">{{count}}</h4>
            </div>
        `})
    const vm = app.mount("#wei");
</script>
</html>
```



#### 利用v-model简化父组件与子组件通信

```vue
<script>
    // 利用v-model简化父组件与子组件通信
    const app = Vue.createApp({
        data() {
            return {
                message: '冰红茶 yooo',
                count:1
            }},
        //要想改变的modelValue这个默认值。可以在<test v-model:newName="count"/>修改
        template: `
        <test v-model="count"/>
            `,
    });
    app.component("test",{
        props:["modelValue"], //要想接收来自v-model绑定的值。这里必须是modelValue
        emits:[
            'add'
        ],
        methods: {
            handleClick(){
                // 这里触发事件的名字一定要叫 update:modelValue
                this.$emit('update:modelValue',this.modelValue+5,2)
            }
        },
        template:`
        <div>
            <h4 @click="handleClick">{{modelValue}}</h4> </div>`
    })
    const vm = app.mount("#wei");
</script>
```



#### v-model的高级用法  (v-mdeo传递多个属性  v-model传递修饰符)

```vue

<script>
    // 利用v-model简化父组件与子组件通信
    const app = Vue.createApp({
        data() {
            return {
                count:1,
                count1:1,

            }
        },
        template: `
        <test v-model:count="count" v-model:count1="count1"/>
            `,
    });
    app.component("test",{
        props:["count","count1"],
        methods: {
            handleClick(){
                this.$emit('update:count',this.count+1)
            },
            handleClick1(){
                this.$emit('update:count1',this.count1+2)
            }},
        template:`
        <div>
            <h4 @click="handleClick">{{count}}</h4>
            <h4 @click="handleClick1">{{count1}}</h4>
            </div>
        `})
    const vm = app.mount("#wei");
</script>
```

```javascript
const app = Vue.createApp({
        data() {
            return {
                count: 'a',
            }
        },
        template:
        // v-model.uppercase 在传递uppercase这个修饰符,后面在子组件中可以拿到
         `<test v-model.uppercase="count" />
            `,
    });
    app.component("test", {
        props: {
            "modelValue": String,
            "modelModifiers": {  //v-model.uppercase="count" 这里可以拿到uppercase
                default: () => ({}) //不传递修饰符的时候,默认为空
            }
        },
        mounted() {
            //uppercase
            console.log(this.modelModifiers);
        },
        methods: {
            handleClick() {
                let newValue = this.modelValue+'b';
                if (this.modelModifiers.uppercase) {
                    newValue = newValue.toUpperCase(); //将所有内容转化成大写
                }
                this.$emit('update:modelValue', newValue)
            },
        },
        template: `
        <div>
            <h4 @click="handleClick">{{modelValue}}</h4>
            </div>
        `
    })
    const vm = app.mount("#wei");
</script>
```



#### slot 插槽以及具名插槽

```vue
<script>
    //slot 插槽 (slot没办法绑定事件)
    //父模板里调用的数据属性,使用的都是父模板里的数据
    //子模板里调用的数据属性,使用的都是子模板里的数据
    //具名插槽 (可以调整位置,更加灵活和方便)
    const app = Vue.createApp({
        data() {
            return {
                message: '橘子',
            }},
        template:
         `<myform>
            <div>{{message}} send</div>
            </myform>

         <myform>
            <button>send</button>
            <test/>
            </myform>

            <myform>
            </myform>

            <layout>
                <template v-slot:header>
                <h5>header</h5>
                </template>

                <template v-slot:footer>
                <h5>footer</h5>
                </template>
                </layout>
            `,
    });
    app.component("layout", {
        template: `
        <div>
          <slot name="header"></slot>  
          <div>content</div>
          <slot name="footer"></slot>  
        </div>
        `
    })
    app.component("myform", {
        methods: {
            handleClick() {
                alert("1234")
            },
        },
        // 如果slot传了值就不会用默认值
        template: `
        <div>
            <input />
            <span @click="handleClick">
            <slot>默认值</slot>
            </span>
            </div>
        `
        // <button @click="handleClick">send</button>
    })
    app.component("test", {
        methods: {
            handleClick() {
                alert("1234")
            },},
        template: `
        <h4>hi</h4>
        `})
    const vm = app.mount("#wei");
</script>
```



#### slot高级语法 (传递参数和简写)

```vue
<script>
    //具名插槽 (可以调整位置,更加灵活和方便)
    // v-slot的简写 v-slot:header  简写  #header
    //作用域插槽 
    const app = Vue.createApp({
        
        data() {
            return {
                message: '橘子',
            }
        },
        //用slotProps 接收子组件 slot 传过来的值
        //解构(es6语法) v-slot="slotProps"  简写 
        template:

        // <list v-slot="slotProps">
        //     <span>{{slotProps.item}}</span>
        //     <div>{{slotProps.text}}</div>
        //  </list>
         `
         <list v-slot="{item,text}">
            <span>{{item}}</span>
            <div>{{text}}</div>
         </list>

            <layout>
                <template #header>
                <h5>header</h5>
                </template>

                <template #footer>
                <h5>footer</h5>
                </template>
                </layout>
            `,
    });
    app.component("list", {
        data() {
            return {
                list:[1,2,3],
                text:"hihi"
            } },
        template: `
        <div>
            <slot v-for="item in list" :item="item" :text="text"/>
        </div>
        `
        // <div v-for="item in list">{{item}}</div>
    })
    app.component("layout", {
        template: `
        <div>
          <slot name="header"></slot>  
          <div>content</div>
          <slot name="footer"></slot>  
        </div>
        `
    })
    const vm = app.mount("#wei");
</script>
```



#### 动态组件和异步组件

```vue
<script>
    //动态组件: 根据数据的变化,结合 component标签,来随时动态切换组件的显示  (<keep-alive>标签缓存)
    //异步组件: 异步执行某些组件的逻辑,这就叫做异步组件 (比如延时执行)

    //定义异步组件
    // const AsyncCommonItem = Vue.defineAsyncComponent(()=>{
    //     return new Promise(()=>{})})
    const app = Vue.createApp({
        data() {
            return {
                message: '橘子',
                // currentItem:'input-item'
                currentItem: 'common-item'
            }},
        methods: {
            handleChange() {
                console.log(this.currentItem);
                if (this.currentItem == "common-item") {
                    this.currentItem = "input-item"
                } else {
                    this.currentItem = "common-item"
                }}},
        //使用 <keep-alive>标签之后,之前input输入框切换到h4标签的原先输入内容会消失这个情况就解决了 (缓存)
        template: `
         <keep-alive>
            <component :is="currentItem"></component>
         </keep-alive>

         <button @click="handleChange">Change</button>

         <async-common-item />
            `,
        // 使用动态组件 component 来代替这两行的显示问题
        //<input-item v-show="currentItem === 'input-item'"></input-item>
        //<common-item v-show="currentItem === 'common-item'"/>
    });
    app.component("input-item", {
        template: `
        <input />
        `
    })
    app.component("common-item", {
        template: `
        <h4>hi </h4>
        `
    })
    //注册异步组件
    app.component("async-common-item", Vue.defineAsyncComponent(() => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    template: `<h4>hi hi async Component</h4>`,
                })
            }, 2000);
        })}));
    const vm = app.mount("#wei");
</script>
```



#### vue组件基础  v-once   ref   provide / inject

```vue
<script>
    // v-once 让某个元素标签只渲染一次
    // ref 实际上是获取dom 节点用的一个语法
    // provide / inject 多级组件传值 (不用层层传递。但现在有缺点不会跟随变化)
    const app = Vue.createApp({
        data() {
            return {
                message: '橘子',
                // currentItem:'input-item'
                count: 1,
                num:108,
                tag:"半缘修道半缘君。",
            }
        },
        // provide:{
        //     tag:"半缘修道半缘君",
        //      tag:this.tag
        // },
        //上面的写法不能直接拿到data里面的值。要写成对象的形式
        provide(){
            return{
                tag:this.tag
            }},
        //要想获取dom,必须要在标签挂载之后。所以在页面渲染完成才获取
        mounted() {
            console.log(this.$refs.num);
            // this.$refs.num.innerHTML = "10086"  //可以在获取之后,来操纵dom
            console.log(this.$refs.common);
            // this.$refs.common.sayHi() //通过ref获取到子组件的方法,然后调用
        },
        methods: {
        },
        //有v-once的标签只渲染一次。后面就不再渲染了 (vm.$data.count)
        template: `
         <div @click="count +=1" v-once>
            <h4>{{count}}</h4>
            </div>
            <hr>
            <div ref="num">
                {{num}}
            </div>
            <hr>
            <common-item ref="common"/>
            <hr>
            <child :message="message"/>
            `,
    });
    app.component("common-item", {
        methods: {
            sayHi(){
                alert('Hi')
            } },
        template: `
        <h4>hi, here is common-item </h4>
        `
    })
    // 多级组件传值 (原先用props接收传递的太繁复了。用provide/inject可以直达,不需要层层传递)
    app.component("child", {
        props:["message"],
        template: `
        <child-child :message="message"></child-child>
        `
    })
    app.component("child-child", {
        inject:["tag"],
        props:["message"],
        template: `
        <h4>{{message}}</h4>
        <h4>{{tag}}</h4>
        `
    })
    const vm = app.mount("#wei");
</script>
```



### 第2章Vue.js过渡与动画

#### 动画与过渡 开始

```vue
    <title>lesson 23</title>
    <style>
        /* 动画效果。类似要k帧一样 */
        @keyframes leftToRight {
            0% {
                transform: translateX(-100px);
            }

            50% {
                transform: translateX(-50px);
            }

            0% {
                transform: translateX(0px);
            }
        }

        .animation {
            animation: leftToRight 3s;
        }

        /* 过渡
        ease 缓慢过渡效果。 
        当背景色发生变化的时候,会在三秒钟缓慢的变化它的背景色, */
        .transition {
            transition: 3s background-color ease;
        }

        /* .blue{
            background: blue;
        }

        .green{
            background: green;
        } */
    </style>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>

<body>
    <div id="wei">
    </div>
</body>

<script>
    const app = Vue.createApp({
        data() {
            return {
                message: '橘子',
                animate: {
                    animation: false,
                    transition:true,
                    blue:true,
                    green:false
                },
                // 更简洁的方式来改变颜色变化。过渡
                styleObj:{
                    background: 'blue'
                }}},
        methods: {
            handleChange() {
                this.animate.animation = !this.animate.animation
            },
            handleClick() {
                this.animate.blue = !this.animate.blue
                this.animate.green = !this.animate.green
            },
            changeStyle() {
                if (this.styleObj.background=="blue") {
                    this.styleObj.background="green"
                }else{
                    this.styleObj.background='blue'
                }},},
        template: `
            <div :class="animate">
               {{message}}
            </div>
            <button @click="handleChange">change</button>
            <hr>
            <h4 :class="animate" @click="handleClick">半缘修道半缘君</h4>
            <hr>
            <h4 class="transition" :style="styleObj" @click="changeStyle">万古人间四月天</h4>
            `,
    });
    const vm = app.mount("#wei");
</script>
```



#### vue封装的动画和过渡效果

```vue
 <title>lesson 24</title>
    <style>

        /* 动画依赖于v-enter-active和v-leave-active就可以了 */
        @keyframes shake{
            0%{
                transform: translateX(-100px);
            }
            50%{
                transform: translateX(-50px);
            }
            100%{
                transform: translateX(50px);
            }
        }

        /* 出场 */
        .v-enter-from {
            opacity: 0;
            ;
        }

        /* 整个动画出场的过程中 */
        .v-enter-active {
            /* transition: opacity 3s ease-out; */
            animation:shake 1s;
        }

        /* 出场最后？ */
        .v-enter-to {
            opacity: 1;
        }

        /* 离场 */
        /* .v-leave-from {
            opacity: 1;
        } */
        /* 整个动画离场执行的过程中 */
        .v-leave-active {
            transition: opacity 2s ease-;
        }
        /* 离场 */
        .v-leave-to {
            opacity: 0;
        }
    </style>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
    <div id="wei">
    </div>
</body>
<script>
    //单元素/单组件的入场出场动画
    const app = Vue.createApp({
        data() {
            return {
                message: '橘子',
                show: true
            }},
        methods: {
            handleChange() {
                this.show = !this.show
            },},
        // <transition name="hello"> 上面的.v-enter-to 就应该写成 hello-enter-to
        template: `
        <transition>
            <div v-if="show">
               {{message}}
            </div>
        </transition>
            <hr>
            <button @click="handleChange">change</button>
            `,
    });
    const vm = app.mount("#wei");
</script>
```

#### 利用动画库

```vue
 <!-- 引入的动画库 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

        template: `
            <h3 class="animate__animated animate__flash">Hi Hi</h3>
            `,
```

#### js来写动画以及控制动画/过渡的时间

```vue
   <style>
        /* 动画依赖于v-enter-active和v-leave-active就可以了 */
        @keyframes shake {
            0% {
                transform: translateX(-100px);
            }
            50% {
                transform: translateX(-50px);
            }
            100% {
                transform: translateX(50px);
            }
        }
        /* 出场 */
        .v-enter-from {
            color: red;
        }
        /* 整个动画出场的过程中 */
        .v-enter-active {
            /* transition: opacity 3s ease-out; */
            animation: shake 3s;
            transition: all 8s ease-in;
            /* color: green; */
        }
        /* 整个动画离场执行的过程中 */
        .v-leave-active {
            color: red;
            animation: shake 3s;
            transition: all 8s ease-in;}
    </style>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
    <div id="wei">
    </div>
</body>
<script>
    //单元素/单组件的入场出场动画
    //vue用js做动画
    const app = Vue.createApp({
        data() {
            return {
                message: '橘子',
                show: true
            }},
        methods: {
            handleChange() {
                this.show = !this.show
            },
            handleBeforeEnter(el){
                el.style.color="red";
            },
            handleEnterActive(el,done){
                const animation = setInterval(() => {
                    const color = el.style.color;
                    if (color=='red') {
                        el.style.color = 'green'
                    }else{
                        el.style.color = 'red'
                    }
                }, 1000)
                setTimeout(() => {
                    clearInterval(animation);
                    done(); //需要通过done() 来通知执行下一个函数 (比如handleEnterEnd)
                }, 3000);;
            },
            handleEnterEnd(){
                alert(123);
            } },
        // transition里面的参数 type="transition" 代表以过渡效果执行的时间为准。
        // transition 的参数:duration="1000" 只运行一秒(不管动画和过渡是多少秒)
        // :duration="{enter:2000,leave:2000}" 还可以是一个对象
        // :css="false" 禁用css动画
        template: `
        <transition :css="false"
        @before-enter="handleBeforeEnter"
        @enter="handleEnterActive"
        @after-enter="handleEnterEnd"
        >
            <div v-if="show">
               {{message}}
            </div>
        </transition>
            <hr>
            <button @click="handleChange">change</button>
            `,
    });
    const vm = app.mount("#wei");
</script>
```

直接跳到vue下了。动画和过渡没看完

## vue基础入门(下)

#### mixin 混入的概念

```vue
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>

<body>
    <div id="wei">
    </div>
</body>

<script>
    // mixin 混入
    // 组件data、methods 优先级高于 mixin data,methods 优先级
    // 生命周期函数,先执行mixin里面的,再执行组件里面的
    const myMixin={
        data() {
            return {
                num:10, 
                count:1000
            }
        },
        created() {
            console.log("myMixin 我被创建了")
        },
        methods: {
            handleClick() {
                console.log("hi mixin里面的");
            },
        },
    }
    const app = Vue.createApp({
        // data() {
        //     return {
        //         message: '橘子',
        //         num:2
        //     }
        // },
        // 当组件里没有数据的时候myMixin会混进来
        mixins:[myMixin],
        created() {
            console.log("组件里的我被创建了")
        },
        methods: {
            // handleClick() {
            //     console.log("hi 组件里面的");
            // },
        },
        template: `
            <div @click="handleClick">
               {{num}}
            </div>
            `,
    });
    const vm = app.mount("#wei");
</script>
```



#### mixin 混入和组件的优先级

```vue
<script>
    // mixin 混入
    // 组件data、methods 优先级高于 mixin data,methods 优先级
    // 生命周期函数,先执行mixin里面的,再执行组件里面的
    // 自定义的属性 组件中的属性优先级高于 mixin属性的优先级
    const myMixin = {
            num: 10
        }
    const app = Vue.createApp({
        num: 2, //自定义的属性 (使用自定义属性 this.$options.num)
        // 当组件里没有数据的时候myMixin会混进来
        mixins: [myMixin],
        template: `
            <div @click="handleClick">
               {{this.$options.num}} 
            </div>
            <br>
            {{count}}
            <child />
            `,
    });
    // 修改自定义属性num在混入和组件的优先级 mixinVal 高于组件
    app.config.optionMergeStrategies.num = (mixinVal, appValue) => {
        return mixinVal || appValue;
    }
    // 全局的mixin
    // app.mixin({
    //     data() {
    //         return {
    //             num: 10,
    //             count: 1008611
    //         }
    //     },
    //     created() {
    //         console.log("myMixin 我被创建了")
    //     },
    //     methods: {
    //         handleClick() {
    //             console.log("hi mixin里面的");
    //         },
    //     },

    // });
    app.component("child", {
        // mixins: [myMixin], //子组件要用mixin的值要在子组件中引入。(另外还有全局的mixin。全局的就可以直接用)
        template: `<h4>hi chen{{count}}</h4>`
    })
    const vm = app.mount("#wei");
</script>
```



```html
推荐使用 CompositionAPI 而不是 mixin?  vue3之后 前者维护性更高
```

