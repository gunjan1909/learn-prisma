import { PrismaClient } from "@prisma/client";
import { compileFunction } from "vm";
const prisma = new PrismaClient();

async function main() {
  //delete all users everytime (for learning purpose)
  //await prisma.user.deleteMany();

  /*const user = await prisma.user.create({
    data: {
      name: "Gunjan",
      email: "bhanarkaranita@gmail.com",
      age: 21,
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    select: {
      name: true,
      userPreference: {
        select: { id: true },
      },
    },
  });*/

  /* const users = await prisma.user.createMany({
    data: [
      {
        name: "Gunjan",
        email: "bhanarkaranita@gmail.com",
        age: 21,
      },
      {
        name: "Prachi",
        email: "prachi@gmail.com",
        age: 18,
      },
    ],
  });*/

  const user = await prisma.user.findUnique({
    where: {
      age_name: {
        age: 21,
        name: "Gunjan",
      },
    },
  });

  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
