const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const copy = require('rollup-plugin-copy');
const babel = require('rollup-plugin-babel');
const { uglify } = require('rollup-plugin-uglify');

const packageJson = require('./package.json');

const externalDeps = Object.keys(
	Object.assign({}, packageJson.dependencies, packageJson.peerDependencies)
);
const nodeDeps = ['path'];
const external = externalDeps.concat(nodeDeps);

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
			babelrc: true,
			presets: [
				['@babel/preset-env', { modules: false }],
				'@babel/preset-react',
			],
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
			exclude: 'node_modules/**',
			runtimeHelpers: true,
		}),
		commonjs({
			include: /node_modules/,
		}),
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
				{
					src: 'public/effects.min.js',
					dest: 'build/public',
					rename: 'effects.min.js',
				},
				{
					src: 'public/media.min.js',
					dest: 'build/public',
					rename: 'media.min.js',
				},
				{
					src: 'public/shape.min.js',
					dest: 'build/public',
					rename: 'shape.min.js',
				},
				{
					src: 'public/scene.min.js',
					dest: 'build/public',
					rename: 'scene.min.js',
				},
			],
		}),
	],
	external,
};
