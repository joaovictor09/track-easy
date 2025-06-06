import { date, pgTable, uuid } from 'drizzle-orm/pg-core'
import { order } from './order.ts'

export const orderItem = pgTable('order_item', {
  id: uuid('id').primaryKey().defaultRandom(),
  orderId: uuid('order_id')
    .notNull()
    .references(() => order.id),
  productId: uuid('product_id').notNull(),
  createdAt: date().notNull().defaultNow(),
})
