# ecosystem.Ai Docs

Based on [Nextra](https://nextra.site/)

## Local Development

Pre-requisites: Node.js 18+, pnpm 9+

1. Optional: Create env based on [.env.template](./.env.template)
2. Run `npm i` to install the dependencies.
3. Run `npm run dev` to start the development server on localhost:3333
4. Run `npm build` to build...
5. Run `npm start` to start the production server on localhost:3333

⚠️ **Note: try building prod before making a PR**

## Bundle analysis

Run `pnpm run analyze` to analyze the bundle size of the production build using `@next/bundle-analyzer`.
