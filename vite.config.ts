import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-admin-html',
      configureServer(server) {
        // Serve public/admin/index.html directly for /admin routes
        // This prevents React Router from intercepting the CMS dashboard
        server.middlewares.use((req, res, next) => {
          if (req.url === '/admin' || req.url === '/admin/') {
            const adminHtmlPath = path.resolve(__dirname, 'public/admin/index.html')
            const html = fs.readFileSync(adminHtmlPath, 'utf-8')
            res.setHeader('Content-Type', 'text/html')
            res.statusCode = 200
            res.end(html)
            return
          }
          next()
        })
      },
    },
  ],
})
