const program = require('commander');
var child = require('child_process');

// 通过绑定操作处理程序实现命令 (这里description的定义和 `.command` 是分开的)
// 返回新生成的命令(即该子命令)以供继续配置
program
	.command('touch <fileName>')
	.description('touch a file')
	.action(fileName => {
		console.log('clone command called', fileName);
		child.exec(`touch ${fileName}`, function(err, sto) {
			console.log(sto); //sto才是真正的输出，要不要打印到控制台，由你自己啊
		});
	});

program.parse(process.argv);
console.log(program.opts());

//运行：node shell.js touch  a.json
