import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Start seeding...')

  const advertisement = await prisma.advertisement.upsert({
    where: { id: 't3st4dv3rt1s3m3nt' },
    update: {},
    create: {
      id: 't3st4dv3rt1s3m3nt',
      title: '2023 BMW 4 Series 420i',
      imageUrl: '/test.jpg'
    }
  })

  console.log(advertisement, '\n\n✅ Seeding done.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async () => {
    await prisma.$disconnect()
    process.exit(1)
  })
