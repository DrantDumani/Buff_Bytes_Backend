const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

async function main(){
  await reset()
 const testCat =  await prisma.category.create({
    data: {
      name: "Test Category"
    }
  })

  await prisma.exercise.create({
    data: {
      name: "Barbell test",
      type: "primary",
      cat_id: testCat.id
    }
  })
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