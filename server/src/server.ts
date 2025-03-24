import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './lib/routes';

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3333,
    host: "192.168.0.147"
}).then(() => {
    console.log('HTTP Server running on port 3333')
});