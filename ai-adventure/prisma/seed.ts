import { prisma } from '../src/server/db'

async function main() {
  // Create demo leads
  for (let i = 1; i <= 10; i++) {
    await prisma.lead.create({
      data: { email: `lead${i}@example.com`, source: 'WEBINAR' },
    })
  }

  // Create demo users with orders
  for (let i = 1; i <= 5; i++) {
    const user = await prisma.user.create({
      data: { email: `user${i}@example.com` },
    })
    await prisma.order.create({
      data: {
        userId: user.id,
        product: 'CAMP',
        stripeIntent: 'test',
        amount: 25000,
        status: 'PAID',
      },
    })
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
