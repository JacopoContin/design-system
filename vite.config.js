import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Library build mode
  if (mode === 'lib') {
    return {
      plugins: [
        react(),
        dts({
          insertTypesEntry: true,
          include: ['src/**/*.{js,jsx}'],
          outDir: 'dist',
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.js'),
          name: 'RadixDesignSystem',
          formats: ['es', 'cjs'],
          fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
        },
        rollupOptions: {
          // Externalize dependencies that shouldn't be bundled
          external: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            '@radix-ui/react-dialog',
            '@radix-ui/react-select',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tooltip',
          ],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react/jsx-runtime': 'jsxRuntime',
            },
            assetFileNames: (assetInfo) => {
              if (assetInfo.name?.endsWith('.css')) return 'style.css';
              return assetInfo.name;
            },
          },
        },
        sourcemap: true,
        emptyOutDir: true,
        cssCodeSplit: false,
      },
    };
  }

  // Default dev mode
  return {
    plugins: [react()],
  };
});
