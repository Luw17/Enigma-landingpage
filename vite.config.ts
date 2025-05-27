import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,     // permite acesso externo (ex: localhost do host)
    port: 5173,     // porta padrão usada no Dockerfile e docker-compose
    strictPort: true // garante falha se a porta já estiver em uso
  }
})
