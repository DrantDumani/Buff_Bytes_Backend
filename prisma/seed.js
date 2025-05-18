const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

async function main(){
  await reset()
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "Upper Push"
      }
    }),
    prisma.category.create({
      data: {
        name: "Upper Pull"
      }
    }),
    prisma.category.create({
      data: {
        name: "Lower Pull"
      }
    }),
    prisma.category.create({
      data: {
        name: "Lower Push"
      }
    })
  ])

  await Promise.all([
    prisma.exercise.create({
      data: {
        name: "Barbell Squat",
        cat_id: categories[3].id,
        type: "primary",
        mult: 1
      }
    }),
    prisma.exercise.create({
      data: {
        name: "Leg Press",
        cat_id: categories[3].id,
        type: "substitute",
        mult: 2
      }
    }),
    prisma.exercise.create({
      data: {
        name: "Dumbbel Lunge",
        cat_id: categories[3].id,
        type: "substitute",
        mult: 0.5
      }
    })
  ])
}

async function reset() {
  await prisma.exercise.deleteMany(),
   await prisma.category.deleteMany()
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Database has been seeded")
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });