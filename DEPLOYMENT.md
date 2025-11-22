# Deployment Guide

## Publishing to npm

### Prerequisites

1. Create an npm account at [npmjs.com](https://www.npmjs.com/)
2. Login to npm:
   ```bash
   npm login
   ```

### Publishing Steps

1. **Update package name** in `package.json`:
   ```json
   {
     "name": "@your-org/radix-design-system"
   }
   ```

2. **Update version** (if needed):
   ```bash
   npm version patch  # 1.0.0 -> 1.0.1
   npm version minor  # 1.0.0 -> 1.1.0
   npm version major  # 1.0.0 -> 2.0.0
   ```

3. **Build the library**:
   ```bash
   npm run build:lib
   ```

4. **Publish to npm**:
   ```bash
   # For scoped packages (first time)
   npm publish --access public

   # For subsequent publishes
   npm publish
   ```

## Deploying Storybook

### Option 1: Vercel (Recommended)

1. Build Storybook:
   ```bash
   npm run build-storybook
   ```

2. Deploy to Vercel:
   ```bash
   npx vercel
   ```

   Or connect your GitHub repo to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Set build command: `npm run build-storybook`
   - Set output directory: `storybook-static`

### Option 2: Netlify

1. Build Storybook:
   ```bash
   npm run build-storybook
   ```

2. Deploy to Netlify:
   ```bash
   npx netlify deploy --prod --dir=storybook-static
   ```

   Or use Netlify UI:
   - Go to [netlify.com](https://www.netlify.com/)
   - Drag and drop the `storybook-static` folder

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add deploy script to `package.json`:
   ```json
   {
     "scripts": {
       "deploy-storybook": "npm run build-storybook && gh-pages -d storybook-static"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy-storybook
   ```

4. Enable GitHub Pages in repository settings pointing to `gh-pages` branch

### Option 4: Cloudflare Pages

1. Build Storybook:
   ```bash
   npm run build-storybook
   ```

2. Connect repository to Cloudflare Pages:
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com/)
   - Connect GitHub repository
   - Set build command: `npm run build-storybook`
   - Set output directory: `storybook-static`

## CI/CD Automation

### GitHub Actions - Auto-publish to npm

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build:lib
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### GitHub Actions - Auto-deploy Storybook

Create `.github/workflows/storybook.yml`:

```yaml
name: Deploy Storybook

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build-storybook
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

## Post-Deployment

After deploying:

1. Update `package.json` homepage URL
2. Update README.md with Storybook URL
3. Test installation:
   ```bash
   npm install @your-org/radix-design-system
   ```
4. Verify all components work in a test project
