参考：https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md
发布 & 全局 cli：https://www.cnblogs.com/wmhuang/p/7052587.html

# 新建可发布的命令流程

## 新建 bin 文件夹，编写命令行内容

注意，文件最上面加上：
#!/usr/bin/env node

## 在 package.json 新加字段

"bin": {
"citylog": "./bin/citylog.js"
},

## 执行 npm link 将命令链接到全局

-   结果如下：
    /usr/local/bin/citylog -> /usr/local/lib/node_modules/publish-commander/bin/citylog.js
-   ps:不想要的话可以去 /usr/local/bin 目录先删除掉 citylog

## 此时可在任何地方执行自定义的命令

citylog -c 北京
