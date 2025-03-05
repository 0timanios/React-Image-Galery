import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { Client } from 'appwrite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
})
