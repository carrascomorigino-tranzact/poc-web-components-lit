import resolve from '@rollup/plugin-node-resolve';

export default {
	// If using any exports from a symlinked project, uncomment the following:
	// preserveSymlinks: true,
	  input: ['components/index.js'],
	  output: {
		  file: 'build.js',
		  format: 'es',
		  sourcemap: true
	  },
	  plugins: [
		resolve()
	  ]
  };