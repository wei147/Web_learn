<h1 style="text-align: center">WEI 个人网站</h1>
<div style="text-align: center">

<hr>

<img src="C:\Users\w1216\Desktop\20230318051538.png" alt="20230318051538" style="zoom:80%;" />

#### 项目简介
一个基于 vue3 、 vue-router、elementUI 、axios 、Spring Boot 2.2.1 、 MyBatis的前后端分离的个人简约风网站

#### 项目预览： 

#### [http://120.78.161.175/]



#### 前端目录结构

<hr>

```bash
├── /build/          # 项目构建(webpack)相关配置
├── /config/         # 项目开发环境配置
├── /src/            # 源码目录
│ ├── /assets/       # 组件静态资源(图片)
│ ├── /components/   # 公共组件
│ ├── /router/       # 路由配置
│ ├── /views/        # 路由组件(页面维度)
│ ├── App.vue        # 组件入口
│ └── main.js        # 程序入口
├── /static/         # 非组件静态资源
├── .babelrc         # ES6语法编译配置
├── .editorconfig    # 定义代码格式
├── .eslintignore    # ES6规范忽略文件
├── .eslintrc.js     # ES6语法规范配置
├── .gitignore       # git忽略文件
├── index.html       # 页面入口
├── package.json     # 项目依赖
└── README.md        # 项目文档
```



#### 后端目录结构

```
- application 主程序模块
    - common 公共类
    - controller 控制器
    - model 提供了Entity、VO类和通用mapper
    	- dao Mapper
    	- pojo Entity类
    	- dao 线程池相关
    	- vo 封装之后给前端展示的
    - config 自定义权限实现、redis配置、swagger配置、Rsa配置等
    - exception 项目统一异常的处理
    - utils 系统通用工具类
	- filter 过滤器,打印请求和响应信息
	- config 配置跨域与静态资源映射，与Java Config密钥
	- service 接口
		- impl 接口实现类
	- Application.java 程序启动类
```

- 未完待续.....2023年3月18日05:55:37