# Code-first GraphQL Server Development with Prisma (GraphQL Day Bodensee 2019)

You can find the slides from the presentation [here](https://www.slideshare.net/nburk/codefirst-graphql-server-development-with-prisma).

## Get started

### 0. Install the Prisma 2 CLI

```
npm install -g prisma2
```

### 1. Clone the repository

```
git clone git@github.com:nikolasburk/nexus-prisma-demo.git
cd nexus-prisma-demo
```

### 2. Install dependencies

```
npm install
```

> **Note**: The `prisma2 generate` command is added as a `postinstall` script to `package.json`, so this will also generate the required code for Photon.js and the `nexus-prisma`plugin.

### 3. Run Prisma's development mode

```
prisma2 dev
```

> **Note**: This performs an initial database migration. To persist the migration into Lift's migration history, run `prisma2 lift save` and `prisma2 lift up` later. You can now also access Prisma Studio at [`http://localhost:5555`](http://localhost:5555).

### 4. Start the GraphQL server

```
npm start
```

### 5. Explore the GraphQL API

You can now open a GraphQL Playground at [`http://localhost:4000`](http://localhost:4000) and start sending queries and mutation to the API.

### 6. Next steps

- Explore more [Photon.js examples](https://github.com/prisma/prisma-examples/tree/prisma2)
- Read the [Prisma 2 announcement](https://www.prisma.io/blog/announcing-prisma-2-zq1s745db8i5/)
- Check out the [Prisma 2 docs](https://github.com/prisma/prisma2)
- Share your feedback in the [`prisma2-preview`](https://prisma.slack.com/messages/CKQTGR6T0/) channel on the Prisma Slack

![](https://imgur.com/4ytyVYH.png)
