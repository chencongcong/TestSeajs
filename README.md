seajs demo test

使用grunt构建

1.安装nodejs  

2.安装grunt-cli

npm install -g grunt-cli

3.通过命令提示行进入目录(我这里是进入的scripts目录):

(参考来源:https://github.com/seajs/seajs/issues/672)

这个目录要准备：package.json 和 Gruntfile.js 文件

4.安装grunt,目前最新的是直接在此目录：

输入 npm install  来检索package.json包里面的版本.

5.Gruntfile.js如果前面已经配置好.

输入 grunt build

6.生成配置过后的文件.

index.html

未构建前使用

seajs.use("application/testApp/application");

构建后使用

seajs.use("dist/testApp/application"); 