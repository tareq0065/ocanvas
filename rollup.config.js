const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const copy = require('rollup-plugin-copy');
const babel = require('rollup-plugin-babel');
const { uglify } = require('rollup-plugin-uglify');

const packageJson = require('./package.json');

module.exports = {
	input: 'src/index.js',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve({
			browser: true,
		}),
		babel({
			exclude: 'node_modules/**',
			runtimeHelpers: true,
			presets: ['@babel/env', '@babel/preset-react'],
		}),
		commonjs(),
		uglify(),
		postcss(),
		copy({
			targets: [
				{
					src: 'src/variables.scss',
					dest: 'build',
					rename: 'variables.scss',
				},
				{
					src: 'src/typography.scss',
					dest: 'build',
					rename: 'typography.scss',
				},
			],
		}),
	],
};
