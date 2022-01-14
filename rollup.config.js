import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	// If using any exports from a symlinked project, uncomment the following:
	// preserveSymlinks: true,
	  input: ['components/index.js'],
	  output: {
		  file: 'bundle.js',
		  format: 'iife',
		  sourcemap: true
	  },
	  plugins: [
		resolve(),
		commonjs()
	  ]
  };