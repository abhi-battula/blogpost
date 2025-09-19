import { Hono } from 'hono'
import mainRouter from "./routes/index"
const app = new Hono().basePath("/api/v1")

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/',mainRouter);

export default app
