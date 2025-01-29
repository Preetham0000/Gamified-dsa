import { defineConfig } from 'vite'; // Import Vite's configuration function
import react from '@vitejs/plugin-react'; // Import the React plugin for Vite

// https://vitejs.dev/config/
// Export the Vite configuration
export default defineConfig({
  plugins: [react()], // Enables React support in Vite
  optimizeDeps: {
    exclude: ['lucide-react'], // Prevents 'lucide-react' from being pre-bundled by Vite
  },
});
