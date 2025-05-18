const { PrismaClient } = require('@prisma/client')

const databaseUrl = process.env.DATABASE_URL

const client = new PrismaClient({
  datasources: {
    db: {
      url: databaseUrl,
    },
  },
})

module.exports = client