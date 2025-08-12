# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Getting Started

To get started with this project, you need to have [Node.js](https://nodejs.org/) installed on your machine.
You can check if you have Node.js installed by running:

```
node -v
```

If you don't have Node.js installed, you can download it from the [official website](https://nodejs.org/en/download/).

## Installation

First, clone the repository:

```bash
git clone https://github.com/cozie-app/cozie-apple-website.git
```

Then, navigate into the project directory:

```bash
cd cozie-apple-website
yarn install
```

### Local Development

```bash
yarn start
```

This command starts a local development server and open up a browser window. 
Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

On Linux (or using Git Bash on Windows) you can deploy using the following command:
```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Upgrade Docusaurus

```
yarn upgrade 
yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest
```