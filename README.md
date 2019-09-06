# GraphQL Day 2019: Code-first GraphQL Server Development with Prisma

## Get started

### 0. Install the Prisma 2 CLI

```
npm install -g prisma2
```

### 1. Clone the repository

```
git clone 
cd nexus-demo
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

> **Note**: This performs an initial database migration. To persist the migration into Lift's migration history, run `prisma2 lift save` and `prisma2 lift up` later.

### 4. Start the GraphQL server

```
npm start
```

### 5. Explore the GraphQL API

You can now open a GraphQL Playground at [`http://localhost:4000`](http://localhost:4000) and start sending queries and mutation to the API.

## Code-first GraphQL servers without boilerplate

![](https://imgur.com/4ytyVYH.png)