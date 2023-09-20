export default async function plugin(fastify, options) {
  fastify.get('/', options, function (request, reply) {
    reply.header('Content-Type', 'text/html');
    reply.send('ok');
  });
}
