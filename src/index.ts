import { GraphQLServer } from 'graphql-yoga'
import { makeSchema, objectType, stringArg, idArg } from 'nexus'
import Photon from '@generated/photon'
import { nexusPrismaPlugin } from '@generated/nexus-prisma'

const photon = new Photon()

const nexusPrismaTypes = nexusPrismaPlugin({
  photon: ctx => ctx.photon,
})

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.email()
    t.model.name()
    t.model.posts()
  },
})

const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.content()
    t.model.published()
    t.model.author()
  },
})

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.users()
    t.crud.posts({
      filtering: true,
      ordering: true,
      pagination: true,
    })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneUser({
      alias: 'createUser',
    })

    t.crud.updateOneUser({
      alias: 'updateUser',
    })

    t.crud.createOnePost({
      alias: 'createDraft',
    })

    t.field('publish', {
      type: 'Post',
      args: {
        id: idArg(),
      },
      resolve: (_, args) =>
        photon.posts.update({
          where: { id: args.id },
          data: { published: true },
        }),
    })
  },
})

const schema = makeSchema({
  types: [Query, Mutation, User, Post, nexusPrismaTypes],

  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },

  nonNullDefaults: {
    input: true,
  },
})

const server = new GraphQLServer({ schema, context: { photon } })
server.start(() => console.log(`Server running on http://localhost:4000`))
