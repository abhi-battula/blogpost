import { Hono } from 'hono'
import mainRouter from "./routes/index"
import {cors} from "hono/cors"

const app = new Hono<{Bindings: {DATABASE_URL:string}}>().basePath("/api/v1")
app.use('/*',cors())
app.get('/', (c) => { // c stands for context , which have req , res , env_varibales , so many
//   const prisma = new PrismaClient({
//     // we will use yhis "@ts-ignore" to avoide the typescript errors
//     datasourceUrl: c.env.DATABASE_URL,
// }).$extends(withAccelerate())

  return c.text('Hello Hono!')
})

app.route('/',mainRouter);

export default app
