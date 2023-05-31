/*
 * Author  rhys.zhao
 * Date  2023-05-30 17:57:59
 * LastEditors  rhys.zhao
 * LastEditTime  2023-05-31 13:52:28
 * Description
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './'
});
