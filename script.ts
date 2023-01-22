import { PrismaClient } from "@prisma/client";
import { compileFunction } from "vm";
const prisma = new PrismaClient();

async function main() {
  //delete all users everytime (for learning purpose)
  //await prisma.user.deleteMany();
  //CREATE
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
  //adding many users at once
  /* const users =await prisma.user.createMany({
    data: [
      {
        name: "Gunjan",
        email: "bhanarkaranita@gmail3.com",
        age: 22,
      },
      {
        name: "Prachi",
        email: "prachi@gmail3.com",
        age: 19,
      },
    ],
  });*/
  // READ
  /*const user = await prisma.user.findUnique({
    where: {
      age_name: {
        age: 21,
        name: "Gunjan",
      },
    },
  });*/
  /*const user = await prisma.user.findMany({
    where: {
      // name: { not: "Gunjan" },
      // age greater than 17
      //age: { gt: 20 },

      //name Gunjan and age greater than 21
      //name: "Gunjan",
      //age: { gt: 21 },

      email: { contains: "@gmail.com" },
    },
    orderBy: {
      age: "asc",
    },
    // distinct: ["name"],

    //show just 2
    // take: 2,
    //skip the first one
    //  skip: 1,
  });
  //console.log(user.length);*/
  /*const user = await prisma.user.findMany({
    //queries on relationships
    /* where: {
      userPreference: {
        emailUpdates: true,
      },
    },

    //every post the person writes has title test, return the user
    where: {
      writtenPosts: {
        every: {
          title: "Test",
        },
      },
    },
  });*/
  //UPDATE
  /*const user = await prisma.user.update({
    where: {
      email: "bhanarkaranita@gmail3.com",
    },
    data: {
      email: "gunjan@gmail3.com",
    },
  });*/
  //DELETE
  /* const user = await prisma.user.delete({
    where: {
      email: "gunjan@gmail3.com",
    },
  });*/
  //console.log(user);
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
