// Seed demo bookings for client preview / demo purposes
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.booking.create({
    data: {
      name: "Demo Customer",
      mobile: "9999999999",
      location: "Sector 18, Noida",
      pestType: "Cockroach",
      propertyType: "2BHK",
      scheduledAt: new Date(Date.now() + 86400000), // tomorrow
      status: "CONFIRMED",
    },
  });
  console.log("Demo booking seeded");
}

main().then(() => prisma.$disconnect());
