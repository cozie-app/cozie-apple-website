# Cozie Apple Website

This repository contains the code for the [Cozie Apple](https://cozie.app/) project, built with [Docusaurus 2](https://docusaurus.io/).

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Upgrade Docusaurus](#upgrade-docusaurus)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- 📚 Documentation powered by Docusaurus 2
- ⚡ Fast local development with hot reload
- 🚀 Automated deployment via GitHub Actions

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x or later recommended)
- [Yarn](https://yarnpkg.com/) (preferred over npm)

Check your Node.js and Yarn versions:

```bash
node -v
yarn -v
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/cozie-app/cozie-apple-website.git
cd cozie-apple-website
```

Install dependencies:

```bash
yarn install
```

## Local Development

Start the development server:

```bash
yarn start
```

- The site will open automatically in your browser.
- Changes are hot-reloaded.

## Deployment

Deployment is automated via GitHub Actions on every push to the `main` branch.

To deploy manually (or from a different branch):

```bash
yarn build
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

- Ensure you have push access to the repository.
- See [Docusaurus deployment docs](https://docusaurus.io/docs/deployment) for more options.

## Upgrade Docusaurus

To upgrade Docusaurus and its core packages:

```bash
yarn upgrade
yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest
```

## Contributing

We welcome contributions! To get started:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes following [best practices](https://docusaurus.io/docs).
4. Commit and push: `git commit -m "Add feature"` then `git push origin feature/your-feature-name`
5. Open a Pull Request.

Please follow the existing code style and add documentation/tests as appropriate.

## Troubleshooting

- **Port already in use:** Change the port with `yarn start --port 3001`
- **Build errors:** Ensure Node.js and Yarn versions are up to date.
- **Deployment issues:** Check your SSH keys and GitHub permissions.

For more help, see the [Docusaurus Troubleshooting Guide](https://docusaurus.io/docs/troubleshooting).

## License

[MIT](LICENSE)

---
For questions or support, open an issue or contact the [Cozie team](https://cozie.app/).
