import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/Components/LivenessQuickStartReact.js',
  output: {
    dir: 'dist', // Gera múltiplos arquivos no diretório 'dist'
    format: 'es', // Formato ES modules
    sourcemap: true, // Mapa de fontes para debug
  },
  plugins: [
    nodeResolve({
      preferBuiltins: true, // Prioriza módulos internos do Node.js
    }),
    commonjs({
      include: /node_modules/, // Garante que módulos CommonJS sejam convertidos corretamente
    }),
    babel({
      exclude: 'node_modules/**', // Exclui node_modules do Babel
      presets: ['@babel/preset-env', '@babel/preset-react'], // Suporte para JS moderno e JSX
      babelHelpers: 'bundled', // Babel helpers para evitar importação de código extra
    }),
    json(), // Suporte para importar arquivos JSON
    postcss(), // Suporte para processar CSS
  ],
  context: 'window', // Define o contexto global para evitar problemas com `this`
};
