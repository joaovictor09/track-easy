import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const healthRoute: FastifyPluginAsyncZod = async app => {
  app.get('/health', (_, reply) => {
    return reply.status(200).send('ok')
  })
}
