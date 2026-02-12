## React Setup

> Is Vite a bundler?
- Yes — Vite is a build tool and bundler. 

> Install React with help of react vite


        https://vite.dev/guide/


> Scaffolding Your First Vite Project

bash 

        npm create vite@latest


> Delete useless files
- index.css
- App.css
- App.jsx

> Make necessary files
- App.jsx
- index.css

> Now css Tailwind integration


- 01 Create your project - done

- 02 Install Tailwind CSS

Install tailwindcss and @tailwindcss/vite via npm.

        npm install tailwindcss @tailwindcss/vite

        
- 03 -Configure the Vite plugin

Add the @tailwindcss/vite plugin to your Vite configuration.

> vite.config.ts


        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'
        import tailwindcss from '@tailwindcss/vite'

        // https://vite.dev/config/
        export default defineConfig({
        plugins: [react(),   tailwindcss(),
        ],
        })


- 04 -Import Tailwind CSS
Add an @import to your CSS file that imports Tailwind CSS.

index.css 

        @import "tailwindcss";## React Setup

> Is Vite a bundler?
- Yes — Vite is a build tool and bundler. 

> Install React with help of react vite


        https://vite.dev/guide/


> Scaffolding Your First Vite Project

bash 

        npm create vite@latest


> Delete useless files
- index.css
- App.css
- App.jsx

> Make necessary files
- App.jsx
- index.css

> Now css Tailwind integration


- 01 Create your project - done

- 02 Install Tailwind CSS

Install tailwindcss and @tailwindcss/vite via npm.

        npm install tailwindcss @tailwindcss/vite

        
- 03 -Configure the Vite plugin

Add the @tailwindcss/vite plugin to your Vite configuration.

> vite.config.ts


        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'
        import tailwindcss from '@tailwindcss/vite'

        // https://vite.dev/config/
        export default defineConfig({
        plugins: [react(),   tailwindcss(),
        ],
        })


- 04 -Import Tailwind CSS
Add an @import to your CSS file that imports Tailwind CSS.

index.css 

        @import "tailwindcss";