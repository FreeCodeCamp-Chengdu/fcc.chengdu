### FCC成都社区官网项目

#### 技术栈
- node V7.9.0+
- scss css预处理
- React 16.2.0

#### 项目结构

- pubilc ------------------- 公共文件存放
- src ---------------------- 项目源代码
    - layouts  ------------- 页面结构
    - pages    ------------- 具体页面

#### 备注

**1. 项目采用 [create-react-app](https://github.com/facebook/create-react-app) 创建**

**2. Why node-sass-chokidar?**

node-sass has been reported as having the following issues:

- node-sass --watch has been reported to have performance issues in certain conditions when used in a virtual machine or with docker.

- Infinite styles compiling [#1939](https://github.com/facebook/create-react-app/issues/1939)

- node-sass has been reported as having issues with detecting new files in a directory [#1891](https://github.com/sass/node-sass/issues/1891)

node-sass-chokidar is used here as it addresses these issues.