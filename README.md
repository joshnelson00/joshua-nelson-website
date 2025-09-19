# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/9145eaf2-6010-4a5a-ad5e-6ad5bbfbd95a

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9145eaf2-6010-4a5a-ad5e-6ad5bbfbd95a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Deploy via Lovable
Simply open [Lovable](https://lovable.dev/projects/9145eaf2-6010-4a5a-ad5e-6ad5bbfbd95a) and click on Share -> Publish.

### Option 2: Deploy to GitHub Pages
This project is configured for easy deployment to GitHub Pages:

#### Prerequisites
- Node.js & npm installed
- Git repository set up on GitHub
- `gh-pages` package installed (already included in devDependencies)

#### Deployment Steps

1. **Build the project**
   ```bash
   npm run build:gh-pages
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```
   This will automatically build the project and deploy it to the `gh-pages` branch.

3. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" > "Pages"
   - Under "Source", select "Deploy from a branch"
   - Choose the `gh-pages` branch and `/ (root)` folder
   - Click "Save"

4. **Access your site**
   Your site will be available at: `https://<your-username>.github.io/<your-repo-name>/`

#### Custom Domain

To connect a custom domain to your GitHub Pages site:

1. **Configure GitHub Pages**
   - Go to repository Settings > Pages
   - Under "Custom domain", enter your domain
   - Check "Enforce HTTPS"

2. **Configure DNS**
   Add a CNAME record pointing to `<your-username>.github.io`

### Option 3: Lovable Custom Domain

Yes, you can also connect a custom domain via Lovable!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
