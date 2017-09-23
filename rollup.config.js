const commonjs = require('rollup-plugin-commonjs')
const nodeResolve = require('rollup-plugin-node-resolve')

module.exports = {
  input: './input.js',
  output: [{file: './output.js', format: 'umd'}],
  exports: 'default',
  name: 'myLib',
  external: ['any-package-at-all'],
  globals: {'any-package-at-all': 'AnyPackageAtAll'},
  plugins: [nodeResolve(), commonjs({include: '**/*.js'})],
}
