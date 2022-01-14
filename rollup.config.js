import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

export default {
	// If using any exports from a symlinked project, uncomment the following:
	// preserveSymlinks: true,
	  input: ['components/index.js'],
	  output: {
		  file: 'bundle.js',
		  format: 'es',
		  sourcemap: true
	  },
	  plugins: [
		resolve(),
		terser({
			ecma: 2020,
			module: true,
			warnings: true,
		  }),
	  ],
	  preserveEntrySignatures: 'strict',
  };