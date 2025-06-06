import { date, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const order = pgTable('order', {
  id: uuid('id').primaryKey().defaultRandom(),
  customerId: uuid('customer_id').notNull(),
  address: text('address').notNull(),
  createdAt: date().notNull().defaultNow(),
})
