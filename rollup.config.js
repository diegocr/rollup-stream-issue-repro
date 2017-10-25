import globals from 'rollup-plugin-node-globals';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import cleanup from 'rollup-plugin-cleanup';
import visualizer from 'rollup-plugin-visualizer';

export default {
    input: 'test.js',
    output: {
        format: 'iife',
        file: 'bundle.js'
    },
    name: 'main',
    plugins: [
        nodeResolve({
            main: true,
            jsnext: true,
            browser: true,
            preferBuiltins: true
        }),
        commonjs({
            include: './**'
        }),
        globals(),
        builtins(),
        // cleanup(),
        visualizer()
    ]
};
