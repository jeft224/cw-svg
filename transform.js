const fs = require('fs');
const path = require('path');

const importStatement = `
// 此文件由 transform.js 自动生成
import './style.css'
`

const getExportStatement = (moduleName) => {
  return `export { default as Svg${moduleName} } from './src/${moduleName}'`
}

const main = () => {
  /**
   * 添加这一段代码的原因在于：当你执行yarn build生成svg组件时，会生成一个导出组件索引文件(index.js)；
   * 所以先删除后动态生成
   */
  const indexPath = path.join('src','index.js');
  fs.unlink(indexPath, err => {
    if(err) throw err;
    console.log(`${indexPath} was deleted`);
  })
  const modules = fs.readdirSync('./src');
  const statements = [importStatement];
  modules.forEach((moduleName) => {
    let svgName = moduleName.split('.')[0];
    statements.push(getExportStatement(svgName))
  })
  fs.writeFileSync('./index.js', statements.join('\n'))
}

try {
  main();
} catch (e) {
  console.error(e.message)
  process.exit(1);
}