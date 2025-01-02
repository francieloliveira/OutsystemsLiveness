import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/Components/LivenessQuickStartReact.js', // Arquivo de entrada
  output: {
    file: 'LivenessBundle.js',  // Arquivo único de saída
    format: 'iife',  // Formato IIFE
    name: 'LivenessBundle',  // Nome global da variável
    sourcemap: true,  // Geração de sourcemap
    inlineDynamicImports: true, // Força a inclusão de importações dinâmicas no arquivo único
  },
  plugins: [
    babel({
      exclude: 'node_modules/**', // Exclui node_modules do Babel
      presets: [
        '@babel/preset-env', // Para transformar JS moderno
        '@babel/preset-react' // Para transformar JSX
      ],
      babelHelpers: 'bundled', // Configura os helpers do Babel
    }),
    nodeResolve({
      preferBuiltins: true, // Prioriza módulos internos do Node.js
    }),
    commonjs(), // Adiciona suporte para módulos CommonJS
    json(), // Adiciona suporte para importar arquivos JSON
    postcss(), // Adiciona suporte para processar CSS
  ],
  context: 'window', // Define o contexto global para evitar problemas com `this`
};
