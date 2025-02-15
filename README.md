# DesignGlow Portal

## Project Overview

A modern, responsive tourism portal built with React, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm (v8 or later)

### Installation

```sh
# Clone the repository
git clone https://github.com/your-username/designglow-portal.git

# Navigate to the project directory
cd designglow-portal

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Development Scripts

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run preview`: Preview production build
- `npm run lint`: Run linter

## Deployment

### Vercel Deployment

#### Prerequisites
- Vercel account
- GitHub repository

#### Deployment Steps
1. Log in to [Vercel Dashboard](https://vercel.com)
2. Import the GitHub repository
3. Vercel will automatically detect the following configurations:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

#### Environment Variables
No specific environment variables are required for this project.

#### Troubleshooting
- Ensure all dependencies are correctly listed in `package.json`
- Check that the build script works locally before deploying
- Verify that `vercel.json` is correctly configured for SPA routing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
