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
      resolve: {
        alias: {
          '@': resolve(__dirname, './src'),
        },
      },
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
            'lucide-react',
            'recharts',
            'sonner',
            'vaul',
            'class-variance-authority',
            /^@radix-ui\/.*/,
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
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  };
});
