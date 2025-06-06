import { fastifyCors } from '@fastify/cors'
import fastify from 'fastify'
import {
  type ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { healthRoute } from '../routes/health.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, { origin: '*' })

app.register(healthRoute)

app.listen({ host: '0.0.0.0', port: 3333 }).then(address => {
  console.log(`[Orders] HTTP Server running at ${address}`)
})
