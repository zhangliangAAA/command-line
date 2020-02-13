const commander = require('commander');
const colors = require('colors');
const program = new commander.Command();
program.version('0.1.0');
/**
 * 常用选项类型，boolean和值
 * 1、类型是boolean(选项后面不跟值)
 * 2、选项跟一个值（使用尖括号声明，参数毕传）第三个参数是默认值
 * 3、混合类型 eg: cheese 可以是输入参数也可使用 --no-cheese即此时为false
 * 4、非毕传参数（使用方括号声明，即传值不是必须的）
 */
program
	.requiredOption('-a, --address <address>', 'enter the address')
	.option('-d, --debug', 'output extra debugging')
	.option('-c, --cheese <type>', 'cheese flavour', 'mozzarella')
	.option('--no-cheese', 'plain with no cheese')
	.option('-k, --kola [type]', 'cheese drinks')
	.option('-p, --pizza-type <type>', 'flavour of pizza')
	.option('-s, --small', 'small pizza size')
	.option('--no-sauce', 'Remove sauce');
program.parse(process.argv);

if (program.debug) {
	console.log(colors.green(program.opts()));
}
if (program.pizzaType || program.small) {
	console.log('pizza details:');
}
if (program.pizzaType) {
	console.log(colors.yellow(`- ${program.pizzaType}`));
}
if (program.small) {
	console.log('- small pizza size');
}
if (program.cheese) {
	console.log(`cheese: ${program.cheese}`);
}
if (program.kola) {
	console.log(`可乐品牌: ${program.kola}`);
}
